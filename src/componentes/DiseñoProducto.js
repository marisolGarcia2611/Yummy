import React,{Component} from "react";
import '../App.css';
import iCafe2 from "../images/cajeta-frappuccino.png";




function DiseñoProducto() {
     return (
      <section>
        <div className="space__stuct1">
            <div className="card tarject__card">
                <div className="card-body">
                <h4 className="card-tittle text-end ">$00.00</h4>
                <div>
                    <img src={iCafe2}/>
                </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-4 input-group inp">
                <button className="btn btn-dark"  id="add_address" onclick="addAddressLine()">+</button>
                <input type="number" className="form-control inp" placeholder="Cantidad" aria-label="Recipient's username" aria-describedby="add_address"/>
                
               
                </div>        
            </div>
            <br/>
            <div className="row">
               <div className="col-md-10">
                <button className="btn btn-outline-dark btn__size"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ic bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                </button>
                </div>
            </div>

        </div>
        {/* <button id="agregar">add</button>
        <div id="dinamic"></div> */}

    </section>
     
    );
  }
export default DiseñoProducto;
// const contenedor = document.querySelector('#dinamic');
// const btnAgregar = document.querySelector('#agregar');
// let total = 1;
// btnAgregar.addEventListener('click',e =>{
//     let div = document.createElement('div');
//     div.innerHTML = '<label>${total++}</label> - <input type="text" name="nombre[]" placeholder="Nombre required"/><button onClick="eliminar(this)">Eliminar</button>';
//     contenedor.appendChild(div);
// })

// const eliminar=(e)=>{
//     const divPadre = e.parentNode;
//     contenedor.removeChild(divPadre);
   
// }


// $('#btnAdd').on('click', function(){
//     $('#contenido').append('<p>Hola Mundo!</p>');
//   });

//     var lineCount = 0;
// addAddressLine = function () {
//     var i = document.createElement('input');
//     i.setAttribute("type", "text");
//     i.setAttribute("placeholder", "Address Line " + ++lineCount);
//     var addressContainer = document.getElementById("adress");
//     addressContainer.appendChild(i);
// }


