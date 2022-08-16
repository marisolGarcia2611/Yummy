import React from "react";

function TableRecipes() {
   return (
      <section>
         {/* <!-- tabla --> */}
         <div className="table-responsive">
         <table id="tabla_recetas" className="table table-hover text-center" /* style={{width:"100%"}} */>
            <thead className="thead-dark">
               <tr>
                  <th>Nombre</th>
                  <th>Cantidad a usar</th>
                  <th>Medida</th>
                  <th>Materia prima</th>
                  <th>Acciones</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Café de olla</td>
                  <td>56</td>
                  <td>gramos</td>
                  <td>Néscafe</td>
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
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Medida</th>
                   <th>Precio</th>
                  <th>Acciones</th>
               </tr>
            </tfoot>
         </table>
         </div>
      </section>
   )
}
export default TableRecipes;