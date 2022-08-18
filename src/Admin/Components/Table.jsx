import React, { Component } from "react";
// Se importa Link de react router dom, que es el que hara la funcion
// de lals etiquetas <a>, hara referencias a las rutas especficadas en App.js
// Importar en cada archivo que se necesite
import { Link } from "react-router-dom";

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
                        data-id={d.id}>
                        <i className="far fa-trash"
                          onClick={this.props.DeleteObject}
                          data-id={d.id}
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
