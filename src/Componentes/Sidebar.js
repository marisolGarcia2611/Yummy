import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import '../App.css';
import Navbar from "./Navbar";
import logo from '../yummy-dark.svg';
import iCafe1 from "../images/mocha.png";
import Tarject from "./Tarject";
import Search from "./Search";




function Sidebar() {
     return (
      <section>
        
            <div>
                <Search/>
                  <div className="contenedor-light">
                    <Tarject/>
                    <Tarject/>
                  </div>
            </div>
                
    </section>
     
    );
  }
export default Sidebar;