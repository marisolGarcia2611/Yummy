import React,{Component} from "react";
import '../App.css';
import CardCarrito from "./CardCarrito";


function TarjetaNombre() {
     return (
      <section>
        <div className="btn tarject__btn">   
                          <p className="text-start fw-light">Personaliza tu vaso con tu nombre</p>
                          <div className="row">
                            <div className="col-md-10">
                            <input className="form-control inp" type="text"  placeholder="name" name="name"/>
                            </div>
                            <div className="col-md-2">
                            <button className="btn btn__struct">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="ic1 bi bi-dash-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ic1 bi bi-plus-circle" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg> */}
                            </button>
                            </div>                         
                          </div>                       
                          
                      </div>
    </section>
     
    );
  }
export default TarjetaNombre;