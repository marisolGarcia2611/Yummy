import { React, Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/yummy.svg";
import perfil from "../images/usuario.png";
import HeaderPage from "./Components/HeaderPage";
import Admin from ".";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AlertClass } from "../AlertClass";
import { BranchOfficeServiceClass } from "./Services/BranchOfficeService";
import { BranchOfficesClass, Table, Form } from "./Models/BranchOfficeClass";

const MySwal = withReactContent(Swal);
// const User = new UserClass();
const BranchOfficeService = new BranchOfficeServiceClass();
const cookies = new Cookies();
const Alert = new AlertClass();
const current_folder = "Administación";
const current_page = "Sucursales";
const icon_page = "fa-solid fa-store";

class BranchOffices extends Component {
  state = {
    theads: [
      { name: "Sucursal" },
      { name: "ciudad" },
      { name: "Estado" },
      { name: "Pais" },
      { name: "Dirección" },
      { name: "Acciones" },
    ],
    registers: [],
    form_data: {
      bo_id: null,
      bo_name: null,
      bo_city: null,
      bo_state: null,
      bo_country: null,
      bo_address: null,
    },
    countries: [],
    states: [],
    cities: [],
  };

  componentDidMount(e) {
    this.GetListBranchOffices();
    // this.GetListRoles();
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

  GetListBranchOffices = async (e) => {
    const branch_offices_request = async () => {
      return await BranchOfficeService.GetList();
    };
    branch_offices_request().then((res) => {
      // console.log(res)
      this.setState({
        registers: res.data,
      });
    });
  };

  // GetListRoles = (e) => {
  //   const roles_request = async () => {
  //     return await roleService.GetList();
  //   };
  //   roles_request().then((res) => {
  //     // console.log(res.data)
  //     this.setState({
  //       roles: res.data,
  //     });
  //   });
  // };

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
      return await BranchOfficeService.CreateObject(data);
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
      return await BranchOfficeService.GetObject(id);
    };
    request().then((res) => {
      // console.log(res.data[0]);
      this.setState({
        form_data: {
          bo_id: res.data[0].bo_id,
          bo_name: res.data[0].bo_name,
          bo_country: res.data[0].bo_country,
          bo_state: res.data[0].bo_state,
          bo_city: res.data[0].bo_city,
          bo_address: res.data[0].bo_address,
        },
      });
    });
  };

  UpdateObject = async (e) => {
    // element = e.target
    let data = this.state.form_data;
    // console.log(data);
    const request = async () => {
      return await BranchOfficeService.UpdateObject(data);
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
    this.GetListBranchOffices(e);
    document.querySelector(".btn-close").click();
  };

  DeleteObject = async (e) => {
    let id = e.target.getAttribute("data-id");
    let sucursal = e.target.getAttribute("data-name");
    Swal.fire({
      title: `Estas seguro de elimnar a `,
      text: sucursal,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Eliminar!`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(e.target);
        // element = e.target
        let id = e.target.getAttribute("data-id");
        // console.log(id);
        const request = async () => {
          return await BranchOfficeService.DeleteObject(id);
        };
        request().then((res) => {
          // console.log(res);
          Alert.Toast(res.alert_icon, res.alert_text);
          this.GetListBranchOffices(e);
        });
      }
    });
  };

  ClearForm = async (e) => {
    e.persist();
    await this.setState({
      form_data: {
        bo_id: null,
        bo_name: null,
        bo_country: null,
        bo_state: null,
        bo_city: null,
        bo_address: null,
        bo_active: true,
      },
    });
    document.getElementById("bo_id").value = this.state.form_data.bo_id;
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
                  SUCURSAL
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
            id={this.state.form_data.bo_id}
            UpdateObject={this.UpdateObject}
            CreateObject={this.CreateObject}
            ClearForm={this.ClearForm}
          />
        </div>
      </>
    );
  }
}
export default BranchOffices;
