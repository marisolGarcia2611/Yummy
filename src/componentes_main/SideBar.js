import React,{Component} from "react";

function SideBar(){

    

    return(
        <div id="space2" className="col-md-2 d-none d-md-block space2">
                        
        <h5>Categorias</h5> 

        <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
               <h6>Bebidas</h6> 
            </button>
            </h2>
            {/* <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                <a className="nav-link link-secondary" href="#BebidasCalientes">Bebidas calientes</a>
                <a className="nav-link link-secondary" href="#BebidasFrias">Bebidas Frias</a>
                <a className="nav-link link-secondary" href="#BebidasBaseTe">Bebidas Base Té </a> 
                </div>
            </div> */}
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <h6>Aliementos</h6> 
            </button>
            </h2>
            {/* <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                     <a className="nav-link link-secondary" href="#Salado">Salado</a>
                     <a className="nav-link link-secondary" href="#SaladoRecienHorneado">Salado Recién Horneado</a>
                     <a className="nav-link link-secondary" href="#Saludable">Saludable</a>
                 </div>
            </div> */}
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                 <h6>Postres</h6> 
            </button>
            </h2>
            {/* <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
                  <p>Bebidas calientes</p>
                  <p>Bebidas frias</p>
                  <p>Bebidas base té</p>
            </div>
            </div> */}
        </div>
        </div>
    
        <div>
         <button type="button" data-bs-toggle="modal" data-bs-target="#addModal" className=" card btn btn-warning text-center">
             <b>+ Añadir producto</b>
             </button>
        </div> 
    </div>

    );
}

export default SideBar;