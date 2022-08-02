import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import '../App.css';
import OrdenesEnFila from "./OrdenesEnFila";





function SideBarDark() {
     return (
      <section>
        
            <h5 className="text-light fw-lighter">En cola: 00 pedidos</h5>
            <div className="contenedor-dark">

            
            <OrdenesEnFila/>
            <OrdenesEnFila/>
            <OrdenesEnFila/>
</div>
                
    </section>
     
    );
  }
export default SideBarDark;