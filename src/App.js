import "./App.css";
//Se importa BrowsrRouter, Route y Routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import SingUp from "./SingUp";
import Main from "./Main";
import Orden from "./Orden";
import Admin from "./Admin/index";

// console.log("ajas");
let body = document.getElementsByTagName("body");

// console.log("🚀 ~ file: App.js ~ line 12 ~ body", body)
body[0].classList =
  "hold-transition sidebar-mini layout-fixed layout-navbar-fixed text-sm";
import Ordenes from "./Ordenes";
import Carrito from "./Carrito";
import Navbar from "./Navbar";
import { ProtectedRoute } from "./Componentes/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
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
            <section className="App-header">
              <LogIn />
            </section>
          }
        ></Route>

        <Route
          exact
          path="/Main"
          element={
            <ProtectedRoute>
              <Navbar />
              <section>
                <Main />
              </section>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          exact
          path="/SingUp"
          element={
            <section className="App-header">
              <SingUp />
            </section>
          }
        ></Route>

        <Route
          exact
          path="/Orden"
          element={
            <section>
              <Orden />
            </section>
          }
        ></Route>

        <Route
          exact
          path="/Carrito"
          element={
            <section>
              <Carrito />
            </section>
          }
        ></Route>

        <Route
          exact
          path="/Ordenes"
          element={
            <section>
              <Ordenes />
            </section>
          }
        ></Route>

        <Route
          exact
          path="/Admin/"
          element={
            // <section className="App-header">
            // {/* <!-- Site wrapper --> */}
            <div className="wrapper">
              <Admin />
            </div>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
