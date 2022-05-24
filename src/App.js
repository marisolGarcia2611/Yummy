import './App.css';
import LogIn from './LogIn';
import SingUp from './SingUp';
//Se importa BrowsrRouter, Route y Routes 
import {  BrowserRouter as Router,  Route,Routes} from "react-router-dom";
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
    </Routes>
  </Router>
  );
}

export default App;
