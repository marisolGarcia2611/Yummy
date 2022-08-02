// function formatName(user) {
//    return user.firstName + ' ' + user.lastName;
//  }
 
//  const user = {
//    firstName: 'Harper',
//    lastName: 'Perez'
//  };
 
//  const element = (
//    <h1>
//      Hello, {formatName(user)}!
//    </h1>
//  );

import React, {Component} from "react";
// Se importa Link de react router dom, que es el que hara la funcion
// de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
// Importar en cada archivo que se necesite
import {Link} from "react-router-dom";
// import '../../App.css';
import logo from '../images/yummy.svg';
import perfil from '../images/usuario.png';
import HeaderPage from "./Components/HeaderPage";
import Table from "./Components/Table";
import Form from "./Components/forms";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Admin from ".";

const current_page = "Usuarios";

function Users(props) {
   return (
      <section>
         <Admin/>
         {/* <!-- Content Wrapper. Contenido de la pagina --> */}
         <div className="content-wrapper">
            {/* {props.block("Cargala compa")} */}
            {/* {props.toast("success","Aaaajasss")} */}
            {/* <!-- Content Header (Encabezado en el contenido de la pagina) --> */}
            <HeaderPage current_page={current_page}/>

            {/* <!-- Main content --> */}
            <div className="content">

               {/* <!-- card --> */}
               <div className="card card-outline card-dark shadow">
                  <div className="container-fluid mt-2">
                     <button id="btn_abrir_modal" className="float-end btn btn-success fw-bold" data-bs-toggle="modal" data-bs-target="#modal"><i className="fa-solid fa-circle-plus"></i>&nbsp; AGREGAR USUARIO</button>
                  </div>
                  <div className="card-body">
                     {/* <!-- tabla --> */}
                     <Table/>
                  </div>
               </div>

            </div>

            {/* <!-- Modal Usuario --> */}
            <Form/>

         </div>

      </section>
   )
}
export default Users;