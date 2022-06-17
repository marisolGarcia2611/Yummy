import './App.css';
//Se importa BrowsrRouter, Route y Routes 
import { Route, Routes } from "react-router-dom";
import LogIn from './LogIn';
import SingUp from './SingUp';
import Main from './Main';
import Orden from './Orden';
import Navbar from './Navbar'
import { ProtectedRoute } from './Componentes/ProtectedRoute';
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
      </Routes>
    </AuthProvider>
  );
}

export default App;
