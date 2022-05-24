import React,{Component} from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { Link } from "react-router-dom";
import './App.css';
import logo from './yummy-dark.svg';




function LogIn() {
     return (
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0 index">
          <h1 className="tittle my-5 display-5 fw-bold ls-tight">
            Yummy the best <br />
            <span className="tittle1">Interactive Menu</span>
          </h1>
          <p className="text2 mb-4 opacity-70 text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
            ab ipsum nisi dolorem modi. Quos?
          </p>
        </div>
  
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
  
          <div className="card bg-glass">
            <div className="card-body px-4 py-3 px-md-5">
              <div className="text-center">
              <img src={logo} className="imagen" alt="logo"/>
              <br/>
              <h1 className="text-dark">LogIn</h1>
              <br/>
            </div>
              <form>
               
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3"  placeholder="Email address" className="form-control" />
                </div>
  
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" placeholder="Password" className="form-control" />
                </div>
  
                <div className="form-check mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"/>
                  <label className="form-check-label text1" htmlFor="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>
                <div className="text-center"> 
                  <button type="submit" className="btn button btn-dark btn-block mb-4">
                    LogIn
                  </button>
                </div>
              </form>
               <div>
                 <h6 className="text-center text-muted">You don't have an account?
                  <Link to="/SingUp">SingUp</Link>
                  </h6>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    );
  }
export default LogIn;