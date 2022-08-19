import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link, renderMatches } from "react-router-dom";
// import './App.css';
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Users from "./Users";
import { mostrarBlockOutCargando, mostrarToast } from "../funciones_globales"
import Inventory from "./Inventory";
import Recipes from "./Recipes";

function Admin(props) {
   return (
      <section>
         <NavBar/>
         <SideBar/>
         {props.component}
         {/* <Users toast={mostrarToast} block={mostrarBlockOutCargando}/> */}
      </section>
   )
}
export default Admin;