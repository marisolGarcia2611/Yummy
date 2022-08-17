import { React, Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/yummy.svg";
import perfil from "../images/usuario.png";
import HeaderPage from "./Components/HeaderPage";
import Form from "./Components/forms";
import Admin from ".";
import axios from "axios";
import Cookies from "universal-cookie";
// import DataTableCrudDemo from "./pruebas";
import { AlertClass } from "../AlertClass";
import { UserService } from "./service/UserService";
import Table from "./Components/Table";

const userService = new UserService();
const cookies = new Cookies();
const Alert = new AlertClass();
const API = "http://127.0.0.1:8000/api";
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const current_page = "Usuarios";
const axiosInstance = axios.create({
  baseURL: API,
  timeout: 3500,
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${cookies.get("Authorization")}`,
  },
});

function click() {
  Alert.Toast("success", "Toast de prueba");
}

class Users extends Component {
  state = {
    theads: [
      { name: "Nombre" },
      { name: "Correo" },
      { name: "Usuario" },
      { name: "Teléfono" },
      { name: "Acciones" },
    ],
    registers: [],
  };

  componentDidMount() {
    const request = async () => {
      return await userService.GetList();
    };
    request().then((res) => {
      this.setState({
        registers: res.data,
      });
    });
  }

  render() {
    return (
      <>
        <Admin />
        {/* <!-- Content Wrapper. Contenido de la pagina --> */}
        <div className="content-wrapper">
          {/* {props.block("Cargala compa")} */}
          {/* {props.toast("success","Aaaajasss")} */}
          {/* <!-- Content Header (Encabezado en el contenido de la pagina) --> */}
          <HeaderPage current_page={current_page} />

          {/* <!-- Main content --> */}
          <div className="content">
            {/* <!-- card --> */}
            <div className="card card-outline card-dark shadow">
              <div className="container-fluid mt-2">
                <button
                  id="btn_abrir_modal"
                  className="float-end btn btn-success fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  onClick={() => click()}
                >
                  <i className="fa-solid fa-circle-plus"></i>&nbsp; AGREGAR
                  USUARIO
                </button>
              </div>
              <div className="card-body">
                <Table
                  theads={this.state.theads}
                  data={this.state.registers}
                  click={() => click()}
                />
              </div>
            </div>
          </div>

          {/* <!-- Modal Usuario --> */}
          {/* <Form data={data}/> */}
        </div>
      </>
    );
  }
}

// const Userst = (props) => {
//   state = {
//     registers: []
//   }

//   const [DataResponse, setDataResponse] = useState([]);
//   function GETRequest(url) {
//     useEffect(() => {
//       const request = async () => {
//         return await userService.MapToTable()
//       };
//       request().then((res) => {
//         console.log(res);
//         setDataResponse(res.data)
//       });
//     }, []);
//   }
//   // function GETRequest(url) {
//   //   useEffect(() => {
//   //     const request = async () => {
//   //       return await axiosInstance.get(`/${url}`).catch((response) => {
//   //         let objResponse = response.data;

//   //         throw new Error(message[0]);
//   //       });
//   //     };
//   //     request().then((res) => {
//   //       setData(res.data.data)
//   //       // console.log(res.data.data);
//   //     });
//   //   }, []);
//   // }

//   let btn_abrir_modal = document.querySelector("#btn_abrir_modal");
//   GETRequest("users");

//   return (
//     <section>
//       <Admin />
//       {/* <!-- Content Wrapper. Contenido de la pagina --> */}
//       <div className="content-wrapper">
//         {/* {props.block("Cargala compa")} */}
//         {/* {props.toast("success","Aaaajasss")} */}
//         {/* <!-- Content Header (Encabezado en el contenido de la pagina) --> */}
//         <HeaderPage current_page={current_page} />

//         {/* <!-- Main content --> */}
//         <div className="content">
//           {/* <!-- card --> */}
//           <div className="card card-outline card-dark shadow">
//             <div className="container-fluid mt-2">
//               <button
//                 id="btn_abrir_modal"
//                 className="float-end btn btn-success fw-bold"
//                 data-bs-toggle="modal"
//                 data-bs-target="#modal"
//                 onClick={() => click()}
//               >
//                 <i className="fa-solid fa-circle-plus"></i>&nbsp; AGREGAR
//                 USUARIO
//               </button>
//             </div>
//             <div className="card-body">
//               {/* <!-- tabla --> */}
//               {/* <DataTableCrudDemo /> */}
//               {/* <Table data={registers} click={() => click()}/> */}
//               <Table
//                 columns={DataResponse}
//               />
//             </div>
//           </div>
//         </div>

//         {/* <!-- Modal Usuario --> */}
//         {/* <Form data={data}/> */}
//       </div>
//     </section>
//   );
// };

export default Users;
