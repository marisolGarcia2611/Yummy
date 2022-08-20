import React, { Component } from "react";

export class ProductClass {
  constructor() {
    this.pro_id = null;
    this.pro_name = null,
    this.pro_cat_id = null,
    this.pro_price = null,  
    this.pro_active = true;

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
                  <td>{d.pro_name}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.props.UpdateObject}
                        data-bs-toggle="modal"
                        data-bs-target="#modal"
                        data-id={d.pro_id}
                      >
                        <i
                          className="far fa-edit"
                          onClick={this.props.UpdateObject}
                          data-bs-toggle="modal"
                          data-bs-target="#modal"
                          data-id={d.pro_id}
                        ></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.props.DeleteObject}
                        data-id={d.pro_id}
                        data-name={d.pro_name}
                      >
                        <i
                          className="far fa-trash"
                          onClick={this.props.DeleteObject}
                          data-id={d.pro_id}
                          data-name={d.pro_name}
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
let product = new ProductClass();
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
                  PRODUCTO
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
                    <label htmlFor="pro_name" className="form-label">
                      Producto: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pro_name"
                      name="pro_name"
                      defaultValue={this.props.form_data.pro_name}
                      onChange={this.props.handleChange}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="cat_id" className="form-label">
                      Categoria: <span className="span_campo_obligatorio" />
                    </label>
                    <select
                        className="select2 form-control select-control"
                        style={{ width: "100%" }}
                        aria-label="Default select example"
                        id="cat_id"
                        name="cat_id"
                        onChange={this.props.handleChange}
                      >
                        <option value="-1">Selecciona una opción...</option>
                        {this.props.categories.map((category) => (
                          <option value={category.cat_id}>{category.cat_name}</option>
                        ))}
                      </select>
                  </div>
                  <div className="mb-3 col-6">
                    <label htmlFor="pro_price" className="form-label">
                      Precio: <span className="span_campo_obligatorio" />
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="pro_price"
                      name="pro_price"
                      defaultValue={this.props.form_data.pro_price}
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
