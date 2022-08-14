import React,{Component} from "react";
import '../App.css';
import TarjetaNombre from "./TarjetaNombre";




function EspecificacionNombre() {
     return (
      <section>
        <div>
            <br/>
            <h4 className="fw-light letters__struct3">NOMBRE EN VASO</h4>
            <hr className="letters__struct3"/>
        </div>
        

        <div className="row">
            <div className="col-md-12">   
                <TarjetaNombre/>                 
            </div>
        </div>
    

    </section>
     
    );
  }
export default EspecificacionNombre;