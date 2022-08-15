import './App.css';
//Se importa BrowsrRouter, Route y Routes 
import { Route, Routes } from "react-router-dom";
import LogIn from './LogIn';
import SingUp from './SingUp';
import Main from './Main';
import Orden from './Orden';
import Navbar from './componentes/Navbar'
import Ordenes from './Ordenes';
import Carrito from './Carrito';
import { ProtectedRoute } from './componentes/ProtectedRoute';
import { AuthProvider } from './context/authContext'
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index path="/" element={
          <section className="App-header">
            <LogIn />
          </section>
        }>
        </Route>

        <Route exact path="/Main" element={
          <ProtectedRoute>
            <Navbar />
            <section><Main /></section>
          </ProtectedRoute>
        }>
        </Route>

        <Route exact path="/SingUp" element={
          <section className="App-header"><SingUp /></section>
        }>
        </Route>

        <Route exact path="/Orden" element={
          <ProtectedRoute>
            <section><Orden /></section>
          </ProtectedRoute>
        }>
        </Route>


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
        }>
        </Route>



      </Routes>
    </AuthProvider>
  );
}

export default App;