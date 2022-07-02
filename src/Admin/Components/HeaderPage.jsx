import React, {Component} from "react";
// Se importa Link de react router dom, que es el que hara la funcion
// de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
// Importar en cada archivo que se necesite
import {Link} from "react-router-dom";

function HeaderPage(props) {
   return (
      <section>
         {/* <!-- Content Header (Encabezado en el contenido de la pagina) --> */}
         <div className="content-header">
            <div className="container-fluid">
               <div className="row mb-2">
                  <div className="col-sm-6">
                     <h1>
                        <i className="fa-solid fa-user-tie"></i>&nbsp; {props.current_page}
                        {/* <!-- <em className="fw-ligth text-muted lead text-sm">| </em> --> */}
                     </h1>
                  </div>
                  <div className="col-sm-6">
                     <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="<?php echo $ADMIN_PATH ?>"><i className="fa-solid fa-house"></i>&nbsp; Admin</a></li>
                        <li className="breadcrumb-item">Administración</li>
                        <li className="breadcrumb-item active">{props.current_page}</li>
                     </ol>
                  </div>
               </div>
            </div>
            {/* <!-- /.container-fluid --> */}
         </div>
      </section>
   )
}
export default HeaderPage;