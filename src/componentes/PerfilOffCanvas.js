import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import '../App.css';
import perfil from '../images/usuario.png';
import { Link } from "react-router-dom";



function PerfilOffCanvas() {
     return (
      <section>
        
        <button className="btn text-light " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <img src={perfil}></img>
        </button>

        <div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel" className="text-muted">Perfil</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body text-light">
            <div className="row">

            <div className="col-md-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                    </svg>
                </div>
            
                <div className="col-md-9">
                   <h1>
                    Usuario
                   </h1> 
                </div>

            </div>
            <hr/>
            <br/>

            <div className="row">
            
                <h5 className=" text-secondary card-tittle">Detalles</h5>
                
                    <p><h6>Rango:</h6>Admin</p>
                
    
            </div>
            
             <div className="row">
                
                    <button className="btn btn-secondary rounded__btn">
                        <Link to="/" className="nav-link" aria-current="page">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="23" height="23s" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                        </Link> 
                    </button>
       
             </div>
            

        </div>
        </div>

    </section>
     
    );
  }
export default PerfilOffCanvas;