import React,{Component} from "react";
import './App.css';
import logo from './images/yummy-dark.svg';




function SingUp() {
     return (

<section className="text-center">
  <div className="p-5 bg-image back"></div>

  <div className="card mx-4 mx-md-5 shadow-5-strong a">
    <div className="card-body py-4 px-md-4">

      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
        <img src={logo} className="imagen" alt="logo"/>
              <br/>
          <h1 className="fw-bold mb-5">Sign Up</h1>
          <form>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="form3Example1"  placeholder="First name" className="form-control" />
                  
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input type="text" id="form3Example2"  placeholder="Last name" className="form-control" />
                </div>
              </div>
            </div>

           
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3"  placeholder="Email address" className="form-control" />
            </div>

          
            <div className="form-outline mb-4">
              <input type="password" id="form3Example4"  placeholder="Password" className="form-control" />
            </div>

        
            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"/>
              <label className="form-check-label" htmlFor="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>

            <button type="submit" className="btn button btn-dark btn-block mb-4">
              Sign up
            </button>

         
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

     
    );
  }
export default SingUp;