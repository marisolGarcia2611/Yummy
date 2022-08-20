import { React, Component, useEffect, useState } from "react";
import HeaderPage from "./Components/HeaderPage";
import Admin from ".";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AlertClass } from "../AlertClass";
import { ProductClass, Table, Form } from "./Models/ProductClass";
import { ProductServiceClass } from "./Services/ProductService";

const MySwal = withReactContent(Swal);
const Product = new ProductClass();
const ProductService = new ProductServiceClass();

const cookies = new Cookies();
const Alert = new AlertClass();
const current_folder = "Productos"
const current_page = "Productos";
const icon_page = "fa-solid fa-cup-togo";
// const icon_page = "fa-solid fa-user-tie";

export default class Products extends Component {
  state = {
    theads: [
      { name: "Producto" },
      { name: "Categoría" },
      { name: "Precio" },
      { name: "Acciones" },
    ],
    registers: [],
    form_data: {
      pro_id: null,
      pro_name: null,
      pro_cat_id: null,
      pro_price: null,
    },
  };

  componentDidMount(e) {
    this.GetList();
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

  GetList = async (e) => {
    const users_request = async () => {
      return await ProductService.GetList();
    };
    users_request().then((res) => {
      // console.log(res)
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
    if (!validar) {
      return
    }
    const request = async () => {
      return await ProductService.CreateObject(data);
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
      return await ProductService.GetObject(id);
    };
    request().then((res) => {
      // console.log(res.data[0]);
      this.setState({
        form_data: {
          pro_id: res.data[0].pro_id,
          pro_name: res.data[0].pro_name,
        },
      });
    });
  };

  UpdateObject = async (e) => {
    // element = e.target
    let data = this.state.form_data;
    // console.log(data);
    const request = async () => {
      return await ProductService.UpdateObject(data);
    };
    request().then((res) => {
      // console.log(res);
      this.setState({
        form_data: res.data,
      });
      Alert.Toast(res.alert_icon, res.alert_text);
      this.ResetTableAndForm(e);
    });
    const validar = (data) => {
      msg = ''
      hayError = false
      if (data.pro_name == '') {
        msg = 'Por favor, introduce un nombre';
        hayError = true;
      }
      if (data.pro_price == '' || data.pro_price == '0.00') {
        msg = 'Por favor, introduce un precio valido';
      }
      if (hayError) {
          Swal.fire({
            title: "Error",
            text: msg,
            icon: 'error'
          })
        return false;
      }
      return true;
    };
  };
  ResetTableAndForm = (e) => {
    this.ClearForm(e);
    this.GetList(e);
    document.querySelector(".btn-close").click();
  };

  DeleteObject = async (e) => {
    let id = e.target.getAttribute("data-id");
    let producto = e.target.getAttribute("data-name");
    Swal.fire({
      title: `Estas seguro de elimnar a `,
      text: producto,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Eliminar!`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        const request = async () => {
          return await ProductService.DeleteObject(id);
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
        pro_id: null,
        pro_name: null,
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
          <HeaderPage icon_page={icon_page} current_folder={current_folder} current_page={current_page} />

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
                  PRODUCTO
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
            id={this.state.form_data.pro_id}
            UpdateObject={this.UpdateObject}
            CreateObject={this.CreateObject}
            ClearForm={this.ClearForm}/>
        </div>
      </>
    );
  }
}