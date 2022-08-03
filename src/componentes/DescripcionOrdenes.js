import React,{Component} from "react";

import '../App.css';

function DescripcionOrdenes() {
     return (
      <section>
      
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Tamaño</th>
                    <th scope="col">Leche</th>
                    <th scope="col">Complementos</th>
                    <th scope="col">Nombre del vaso</th>
                    <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /></td>
                    </tr>          
                </tbody>
                </table>



    </section>
     
    );
  }
export default DescripcionOrdenes;