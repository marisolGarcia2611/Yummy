import React,{Component} from "react";
import '../App.css';
import DiseñoProducto from "./DiseñoProducto";




function OrdenAlimentos() {
     return (
      <section>
        <h3 className="letters__struct2">ALIMENTO</h3>
                <h1 className="letters__struct">Nombre de Aliemento</h1>
                  <br/>
        <div className="row">
            <div className="col-md-6">
                <DiseñoProducto/>
            </div>
           <div className="col-md-6"></div>
        </div>
        
         
    

    </section>
     
    );
  }
export default OrdenAlimentos;