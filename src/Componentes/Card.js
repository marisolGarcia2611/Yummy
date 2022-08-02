import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import '../App.css';
import iCafe1 from "../images/mocha.png";
import edit__ico from '../images/icons8-edit (1).svg';




function Card() {
     return (
      <section>
       <div className="card card_Backgraund">                                          
        <div className="card-body text-center">                                 
        <img src={iCafe1} className="img__Cafe"></img>                                         
        <h5 className="card-title">Mocha</h5>
        <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
        <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
            <div className="position-relative">
                    <div className=" position-absolute end-0">
                        <button className=" btn btn-danger btn__rounded">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="img__ico bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>    
                        </button>
                        <button className=" btn btn-dark btn__rounded"><img className="img__ico" src={edit__ico}></img></button>
                    </div>                                          
            </div> 

        </div>
     </div>  

    </section>
     
    );
  }
export default Card;