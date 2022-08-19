import React,{Component} from "react";
import '../App.css';




function EspecificacionLeche() {
     return (
    <section>
        <div>
            <br/>
            <h4 className="fw-light letters__struct3">LECHE</h4>
            <hr className="letters__struct3"/>
        </div>

        <div className="row text-center" role="group" aria-label="Basic radio toggle button group">
            
        
            <div className="col-md-2 t__space">
            <input type="radio" className="btn-check" name="btnradioLeche" id="entera" autocomplete="off"/>
            <label class="btn btn-outline-secondary t__btn" for="entera">
                <p className="fw-light lt"><b className="fw-bold">ENTERA</b><br/>$00.00</p>
            </label>
            </div>


            <div className="col-md-2 t__space2">
            <input  type="radio" className="btn-check" name="btnradioLeche" id="deslactosada" autocomplete="off"/>
            <label class="btn btn-outline-secondary t__btn" for="deslactosada">
                <p className="fw-light lt"><b className="fw-bold">DESLACTOSADA</b><br/>$00.00</p>
            </label>
            </div>

            <div className="col-md-2 t__space3">
            <input type="radio" className="btn-check" name="btnradioLeche" id="light" autocomplete="off"/>
            <label class="btn btn-outline-secondary t__btn" for="light">
                <p className="fw-light lt"><b className="fw-bold">LIGHT</b><br/>$00.00</p>
            </label>
            </div>

        </div>
    

    </section>
     
    );
  }
export default EspecificacionLeche;