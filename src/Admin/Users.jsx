import { React, Component, useEffect } from "react";
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
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Admin from ".";
import axios from "axios";

const API = "http://127.0.0.1:8000/api";
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const current_page = "Usuarios";

  function GETRequest() {
   //  const [post, setPost] = React.useState(null);

      // React.useEffect(() => {
         const response = axios.get(`${API}/users`,{
            headers: { 'Content-Types': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer 4|K32hYx2YAfR0JkOHeECE1mOcwQ0K4xfPDHV7bfDW` },
         }).then((response) => {
         });
         
      // }, []);
  }
const Users = (props) => {
   // React.useEffect(() => {
      let r = GETRequest();
      console.log(r);
   // }, []);

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
              >
                <i className="fa-solid fa-circle-plus"></i>&nbsp; AGREGAR
                USUARIO
              </button>
            </div>
            <div className="card-body">
              {/* <!-- tabla --> */}
              <Table />
            </div>
          </div>
        </div>

        {/* <!-- Modal Usuario --> */}
        <Form />
      </div>
    </section>
  );
}

export default Users;
