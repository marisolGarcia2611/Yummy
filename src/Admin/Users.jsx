import { React, Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/yummy.svg";
import perfil from "../images/usuario.png";
import HeaderPage from "./Components/HeaderPage";
// import Form from "./Components/forms";
import Admin from ".";
import axios from "axios";
import Cookies from "universal-cookie";
// import DataTableCrudDemo from "./pruebas";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AlertClass } from "../AlertClass";
// import Table from "./Components/Table";
import { FormClass, UserService } from "./service/UserService";
import { UserClass, Table, Form } from "./Models/UserClass";
import { RoleClass } from "./Models/RoleClass";
import { RoleService } from "./service/RoleService";

const MySwal = withReactContent(Swal);
const User = new UserClass();
const userService = new UserService();
const Role = new RoleClass();
const roleService = new RoleService();
// const Form = new FormClass();
const cookies = new Cookies();
const Alert = new AlertClass();
const API = "http://127.0.0.1:8000/api";
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const current_page = "Usuarios";
const axiosInstance = axios.create({
  baseURL: API,
  timeout: 3500,
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${cookies.get("Authorization")}`,
  },
});

class Users extends Component {
  state = {
    theads: [
      { name: "Nombres" },
      { name: "Apellidos" },
      { name: "Correo" },
      { name: "Usuario" },
      { name: "Teléfono" },
      { name: "Acciones" },
    ],
    registers: [],
    form_data: {
      id: null,
      name: null,
      last_name: null,
      email: null,
      username: null,
      password: null,
      role_id: null,
      phone: null,
    },
    roles: [],
  };

  componentDidMount(e) {
    this.GetListUsers();
    this.GetListRoles();
    setTimeout(() => {
      this.SetDataTableStyle(e);
    }, 1500);
  }



  SetDataTableStyle(e) {
    let tabla;

    tabla = $("#tabla").DataTable({
      responsive: true,
      language: {
        url: "https://cdn.datatables.net/plug-ins/1.11.3/i18n/es-mx.json",
      },
      columnDefs: [
        {
          className: "dt-center",
          targets: "_all",
        },
      ],
      dom: '<"row"<"col-md-6 "l> <"col-md-6"f> > rt <"row"<"col-md-6 "i> <"col-md-6"p> >',
      lengthMenu: [
        [5, 10, 50, 100, -1],
        [5, 10, 50, 100, "Todos"],
      ],
      pageLength: 10,
      deferRender: true,
      aaSorting: [], //deshabilitar ordenado automatico
      bDestroy: true,
    });
  }

  GetListUsers = async (e) => {
    const users_request = async () => {
      return await userService.GetList();
    };
    users_request().then((res) => {
      // console.log(res)
      this.setState({
        registers: res.data,
      });
    });
  };

  GetListRoles = (e) => {
    const roles_request = async () => {
      return await roleService.GetList();
    };
    roles_request().then((res) => {
      // console.log(res.data)
      this.setState({
        roles: res.data,
      });
    });
  };

  handleChange = async (e) => {
    e.persist();
    await this.setState({
      form_data: {
        ...this.state.form_data,
        [e.target.name]: e.target.value,
      },

    });
    // console.log(this.state.form_data)
  };

  CreateObject = async (e) => {
    // element = e.target
    let data = this.state.form_data;
    // console.log(data);
    const request = async () => {
      return await userService.CreateObject(data);
    };
    request().then((res) => {
      // console.log(res);
      this.setState({
        form_data: res.data,
      });
      Alert.Toast(res.alert_icon, res.alert_text);
      this.ResetTableAndForm(e);
    });
  };

  GetObject = async (e) => {
    // console.log(e.target);
    // element = e.target
    let id = e.target.getAttribute("data-id");
    // console.log(id);
    const request = async () => {
      return await userService.GetObject(id);
    };
    request().then((res) => {
      // console.log(res.data[0]);
      this.setState({
        form_data: {
          id: res.data[0].id,
          name: res.data[0].name,
          last_name: res.data[0].last_name,
          email: res.data[0].email,
          username: res.data[0].username,
          password: res.data[0].password,
          role_id: res.data[0].role_id,
          phone: res.data[0].phone,
        },
      });
    });
    // document.getElementById("role_id").value = res.data[0].role_id;
    // setTimeout(function () {
    //     document.querySelector('#name').value = this.state.form_data.name
    //     document.querySelector('#last_name').value = this.state.form_data.last_name
    //     document.querySelector('#email').value = this.state.form_data.email
    //     document.querySelector('#username').value = this.state.form_data.username
    //     document.querySelector('#password').value = this.state.form_data.password
    //     document.querySelector('#role_id').value = this.state.form_data.role_id
    //     document.querySelector('#phone').value = this.state.form_data.phone
    //     document.getElementById("name").focus();
    //   }, 1000);
    // console.log(this.state.form_data);
  };

  UpdateObject = async (e) => {
    // element = e.target
    let data = this.state.form_data;
    // console.log(data);
    const request = async () => {
      return await userService.UpdateObject(data);
    };
    request().then((res) => {
      // console.log(res);
      this.setState({
        form_data: res.data,
      });
      Alert.Toast(res.alert_icon, res.alert_text);
      this.ResetTableAndForm(e);
    });
  };
  ResetTableAndForm = (e) => {
    this.ClearForm(e);
    this.GetListUsers(e);
    document.querySelector(".btn-close").click();
  };

  DeleteObject = async (e) => {
    let id = e.target.getAttribute("data-id");
    let username = e.target.getAttribute("data-username");
    Swal.fire({
      title: `Estas seguro de elimnar a `,
      text: username,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Eliminar!`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(e.target);
        // element = e.target
        let id = e.target.getAttribute("data-id");
        console.log(id);
        const request = async () => {
          return await userService.DeleteObject(id);
        };
        request().then((res) => {
          console.log(res);
          Alert.Toast(res.alert_icon, res.alert_text);
          this.GetListUsers(e);
        });
      }
    });
  };

  ClearForm = async (e) => {
    e.persist();
    // console.log(this.state.roles)
    // console.log(this.state.form_data)
    // document.querySelector('#name').value = ""
    // document.querySelector('#last_name').value = ""
    // document.querySelector('#email').value = ""
    // document.querySelector('#username').value = ""
    // document.querySelector('#password').value = ""
    // document.querySelector('#role_id').value = "-1"
    // document.querySelector('#phone').value = ""
    await this.setState({
      form_data: {
        id: null,
        name: null,
        last_name: null,
        email: null,
        username: null,
        password: null,
        role_id: -1,
        phone: null,
      },
    });
    document.getElementById("role_id").value = this.state.form_data.role_id;
    console.log(this.state.form_data);
  };
  click() {
    Alert.Toast("success", "Toast de prueba");
  }

  render() {
    // console.log(this.state.form_data)
    return (
      <>
        <Admin />
        {/* <!-- Content Wrapper. Contenido de la pagina --> */}
        <div className="content-wrapper">
          {/* {props.block("Cargala compa")} */}
          {/* {props.toast("success","Aaaajasss")} */}
          {/* <!-- Content Header (Encabezado en el contenido de la pagina) --> */}
          <HeaderPage current_page={current_page} />

          {/* <!-- Main content --> */}
          <div className="content">
            {/* <!-- card --> */}
            <div className="card card-outline card-dark shadow">
              <div className="container-fluid mt-2">
                <button
                  id="btn_abrir_modal"
                  className="float-end btn btn-success fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  onClick={this.ClearForm}
                >
                  <i className="fa-solid fa-circle-plus"></i>&nbsp; AGREGAR
                  USUARIO
                </button>
              </div>
              <div className="card-body">
                <Table
                  theads={this.state.theads}
                  data={this.state.registers}
                  UpdateObject={this.GetObject}
                  // DeleteObject={Alert.Delete("Estas seguro de eliminar a ","j","eliminado",this.DeleteObject(e))}
                  DeleteObject={this.DeleteObject}
                />
              </div>
            </div>
          </div>

          {/* <!-- Modal Usuario --> */}
          <Form 
            handleChange={this.handleChange}
            form_data={this.state.form_data}
            roles={this.state.roles}
            id={this.state.form_data.id}
            UpdateObject={this.UpdateObject}
            CreateObject={this.CreateObject}
            ClearForm={this.ClearForm}/>
        </div>
      </>
    );
  }
}
export default Users;
