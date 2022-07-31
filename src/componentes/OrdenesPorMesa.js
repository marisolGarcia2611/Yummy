import React,{Component} from "react";

import '../App.css';
import DescripcionOrdenes from "./DescripcionOrdenes";

function OrdenesPorMesa() {
     return (
      <section>
        <p>
        <a className="btn btn-outline-dark tarject__mesa" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <button className="btn btn-success Social__border__radius"></button>&nbsp;
        <button className="btn btn-danger Social__border__radius"></button>&nbsp;
         Mesa 1 
        </a> 
        &nbsp;
        <a className="btn btn-outline-dark tarject__mesa" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <button className="btn btn-success Social__border__radius"></button>&nbsp;
        <button className="btn btn-danger Social__border__radius"></button>&nbsp;
         Mesa 2 
        </a> 
        &nbsp;
        <a className="btn btn-outline-dark tarject__mesa" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <button className="btn btn-success Social__border__radius"></button>&nbsp;
        <button className="btn btn-danger Social__border__radius"></button>&nbsp;
         Mesa 3 
        </a> 
        &nbsp;
        <a className="btn btn-outline-dark tarject__mesa" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        <button className="btn btn-success Social__border__radius"></button>&nbsp;
        <button className="btn btn-danger Social__border__radius"></button>&nbsp;
         Mesa 4 
        </a> 
        </p>

        
        <div className="collapse" id="collapseExample">
        <div className="card card__mesa card-body">
          <div className="contenedor">
             <DescripcionOrdenes/>
          </div>
              
        </div>
        </div>
        

    </section>
     
    );
  }
export default OrdenesPorMesa;