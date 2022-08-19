import "./App.css";
//Se importa BrowsrRouter, Route y Routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LogIn from "./LogIn";
import SingUp from "./SingUp";
import Main from "./Main";
import Orden from "./Orden";
import Admin from "./Admin/index";
import Ordenes from './Ordenes';
import Carrito from './Carrito';
// console.log("ajas");
let body = document.getElementsByTagName("body");

// console.log("🚀 ~ file: App.js ~ line 12 ~ body", body)
body[0].classList =
  "hold-transition sidebar-mini layout-fixed layout-navbar-fixed text-sm";
import Ordenes from "./Ordenes";
import Carrito from "./Carrito";
import Navbar from "./Navbar";
import { ProtectedRoute } from "./componentes/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import Users from "./Admin/Users";
import Pruebas from "./Admin/pruebas";
/*Menu
Ordenes
Pedidos
Administrativo*/

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          index
          path="/"
          element={
            <ProtectedRoute>
              <section className="App-header">
                <LogIn />
              </section>
            </ProtectedRoute>

          }
        ></Route>

        <Route
          exact
          path="/Main"
          element={
            <section>
              <ProtectedRoute>
                <Navbar />
                <section>
                  <Main />
                </section>
              </ProtectedRoute>
            </section>
          }
        ></Route>
        <Route
          exact
          path="/SingUp"
          element={
            <ProtectedRoute>
              <section className="App-header">
                <SingUp />
              </section>
            </ProtectedRoute>

          }
        ></Route>
        <Route exact path="/Carrito" element={
          <ProtectedRoute>
            <section>
              <Carrito />
            </section>
          </ProtectedRoute>

        }>
        </Route>

        <Route exact path="/Ordenes" element={
          <ProtectedRoute>
            <section>
            <Ordenes />
          </section>
          </ProtectedRoute>
          
        }></Route>
        <Route
          exact
          path="/Orden"
          element={
            <ProtectedRoute>
              <section>
              <Orden />
            </section>
            </ProtectedRoute>
            
          }
        ></Route>

        <Route
          exact
          path="/Carrito"
          element={
            <ProtectedRoute>
              <section>
              <Carrito />
            </section>
            </ProtectedRoute>
            
          }
        ></Route>

        <Route
          exact
          path="/Ordenes"
          element={
            <ProtectedRoute>
              <section>
              <Ordenes />
            </section>
            </ProtectedRoute>
            
          }
        ></Route>

        <Route
          exact
          path="/Admin/"
          element={
            <ProtectedRoute>
              
            // {/* <!-- Site wrapper --> */}
            <div className="wrapper">
              <Admin />
            </div>
            </ProtectedRoute>
            
          }
        ></Route>

        <Route
          exact
          path="/Admin/Users"
          element={
            <ProtectedRoute>
            
            // {/* <!-- Site wrapper --> */}
            <div className="wrapper">
              <Users />
            </div>
            </ProtectedRoute>
            
          }
        ></Route>
        <Route
          exact
          path="/Admin/Pruebas"
          element={
            <ProtectedRoute>
            // {/* <!-- Site wrapper --> */}
            <div className="wrapper">
              {/* <Pruebas /> */}
            </div>
            </ProtectedRoute>
            
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
