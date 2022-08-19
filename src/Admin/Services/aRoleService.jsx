import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { RoleClass } from "../Models/RolesssClass";
const Role = new RoleClass();
const cookies = new Cookies();
const API = "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
  baseURL: API,
  timeout: 3500,
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${cookies.get("Authorization")}`,
  },
});

export class RoleService {
  GetList() {
    return axiosInstance
    .get(`/roles`, {})
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response;
      throw new Error(message[0]);
    });
  }

  GetObject(id) {
    return axiosInstance
    .get(`/roles/${id}`, {})
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data.errors;
      throw new Error(message[0]);
    });
  }

  CreateObject(Role) {
    return axiosInstance
    .post(`/roles`, {
      data: object,
    })
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data.errors;
      throw new Error(message[0]);
    });
  }

  UpdateObject(Role) {
    return axiosInstance
    .put(`/roles`, {
      data: object,
    })
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data.errors;
      throw new Error(message[0]);
    });
  }

  DeleteObject(id) {
    return axiosInstance
    .delete(`/roles/${id}`, {})
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data.errors;
      throw new Error(message[0]);
    });
  }
}

export class FormClass extends Component {
  render() {
    return (
      <section>
        <div
          className="modal fade"
          id="modal"
          tabIndex="-1"
          aria-labelledby="modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="modalLabel">
                  <i className="fa-solid fa-role-plus"></i>&nbsp; REGISTRAR
                  USUARIO
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div id="formulario" encType="multipart/form-data">
                  <input
                    type="hidden"
                    id="accion"
                    name="accion"
                    value="iniciar_sesion"
                  />
                  <input type="hidden" id="id" name="id" value="" />
                  <div className="mb-3">
                    <label htmlFor="input_usuario" className="form-label">
                      Nombres: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input_usuario"
                      name="input_usuario"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="input_last_name" className="form-label">
                      Apellidos: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input_last_name"
                      name="input_last_name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="input_correo" className="form-label">
                      Correo: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="input_correo"
                      name="input_correo"
                    />
                  </div>
                  <div className="mb-3 row" id="div_contrasenia">
                    <div className="col">
                      <label htmlFor="input_contrasenia" className="form-label">
                        Contraseña: <span className="span_campo_obligatorio" />
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="input_contrasenia"
                        name="input_contrasenia"
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="input_confirmar_contrasenia"
                        className="form-label"
                      >
                        Confirmar Contraseña:{" "}
                        <span className="span_campo_obligatorio" />
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="input_confirmar_contrasenia"
                        name="input_confirmar_contrasenia"
                      />
                      <span
                        className="fst-italic"
                        id="respuesta_contrasena"
                      ></span>
                    </div>
                  </div>
                  <div className="mb-3" hidden id="div_nueva_contrasenia">
                    <label
                      htmlFor="input_nueva_contrasenia"
                      className="form-label"
                    >
                      Nueva Contraseña:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input_nueva_contrasenia"
                      name="input_nueva_contrasenia"
                    />
                    <span className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="switch_nueva_contrasena"
                      />
                      <label
                        className="custom-control-label text-sm"
                        htmlFor="switch_nueva_contrasena"
                      >
                        Enable password change
                      </label>
                    </span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="input_id_perfil" className="form-label">
                      Tipo de Usuario:{" "}
                      <span className="span_campo_obligatorio" />
                    </label>
                    <select
                      className="select2 form-control"
                      style={{ width: "100%" }}
                      aria-label="Default select example"
                      id="input_id_perfil"
                      name="input_id_perfil"
                    >
                      <option defaultValue value="-1">
                        Selecciona una opción...
                      </option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    id="btn_enviar_formulario"
                    className="btn btn-success fw-bold"
                  >
                    REGISTRAR
                  </button>
                  <button
                    type="reset"
                    id="btn_reset_formulario"
                    className="btn btn-secondary"
                  >
                    LIMPIAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
