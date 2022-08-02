import React,{Component} from "react";
import '../App.css';

function CardCarrito() {
     return (
      <section>
        <div className="card margin__card">
        <div className="card-header bg__green">
          <h6 className="text-light">Nombre de la bebida</h6>
        </div>
        <div className="card-body row">
            <div className="col-md-10">
                <div className="row">
                <div className="col">
                <h5 className="card-title">3</h5>
                </div>
                <div className="col-md-8">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="col-md-3">
                    <h3 className="text-muted">$00.00</h3>
                </div>
                </div>
            </div>
            <div className="col-md-2">
                <button className=" btn btn-danger btn__rounded1">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="img__ico bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>    
                </button> 
            </div>          
        </div>
        </div>
</section>
     
     );
   }
 export default CardCarrito;