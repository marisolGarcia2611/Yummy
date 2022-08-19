import React,{Component} from "react";
import '../App.css';




function EspecificacionComplemento() {
     return (
        <section>
            <div>
                <br/>
                <h4 className="fw-light letters__struct3">COMPLEMENTOS</h4>
                <hr className="letters__struct3"/>
            </div>
            

            <div className="row text-center" role="group" aria-label="Basic radio toggle button group">

                <div className="col-md-3 t__space">
                    <input type="checkbox" className="btn-check" name="btnradioComplemento" id="chocolate" autocomplete="off"/>
                    <label class="btn btn-outline-secondary t__btn" for="chocolate">
                        <p className="fw-light lt"><b className="fw-bold">CHOCOLATE</b><br/>$00.00</p>
                    </label>
                </div>

                <div className="col-md-3 t__space">
                    <input type="checkbox" className="btn-check" name="btnradioComplemento" id="malvadisco" autocomplete="off"/>
                    <label class="btn btn-outline-secondary t__btn" for="malvadisco">
                        <p className="fw-light lt"><b className="fw-bold">MALVADISCO</b><br/>$00.00</p>
                    </label>
                </div>

                <div className="col-md-3 t__space">
                    <input type="checkbox" className="btn-check" name="btnradioComplemento" id="fresa" autocomplete="off"/>
                    <label class="btn btn-outline-secondary t__btn" for="fresa">
                        <p className="fw-light lt"><b className="fw-bold">FRESA</b><br/>$00.00</p>
                    </label>
                </div>

                <div className="col-md-3 t__space">
                    <input type="checkbox" className="btn-check" name="btnradioComplemento" id="granola" autocomplete="off"/>
                    <label class="btn btn-outline-secondary t__btn" for="granola">
                        <p className="fw-light lt"><b className="fw-bold">GRANOLA</b><br/>$00.00</p>
                    </label>
                </div>

            </div>

        

        </section>
     
    );
  }
export default EspecificacionComplemento;