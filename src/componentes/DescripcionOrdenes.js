import React,{Component} from "react";

import '../App.css';

function DescripcionOrdenes() {
     return (
      <section>
      
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Tamaño</th>
                    <th scope="col">Leche</th>
                    <th scope="col">Complementos</th>
                    <th scope="col">Nombre del vaso</th>
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
                    </tr>
                   
                  
                   
                </tbody>
                </table>



    </section>
     
    );
  }
export default DescripcionOrdenes;