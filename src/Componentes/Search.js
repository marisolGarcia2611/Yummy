import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import '../App.css';

function Search() {
     return (
      <section>
         <div className=" search">
                  <form action="#">
                    <div className="row pos__search">
                      
                      <div className="col-md-11">
                      <input className="form-control search__estruc" type="text"
                          placeholder=" Search Courses"
                          name="search"/>
                      </div>

                      <div className="col-md-2 pos">
                      <button className="btn search__btn">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="ic bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                      </button>
                      </div>

                    </div>
                  </form>
              </div>

    </section>
     
    );
  }
export default Search;