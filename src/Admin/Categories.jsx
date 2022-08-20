import { React, Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/yummy.svg";
import perfil from "../images/usuario.png";
import HeaderPage from "./Components/HeaderPage";
import Admin from ".";
import axios from "axios";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AlertClass } from "../AlertClass";
import { CategoryServiceClass } from "./Services/CategoryService";
import { CategoryClass, Table, Form } from "./Models/CategoryClass";

const MySwal = withReactContent(Swal);
const Category = new CategoryClass();
const CategoryService = new CategoryServiceClass();

const cookies = new Cookies();
const Alert = new AlertClass();
const current_folder = "Administación";
const current_page = "Categorias";
const icon_page = "fa-solid fa-scroll";
// const icon_page = "fa-solid fa-user-tie";

class Categories extends Component {
  state = {
    theads: [
      { name: "Categoria" },
      { name: "Descripción" },
      { name: "Acciones" },
    ],
    registers: [],
    form_data: {
      cat_id: null,
      cat_name: null,
      cat_description: null,
    },
  };

  componentDidMount(e) {
    this.GetList();
    setTimeout(() => {
      this.SetDataTableStyle(e);
    }, 1500);
  }

  validar(data) {
    let msg = ''
    let hayError = false
    if (data.cat_name == '') {
      msg = 'Por favor, introduce un nombre';
      hayError = true;
    }
    if (data.cat_description == '') {
      msg = 'Por favor, introduce una descripción';
      hayError=true
    }
    if (hayError) {
        Swal.fire({
          title: "Error",
          text: msg,
          icon: 'error'
        })
      return ({msg:msg, hayError:false});
    }
    return true;
  };


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

  GetList = async (e) => {
    const users_request = async () => {
      return await CategoryService.GetList();
    };
    users_request().then((res) => {
      console.log(res);
      this.setState({
        registers: res.data,
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
    let ajas = this.validar(data)
    console.log("🚀 ~ file: Categories.jsx ~ line 125 ~ Categories ~ CreateObject= ~ ajas", ajas)
    if (ajas==false) {
      Alert.Toast("error","sass")
      return
    }
    const request = async () => {
      return await CategoryService.CreateObject(data);
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
      return await CategoryService.GetObject(id);
    };
    request().then((res) => {
      console.log(res.data[0]);
      this.setState({
        form_data: {
          cat_id: res.data[0].cat_id,
          cat_name: res.data[0].cat_name,
          cat_description: res.data[0].cat_description,
        },
      });
    });
  };

  UpdateObject = async (e) => {
    // element = e.target
    let data = this.state.form_data;
    // console.log(data);
    const request = async () => {
      return await CategoryService.UpdateObject(data);
    };
    request().then((res) => {
      // console.log(res);
      this.setState({
        form_data: res.data,
      });
      Alert.Toast(res.alert_icon, res.alert_text);
      this.ResetTableAndForm(e);
    });
    validar(data)
  };
  ResetTableAndForm = (e) => {
    this.ClearForm(e);
    this.GetList(e);
    document.querySelector(".btn-close").click();
  };

  DeleteObject = async (e) => {
    let id = e.target.getAttribute("data-id");
    let cat_name = e.target.getAttribute("data-name");
    Swal.fire({
      title: `Estas seguro de elimnar a `,
      text: cat_name,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Eliminar!`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        const request = async () => {
          return await CategoryService.DeleteObject(id);
        };
        request().then((res) => {
          // console.log(res);
          Alert.Toast(res.alert_icon, res.alert_text);
          this.GetList(e);
        });
      }
    });
  };

  ClearForm = async (e) => {
    e.persist();
    await this.setState({
      form_data: {
        cat_id: null,
        cat_name: null,
        cat_description: null,
      },
    });
    // console.log(this.state.form_data);
  };

  

  render() {
    // console.log(this.state.form_data)
    return (
      <>
        <Admin />
        {/* <!-- Content Wrapper. Contenido de la pagina --> */}
        <div className="content-wrapper">
          {/* <!-- Content Header (Encabezado en el contenido de la pagina) --> */}
          <HeaderPage
            icon_page={icon_page}
            current_folder={current_folder}
            current_page={current_page}
          />

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
                  CATEGORIA
                </button>
              </div>
              <div className="card-body">
                <Table
                  theads={this.state.theads}
                  data={this.state.registers}
                  UpdateObject={this.GetObject}
                  DeleteObject={this.DeleteObject}
                />
              </div>
            </div>
          </div>

          {/* <!-- Modal Usuario --> */}
          <Form
            handleChange={this.handleChange}
            form_data={this.state.form_data}
            id={this.state.form_data.cat_id}
            UpdateObject={this.UpdateObject}
            CreateObject={this.CreateObject}
            ClearForm={this.ClearForm}
          />
        </div>
      </>
    );
  }
}
export default Categories;
