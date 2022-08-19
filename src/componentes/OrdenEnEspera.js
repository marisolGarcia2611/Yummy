import React,{Component} from "react";
import '../App.css';
import DiseñoProducto from "./DiseñoProducto";
import iCafe2 from "../images/cajeta-frappuccino.png";
import espera from "../images/Espera.svg";





function OrdenEnEspera() {
     return (
      <section>

        <div className="space__stuct1">
           <div className="row">
                <div className="col-md-2">
                    <h3 className="letters__struct2">Y U M M Y</h3>
                    <h1 className="letters__struct">Elije tus alimentos</h1>
                    <br/>
                </div>
                <div className="col-md-10">
                    <img className="img__form" src={espera}/>
                </div>

           </div>               
        </div>

    </section>
     
    );
  }
export default OrdenEnEspera;