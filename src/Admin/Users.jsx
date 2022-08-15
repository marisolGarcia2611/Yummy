import { React, Component, useEffect, useState } from "react";
// Se importa Link de react router dom, que es el que hara la funcion
// de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
// Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
// import '../../App.css';
import logo from "../images/yummy.svg";
import perfil from "../images/usuario.png";
import HeaderPage from "./Components/HeaderPage";
import Table from "./Components/Table";
import Form from "./Components/forms";
// import NavBar from "./Components/NavBar";
// import SideBar from "./Components/SideBar";
import Admin from ".";
import axios from "axios";
import Cookies from "universal-cookie";
// import DataTableCrudDemo from "./pruebas";
import { AlertClass } from "../AlertClass";

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


function POSTRequest(url) {
  useEffect(() => {
    // const [post, setPost] = React.useState(null);

    // headers: { Authorization: `Bearer Bearer 4|K32hYx2YAfR0JkOHeECE1mOcwQ0K4xfPDHV7bfDW`}//${cookies.get("Authorization")}` }
    const request = async () => {
      return await axiosInstance.get(`/${url}`, {}).catch((response) => {
        let { message } = response.response.data.errors;

        throw new Error(message[0]);
      });
    };
    request().then((res) => {
      // setCategorias(res.data.data)
      console.log(res.data.data);
    });
  }, []);
}
function click() {
  Alert.Toast("success","Toast de prueba");
}

const Users = (props) => {
  const [GETData, setData] = useState([]);
  function GETRequest(url) {
    useEffect(() => {
      const request = async () => {
        return await axiosInstance.get(`/${url}`).catch((response) => {
          let objResponse = response.data;
  
          throw new Error(message[0]);
        });
      };
      request().then((res) => {
        setData(res.data.data)
        // console.log(res.data.data);
      });
    }, []);
  }
  let btn_abrir_modal = document.querySelector("#btn_abrir_modal");
  GETRequest("users");

  return (
    <section>
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
                onClick={() => click()}
              >
                <i className="fa-solid fa-circle-plus"></i>&nbsp; AGREGAR
                USUARIO
              </button>
            </div>
            <div className="card-body">
              {/* <!-- tabla --> */}
              {/* <DataTableCrudDemo /> */}
              {/* <Table data={registers} click={() => click()}/> */}
              <Table 
                data={GETData} 
              />
            </div>
          </div>
        </div>

        {/* <!-- Modal Usuario --> */}
        {/* <Form data={data}/> */}
      </div>
    </section>
  );
};

export default Users;
