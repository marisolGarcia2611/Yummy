import React,{Component} from "react";
import '../App.css';
import EspecificacionComplemento from "./EspecificacionComplementos";
import EspecificacionLeche from "./EspecificacionLeche";
import EspecificacionNombre from "./EspecificacionNombre";
import EspecificacionTamaño from "./EspecificacionTamaño";





function OrdenEspecificaciones() {
     return (
      <section>
           {/* TAMAÑO */}         
                  <div>
                    <EspecificacionTamaño/>
                  </div>

           {/* TIPO DE LECHE*/}
                  <div>
                    <EspecificacionLeche/>
                  </div>

                  {/* COMPLEMENTOS */}
                  <div>
                    <EspecificacionComplemento/>
                  </div>

                  {/* NOMBRE DEL VASO */}
                  <div>
                    <EspecificacionNombre/>
                   
                  </div>
                
    </section>
     
    );
  }
export default OrdenEspecificaciones;