import React, { Component } from "react";

export class BranchOfficeClass {
  constructor() {
    this.bo_id = null;
    this.bo_name = null,
    this.bo_country = null,
    this.bo_state = null,
    this.bo_city = null,
    this.bo_address = null,  
    this.bo_active = true;

    this.created_at = new Date();
    this.updated_at = null;
    this.deleted_at = null;
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
              {/* {console.log(this.props.data)} */}
              {this.props.data.map((d) => (
                <tr>
                  <td>{d.bo_name}</td>
                  <td>{d.bo_city}</td>
                  <td>{d.bo_state}</td>
                  <td>{d.bo_country}</td>
                  <td>{d.bo_address}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.props.UpdateObject}
                        data-bs-toggle="modal"
                        data-bs-target="#modal"
                        data-id={d.bo_id}
                      >
                        <i
                          className="far fa-edit"
                          onClick={this.props.UpdateObject}
                          data-bs-toggle="modal"
                          data-bs-target="#modal"
                          data-id={d.bo_id}
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.props.DeleteObject}
                        data-id={d.bo_id}
                        data-name={d.bo_name}
                      >
                        <i
                          className="far fa-trash"
                          onClick={this.props.DeleteObject}
                          data-id={d.bo_id}
                          data-name={d.bo_name}
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
let branchOffice = new BranchOfficeClass();
export class Form extends Component {
  componentDidMount() {}

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
                  SUCURSAL
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
                  <div className="mb-3 col-12">
                    <label htmlFor="bo_name" className="form-label">
                      Sucursal: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bo_name"
                      name="bo_name"
                      defaultValue={this.props.form_data.bo_name}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="bo_country" className="form-label">
                      País: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bo_country"
                      name="bo_country"
                      defaultValue={this.props.form_data.bo_country}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="bo_state" className="form-label">
                      Estado: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bo_state"
                      name="bo_state"
                      defaultValue={this.props.form_data.bo_state}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="bo_city" className="form-label">
                      Ciudad: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bo_city"
                      name="bo_city"
                      defaultValue={this.props.form_data.bo_city}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="bo_address" className="form-label">
                      Dirección: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bo_address"
                      name="bo_address"
                      defaultValue={this.props.form_data.bo_address}
                      onChange={this.props.handleChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    id="btn_enviar_formulario"
                    className="btn btn-success fw-bold"
                    onClick={
                      this.props.id
                        ? this.props.UpdateObject
                        : this.props.CreateObject
                    }
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
