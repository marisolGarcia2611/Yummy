import React, { Component } from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import './App.css';
import Navbar from "./Componentes/Navbar";
import SocialBar from "./Componentes/SocialBar";
import SideBarDark from "./Componentes/SideBarDark";
import OrdenesPorMesa from "./Componentes/OrdenesPorMesa";






function Ordenes() {
   return (
      <section>
         <Navbar />

         <div className="row">
            {/* SIDEBAR */}
            <div className="col-md-3 side__dark">
               <SideBarDark />
            </div>
            <div className="col-md-8 space__stuct">
               <h1>Ordenes por mesa</h1>
               <br />
               <OrdenesPorMesa />
            </div>
         </div>



         <SocialBar />

      </section>

   );
}
export default Ordenes;