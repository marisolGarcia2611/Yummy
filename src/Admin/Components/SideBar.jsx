import React, { Component } from "react";
// Se importa Link de react router dom, que es el que hara la funcion
// de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
// Importar en cada archivo que se necesite
import { Link, NavLink } from "react-router-dom";
// import '../../App.css';
import logo from "../../images/yummy.svg";
import perfil from "../../images/usuario.png";

function SideBar() {
  return (
    <section>
      {/* <!-- Main Sidebar Container --> */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* <!-- Brand Logo --> */}
        <NavLink to="/" className="brand-link text-md">
          <a href="#" className="text-light" title="Regresar al menú">
            <img src={logo} className="brand-image" alt="logo" />
            <span className="ml-3 fw-bold">YUMMY</span>
            <span className="brand-text fw-light">app</span>
          </a>
        </NavLink>

        {/* <!-- Sidebar --> */}
        <div className="sidebar">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <!-- CATÁLOGOS --> */}
              <li className="nav-item menu-is-opening menu-open">
                <a href="#" className="nav-link">
                  <i className="nav-icon fa-solid fa-folder-tree"></i>
                  <p>
                    Administración
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview text-sm">
                  <NavLink to="/Admin/Users" className="nav-link">
                    <li className="nav-item">
                      <i className="far fa-circle nav-icon text-sm"></i>
                      <p>Usuarios</p>
                    </li>
                  </NavLink>
                  <NavLink to="/Admin/Pruebas" className="nav-link">
                    <li className="nav-item">
                      <i className="far fa-circle nav-icon text-sm"></i>
                      <p>Pruebas</p>
                    </li>
                  </NavLink>
                </ul>
              </li>
            </ul>
          </nav>
          {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
      </aside>
    </section>
  );
}
export default SideBar;
