import './App.css';
//Se importa BrowsrRouter, Route y Routes 
import {  BrowserRouter as Router,  Route,Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import LogIn from './LogIn';
import SingUp from './SingUp';
import Main from './Main';
import Orden from './Orden';
import Admin from './Admin/index';

// console.log("ajas");
let body = document.getElementsByTagName('body');
// console.log("🚀 ~ file: App.js ~ line 12 ~ body", body)
body[0].classList = "hold-transition sidebar-mini layout-fixed layout-navbar-fixed text-sm"

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

      <Route exact path="/Admin/" element={
        // <section className="App-header">
          // {/* <!-- Site wrapper --> */}
            <div className="wrapper">
              <Admin/>
            </div>
            // <!-- ./wrapper (este se abre en el Template-header) --></Routes>
        // </section>
      }>
      </Route>


    </Routes>
  </Router>
  );
}

export default App;
