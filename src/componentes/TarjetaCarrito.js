import React,{Component} from "react";
import '../App.css';
import CardCarrito from "./CardCarrito";


function TarjetaCarrito() {
     return (
      <section>
        <div className="dimension__cub card">
          <div className="card-header text-center">
          <h6 className="letters___green ">O R D E N &nbsp; &nbsp; C O N F O R M A D A </h6> 
          </div>
          <div className="card-body space__content contenedor-light">
            <CardCarrito/>
            <CardCarrito/>

          </div>
          <div className="card-footer text-center text-muted">
          <button className="btn btn-outline-danger rounded__btn">Cancelar</button>&nbsp;
            <button className="btn btn-dark rounded__btn">Completar compra</button>
          </div>

        </div>
    </section>
     
    );
  }
export default TarjetaCarrito;