import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../images/yummy.svg';
import perfil from '../images/usuario.png';
import PerfilOffCanvas from "./PerfilOffCanvas";
import { NavLink, useNavigate } from "react-router-dom";



function Navbar() {
     return (
      <section>
       <nav className="navbar navbar-expand-lg navbar-light nav__backgraund">
        <div className="container-fluid position-relative">
            <NavLink to="/Main" className="navbar-brand active text-light">Menú</NavLink>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink to="/Orden" className="nav-link text-light" aria-current="page">Ordenar</NavLink>
                <NavLink to="/Carrito" className="nav-link text-light" aria-current="page">Carrito</NavLink>
                <NavLink to="/Ordenes" className="nav-link text-light" aria-current="page">Ordenes</NavLink>
                <div className="position-absolute top-0 start-50 translate-middle-x">
                <img src={logo} className="image__logo d-none d-md-block" alt="logo"/>
                </div>
            <div className="position-absolute end-0"><PerfilOffCanvas/></div>
            </div>
            </div>
        </div>
      </nav>
    </section>
     
    );
  }
export default Navbar;