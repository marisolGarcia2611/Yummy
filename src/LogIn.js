import React, { useEffect, useState } from "react";
//Se importa Link de react router dom, que es el que hara la funcion
//de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
//Importar en cada archivo que se necesite
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./images/yummy-dark.svg";
import BlockUI from "./componentes/BlockUI/BlockUI";
import { useAuth } from "./context/authContext";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import { AlertClass } from "./AlertClass";

const cookies = new Cookies();
const Alert = new AlertClass()
function LogIn() {
  const { credenciales, inputChange, changeState, login, setCookies } =
    useAuth();
  // console.log("hola ", credenciales, loged)
  const [block, setBlock] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.get("Authorization")) navigate("/Main");
  }, []);

  const ValidateInput = async (input) => {
    console.log(input);
    let message_box = document.querySelector(`#message_validate_${input.name}`)
    console.log(message_box);
    if (input.value == "") {
      console.log("click submit");
      input.classList.add("is-invalid")
      message_box.classList.add("invalid-feedback")
      message_box.value = "Este campo es requerido";
      return false
    }
    input.classList.add("is-valid")
    message_box.classList.add("valid-feedback")
    message_box.value = "";
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let input_username = document.getElementsByName("username")[0]
      let input_password = document.getElementsByName("password")[0]
      if (!ValidateInput(input_username)) return
      if (!ValidateInput(input_password)) return

      setBlock(true);
      const { data } = await login(credenciales);
      const { token } = data;
      const { name, last_name, email, role_id } = data.data;
      setCookies(token, name, last_name, email, role_id);
      changeState(true);
      credenciales.username = "";
      credenciales.password = "";
      Swal.fire({
        icon: `success`,
        title: `Bienvenido ${name}`,
        // html: ajaxResponse.Texto_alerta,
        showConfirmButton: false,
        confirmButtonColor: "#494E53",
        timer: 1500,
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
      }).then(() => {
        navigate("/Main");
      });
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: error.message,
        icon: "error",
      });
    } finally {
      setBlock(false);
    }
  };
  return (
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <BlockUI blocking={block} />
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0 index">
          <h1 className="tittle my-5 display-5 fw-bold ls-tight">
            Yummy the best <br />
            <span className="tittle1">Interactive Menu</span>
          </h1>
          <p className="text2 mb-4 opacity-70 text">
            Yummy App es un menu interactivo que tiene el propósito de facilitar
            las operaciones de los restaurantes en la manera en la que los clientes hacen pedidos.
            A raíz de una problemática mundial que nos impide mantener contacto fisico por seguridad,
            Yummy App nos mantiene mas unidos que nunca.
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <div className="card bg-glass">
            <div className="card-body px-4 py-3 px-md-5">
              <div className="text-center">
                <img src={logo} className="imagen" alt="logo" />
                <br />
                <h1 className="text-dark">LogIn</h1>
                <br />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    placeholder="Email address"
                    className="form-control"
                    name={"username"}
                    data-input-name="usuario"
                    onChange={inputChange}
                    value={credenciales.username}
                  />
                  <div id="message_validate_username" className="">
                    El campo es requerido
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    placeholder="Password"
                    className="form-control"
                    name={"password"}
                    data-input-name="contraseña"
                    onChange={inputChange}
                    value={credenciales.password}
                  />
                  <div id="message_validate_password" className="">
                    El campo es requerido
                  </div>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example33"
                  />
                  <label
                    className="form-check-label text1"
                    htmlFor="form2Example33"
                  >
                    Subscribe to our newsletter
                  </label>
                </div>
                <div className="text-center">
                  <input
                    type={"submit"}
                    className="btn button btn-dark btn-block mb-2"
                  />
                </div>
              </form>
              {/* <div>
                <h6 className="text-center text-muted">
                  You don't have an account?
                  <NavLink to="/SingUp">SingUp</NavLink>
                </h6>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
