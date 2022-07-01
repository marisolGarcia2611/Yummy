import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import './App.css';
import Navbar from "./Navbar";
import logo from './yummy-dark.svg';
import iCafe1 from "./images/mocha.png";




function Tarject() {
     return (
      <section>
        <div className="card card1 efect__tarject b-opac tarject__estruct">
                      <div className="card-body">
                        <h3 className="card-tittle">Mocha</h3>
                        <p className="card-body text-end">$00.00</p>
                        <div className="Position-relative">
                          <div>
                             <img className="position-absolute top-100 start-0 translate-middle img__tarject" src={iCafe1}/>
                          </div>
                        </div>
                      </div>
        </div>

    </section>
     
    );
  }
export default Tarject;