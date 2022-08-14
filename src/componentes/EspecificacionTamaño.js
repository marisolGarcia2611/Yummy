import React,{Component} from "react";
import '../App.css';




function EspecificacionTamaño() {
     return (
      <section>
            <div>
                <h4 className="fw-light letters__struct3">TAMAÑO</h4>
                <hr className="letters__struct3"/>
            </div>

            <div className="row text-center" role="group" aria-label="Basic radio toggle button group">
                
            
                <div className="col-md-2 t__space">
                <input type="radio" className="btn-check" name="btnradioTamaño" id="chico" autocomplete="off"/>
                <label class="btn btn-outline-secondary t__btn" for="chico">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ic2 bi bi-cup" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
                    </svg>
                    <p className="fw-light lt"><b className="fw-bold">CH</b><br/>$00.00</p>
                </label>
                </div>


                <div className="col-md-2 t__space">
                <input  type="radio" className="btn-check" name="btnradioTamaño" id="mediano" autocomplete="off"/>
                <label class="btn btn-outline-secondary t__btn" for="mediano">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ic2 bi bi-cup" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
                    </svg>
                    <p className="fw-light lt"><b className="fw-bold">MD</b><br/>$00.00</p>
                </label>
                </div>

                <div className="col-md-2 t__space">
                <input type="radio" className="btn-check" name="btnradioTamaño" id="grande" autocomplete="off"/>
                <label class="btn btn-outline-secondary t__btn" for="grande">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ic2 bi bi-cup" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
                    </svg>
                    <p className="fw-light lt"><b className="fw-bold">GR</b><br/>$00.00</p>
                </label>
                </div>

            </div>
    

    </section>
     
    );
  }
export default EspecificacionTamaño;