import React,{Component} from "react";

import '../App.css';

function OrdenesEnFila() {
     return (
      <section>
      <div className="space__tarject">
                <table className="table table-dark table-striped">
                <thead>
                <th scope="col">Orden 1</th>
                </thead>
                <tbody>  
                    <tr>
                    <th scope="col">Producto</th>
                    <td>Mark</td>
                    </tr>
              
                    <tr>
                    <th scope="col">Tamaño</th>
                    <td>Otto</td>
                    </tr>

                    <tr>
                    <th scope="col">Leche</th>
                    <td>@mdo</td>
                    </tr>

                    <tr>
                    <th scope="col">Complementos</th>
                    <td>@mdo</td>
                    </tr>

                    <tr>
                    <th scope="col">Nombre del vaso</th>
                    <td>@mdo</td>
                    </tr>

                </tbody>
                </table>

    </div>

    </section>
     
    );
  }
export default OrdenesEnFila;