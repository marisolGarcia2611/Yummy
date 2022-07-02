import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
// import './App.css';
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Users from "./Users";

function Admin() {
   return (
      <section>
         <NavBar/>
         <SideBar/>
         <Users/>
      </section>
   )
}
export default Admin;