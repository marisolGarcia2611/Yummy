import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./componentes/Navbar";
import logo from './yummy-dark.svg';
import iCafe1 from "./images/mocha.png";
import Sidebar from "./componentes/Sidebar";
import OrdenPersonalizacion from "./componentes/OrdenBebidas";
import OrdenBebidas from "./componentes/OrdenBebidas";
import OrdenAlimentos from "./componentes/OrdenAliementos";
import OrdenEnEspera from "./componentes/OrdenEnEspera";






function Orden() {
     return (
       <section>
           <Navbar/>
          
            <div className="row">
              
              {/* SIDEBAR */}
              <div className="col-md-4 side-yellow">
              <Sidebar/>
              </div>
              <div className="col-md-4"></div>
              
              {/*DISEÑO DE CAFE*/}
              <div className="space__stuct col-md-8">

                {/* Aqui si es algun tipo de bebida se usa esta etiqueta */}
                <OrdenBebidas/>
                {/* <OrdenAlimentos/> */}
                {/* <OrdenEnEspera/> */}
              </div>

            </div>
          

       </section>
     
    );
  }
export default Orden;