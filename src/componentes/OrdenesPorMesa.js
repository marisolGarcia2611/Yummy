import React,{Component} from "react";

import '../App.css';
import DescripcionOrdenes from "./DescripcionOrdenes";

function OrdenesPorMesa() {
     return (
      <section>
        
        <p>
           {/* division de mesa 1 */}
        <a className="btn btn-outline-dark tarject__mesa" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <button className="btn btn-success Social__border__radius"></button>&nbsp;
        <button className="btn btn-danger Social__border__radius"></button>&nbsp;
         Mesa 1 
        </a> 
         {/* division de mesa 2 solo lo puse para darme una idea pero se va a borrar */}
        &nbsp;&nbsp;
        <a className="btn btn-outline-dark tarject__mesa" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <button className="btn btn-success Social__border__radius"></button>&nbsp;
        <button className="btn btn-danger Social__border__radius"></button>&nbsp;
         Mesa 2 
        </a>
        </p>

        
        <div className="collapse" id="collapseExample">
        <div className="card card__mesa">
         <div className="card-body">
          <div className="contenedor">
             <DescripcionOrdenes/>
          </div>
          <div className="text-center">
            <button className="btn btn-dark rounded__btn">Orden Finalizada</button>
          </div>
         </div>  
        </div>
        </div>
        

    </section>
     
    );
  }
export default OrdenesPorMesa;