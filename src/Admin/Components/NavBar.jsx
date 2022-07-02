import React, {Component} from "react";
// Se importa Link de react router dom, que es el que hara la funcion
// de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
// Importar en cada archivo que se necesite
import {Link} from "react-router-dom";
// import '../../App.css';
import logo from '../../images/yummy.svg';
import perfil from '../../images/usuario.png';

function NavBar() {
   return (
      <section>
         {/* <!-- Navbar --> */}
         <nav className="main-header navbar navbar-expand">
            {/* <!-- Left navbar links --> */}
            <ul className="navbar-nav">
               <li className="nav-item">
                  <a className="nav-link text-dark" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
               </li>
            </ul>

            {/* <!-- Right navbar links --> */}
            <ul className="navbar-nav ml-auto">
               {/* <!-- Perfil --> */}
               <li className='nav-item'>
                  <div className='user-panel d-flex'>
                     <div className='info'>
                        <span className='d-block text-decoration-none text-bold'><i className=''>Nombre de usuario</i></span>
                     </div>
                  </div>
               </li>
               {/* <!-- Btn Logout --> */}
               <li className='nav-item ml-3'>
                  <a href='#' id="btn_cerrar_sesion" className='btn btn-outline-danger btn_cerrar_sesion' title='Logout'><i className="fas fa-door-closed"></i></a>
               </li>
            </ul>
         </nav>
         {/* <!-- /.navbar --> */}
      </section>
   );
}
export default NavBar;
