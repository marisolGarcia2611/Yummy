import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import logo from './yummy-dark.svg';
import iCafe1 from "./images/mocha.png";
import Tarject from "./Tarject";
import Search from "./Search";




function Orden() {
     return (
       <section>
           <Navbar/>
           <div className="">
            <div className="row">
              <div className="col-md-4 b-yellow">

                <Search/>

                <div>
                  <Tarject/>
                  <Tarject/>
                </div>
              </div>
              <div className="space__stuct col-md-8">
                <h3 className="letters__struct2">Estilo del cafe</h3>
                <h1 className="letters__struct">Nombre del cafe</h1>
              </div>

            </div>
          </div>

       </section>
     
    );
  }
export default Orden;