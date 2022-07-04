import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import './App.css';
import Navbar from "./Navbar";
import logo from './yummy-dark.svg';
import iCafe1 from "./images/mocha.png";
import iCafe2 from "./images/cajeta-frappuccino.png";




function DiseñoCafe() {
     return (
      <section>
        <div className="space__stuct1">
            <div className="card tarject__card">
                <div className="card-body">
                <h4 className="card-tittle text-end ">$00.00</h4>
                <div>
                    <img src={iCafe2}/>
                </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-4 input-group inp">
                <button className="btn btn-dark" type="button" id="Recipient's username with two button addons">+</button>
                <input type="text" className="form-control inp" placeholder="Cantidad" aria-label="Recipient's username" aria-describedby="Recipient's username with two button addons"/>
                <button className="btn btn-outline-dark"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ic bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                </button>
                </div>        
            </div>
        </div>

    </section>
     
    );
  }
export default DiseñoCafe;