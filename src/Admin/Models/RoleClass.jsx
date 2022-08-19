import React, { Component } from "react";

export class RoleClass {
   constructor() {
      this.role_id = null
      this.role_name = null,
      this.role_active = true

      this.role_created_at = new Date()
      this.role_updated_at = null
      this.role_deleted_at = null
   }
}

// let tabla;

// tabla = $("#tabla").DataTable({
//   responsive: true,
//   language: {
//     url: "https://cdn.datatables.net/plug-ins/1.11.3/i18n/es-mx.json",
//   },
//   columnDefs: [
//     {
//       className: "dt-center",
//       targets: "_all",
//     },
//   ],
//   dom: '<"row"<"col-md-6 "l> <"col-md-6"f> > rt <"row"<"col-md-6 "i> <"col-md-6"p> >',
//   lengthMenu: [
//     [5, 10, 50, 100, -1],
//     [5, 10, 50, 100, "Todos"],
//   ],
//   pageLength: 10,
//   deferRender: true,
//   aaSorting: [], //deshabilitar ordenado automatico
// });

// export class Table extends Component {
//   render() {
//     return (
//       <>
//         <div className="table-responsive">
//           <table
//             id="tabla"
//             className="table table-hover text-center"
//             style={{ width: "100%" }}
//           >
//             <thead className="thead-dark">
//               <tr>
//                 {this.props.theads.map((d, i) => (
//                   <th>{d.name}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {this.props.data.map((d) => (
//                 <tr>
//                   <td>{d.name}</td>
//                   <td>{d.last_name}</td>
//                   <td>{d.email}</td>
//                   <td>{d.username}</td>
//                   <td>{d.phone}</td>
//                   <td>
//                     <div className="btn-group">
//                       <button type="button" className="btn btn-primary">
//                         <i
//                           className="far fa-edit"
//                           onClick={this.props.UpdateObject}
//                           data-bs-toggle="modal"
//                           data-bs-target="#modal"
//                           data-id={d.id}
//                         ></i>
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn-danger">
//                         <i className="far fa-trash"
//                           onClick={this.props.DeleteObject}
//                           data-id={d.id}
//                         ></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot>
//               <tr className="thead-dark">
//                 {this.props.theads.map((d) => (
//                   <th>{d.name}</th>
//                 ))}
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </>
//     );
//   }
// }