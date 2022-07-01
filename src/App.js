import './App.css';
//Se importa BrowsrRouter, Route y Routes 
import {  BrowserRouter as Router,  Route,Routes} from "react-router-dom";
import LogIn from './LogIn';
import SingUp from './SingUp';
import Main from './Main';
import Orden from './Orden';
/*Menu
Ordenes
Pedidos
Administrativo*/

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={
        <section className="App-header">
          <LogIn />
        </section>
      }>
      </Route>

      <Route exact path="/SingUp" element={
        <section className="App-header">

        <SingUp/>
        </section>
      }>
      </Route>

      <Route exact path="/Main" element={
        <section>

        <Main/>
        </section>
      }>
      </Route>

      <Route exact path="/Orden" element={
        <section>

        <Orden/>
        </section>
      }>
      </Route>


    </Routes>
  </Router>
  );
}

export default App;
