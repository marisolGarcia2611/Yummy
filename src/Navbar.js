import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';
import logo from './images/yummy.svg';
import perfil from './images/usuario.png';
import Cookies from "universal-cookie";
import { useAuth } from "./context/authContext";
const cookies = new Cookies()



function Navbar() {
  const { changeState } = useAuth()
  const navigate = useNavigate()

  const cerrarSesion = () => {
    cookies.remove('Authorization', { path: '/'   });
    cookies.remove('name', { path: '/' })
    cookies.remove('last_name', { path: '/' })
    cookies.remove('email', { path: '/' })
    cookies.remove('role_id', { path: '/' })
    changeState(false)
    navigate('/')
  }
     return (
      <section>
       <nav className="navbar navbar-expand-lg navbar-light nav__backgraund">
        <div className="container-fluid position-relative">
          <NavLink to="/Main" className="navbar-brand active text-light">Menú</NavLink>
            {/* <Link to="/Main" className="navbar-brand active text-light">Menú</Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink to="/Orden" className="nav-link text-light" aria-current="page">Ordenar</NavLink>
                {/* <Link to="/Orden" className="nav-link text-light" aria-current="page">Ordenar</Link> */}
            <div className="position-absolute top-0 start-50 translate-middle-x">
            <img src={logo} className="image__logo d-none d-md-block" alt="logo"/>
            </div>
                <Link onClick={cerrarSesion} to="/" className=" nav-link text-light position-absolute end-0" aria-current="page">
                <img src={perfil} className="img__Perfil " alt="perfil"/>
                </Link>
            </div>
            </div>
        </div>
      </nav>
    </section>
     
    );
  }
export default Navbar;