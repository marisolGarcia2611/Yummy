import React, {Component} from "react";
// Se importa Link de react router dom, que es el que hara la funcion
// de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
// Importar en cada archivo que se necesite
import {Link} from "react-router-dom";

function Table() {
   return (
      <section>
         {/* <!-- tabla --> */}
         <div className="table-responsive">
         <table id="tabla_usuarios" className="table table-hover text-center" /* style={{width:"100%"}} */>
            <thead className="thead-dark">
               <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Usuario</th>
                  <th>Teléfono</th>
                  <th>Acciónes</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Jorge Perez Mendez</td>
                  <td>jperez@gmail.com</td>
                  <td>jperez</td>
                  <td>(871) 344-55-66</td>
                  <td>
                     <div className="btn-group">
                        <button type="button" className="btn btn-primary"><i className="far fa-edit"></i></button>
                        <button type="button" className="btn btn-danger"><i className="far fa-trash"></i></button>
                     </div>
                  </td>
               </tr>
            </tbody>
            <tfoot>
               <tr className="thead-dark">
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Usuario</th>
                  <th>Teléfono</th>
                  <th>Acciónes</th>
               </tr>
            </tfoot>
         </table>
         </div>
      </section>
   )
}
export default Table;