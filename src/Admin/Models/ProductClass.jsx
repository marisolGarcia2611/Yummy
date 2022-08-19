import React, { Component } from "react";

export class UserClass {
   constructor() {
      this.id = null
      this.name = null,
      this.last_name = null
      this.email = null
      this.username = null
      this.password = null
      this.role_id = 0
      this.phone = null
      this.active = true

      this.created_at = new Date()
      this.updated_at = null
      this.deleted_at = null
   }
}


export class Table extends Component {
  render() {
   return (
      <>
        <div className="table-responsive">
          <table
            id="tabla"
            className="table table-hover text-center"
            style={{ width: "100%" }}
          >
            <thead className="thead-dark">
              <tr>
                {this.props.theads.map((d, i) => (
                  <th>{d.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((d) => (
                <tr>
                  <td>{d.name}</td>
                  <td>{d.last_name}</td>
                  <td>{d.email}</td>
                  <td>{d.username}</td>
                  <td>{d.phone}</td>
                  <td>
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary"
                      onClick={this.props.UpdateObject}
                      data-bs-toggle="modal"
                      data-bs-target="#modal"
                      data-id={d.id}>
                        <i
                          className="far fa-edit"
                          onClick={this.props.UpdateObject}
                          data-bs-toggle="modal"
                          data-bs-target="#modal"
                          data-id={d.id}
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.props.DeleteObject}
                        data-id={d.id}
                        data-username={d.username}>
                        <i className="far fa-trash"
                          onClick={this.props.DeleteObject}
                          data-id={d.id}
                          data-username={d.username}
                        ></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="thead-dark">
                {this.props.theads.map((d) => (
                  <th>{d.name}</th>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </>
    );
  }
}
let user = new UserClass();
export class Form extends Component {
   
   componentDidMount() {
      
   }
   
   render() {
      // console.log(`el name: ${this.props.form_data.name}`);
    return (
       <>
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
                    <i className="fa-solid fa-user-plus"></i>&nbsp; REGISTRAR
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
                  <div
                    id="formulario"
                    className="row"
                    encType="multipart/form-data"
                  >
                    {/* <input
                      type="hidden"
                      id="accion"
                      name="accion"
                      defaultValue="iniciar_sesion"
                    /> */}
                    <input
                      type="hidden"
                      id="id"
                      name="id"
                      defaultValue=""
                      onChange={this.props.handleChange}
                    />
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="name" className="form-label">
                        Nombres: <span className="span_campo_obligatorio" />
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        defaultValue={this.props.form_data.name}
                        onChange={this.props.handleChange}
                      />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="last_name" className="form-label">
                        Apellidos: <span className="span_campo_obligatorio" />
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        defaultValue={this.props.form_data.last_name}
                        onChange={this.props.handleChange}
                      />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Teléfono: <span className="span_campo_obligatorio" />
                      </label>
                      <input
                        type="phone"
                        className="form-control"
                        id="phone"
                        name="phone"
                        defaultValue={this.props.form_data.email}
                        onChange={this.props.handleChange}
                      />
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="email" className="form-label">
                        Correo: <span className="span_campo_obligatorio" />
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        defaultValue={this.props.form_data.email}
                        onChange={this.props.handleChange}
                      />
                    </div>
                    <div className="mb-3 col-12">
                      <label htmlFor="username" className="form-label">
                        Nombre de Usuario:{" "}
                        <span className="span_campo_obligatorio" />
                      </label>
                      <input
                        type="username"
                        className="form-control"
                        id="username"
                        name="username"
                        defaultValue={this.props.form_data.username}
                        onChange={this.props.handleChange}
                      />
                    </div>
                    <div className="mb-3 row" id="div_password">
                      <div className="col">
                        <label htmlFor="password" className="form-label">
                          Contraseña:{" "}
                          <span className="span_campo_obligatorio" />
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          defaultValue={this.props.form_data.password}
                          onChange={this.props.handleChange}
                        />
                      </div>
                      <div className="col">
                        <label
                          htmlFor="confirm_password"
                          className="form-label"
                        >
                          Confirmar Contraseña:{" "}
                          <span className="span_campo_obligatorio" />
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirm_password"
                          name="confirm_password"
                        />
                        <span
                          className="fst-italic"
                          id="respuesta_contrasena"
                        ></span>
                      </div>
                    </div>
                    <div className="mb-3" hidden id="div_nueva_password">
                      <label htmlFor="nueva_password" className="form-label">
                        Nueva Contraseña:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nueva_password"
                        name="nueva_password"
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
                      <label htmlFor="role_id" className="form-label">
                        Tipo de Usuario:{" "}
                        <span className="span_campo_obligatorio" />
                      </label>
                      <select
                        className="select2 form-control select-control"
                        style={{ width: "100%" }}
                        aria-label="Default select example"
                        id="role_id"
                        name="role_id"
                        onChange={this.props.handleChange}
                      >
                        <option value="-1">Selecciona una opción...</option>
                        {this.props.roles.map((role) => (
                          <option value={role.role_id}>{role.role_name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      id="btn_enviar_formulario"
                      className="btn btn-success fw-bold"
                      onClick={this.props.id ? this.props.UpdateObject : this.props.CreateObject}
                    >
                      {this.props.id ? "ACTUALIZAR" : "REGISTRAR"}
                    </button>
                    <button
                      type="reset"
                      id="btn_reset_formulario"
                      className="btn btn-secondary"
                      onClick={this.props.ClearForm}
                    >
                      LIMPIAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </>
     );
   }
 }