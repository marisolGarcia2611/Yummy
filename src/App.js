import './App.css';
import LogIn from './LogIn';
import SingUp from './SingUp';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
   <section className="App-header">
       <LogIn></LogIn>
    </section> 
    /*<section className="App-header">
        <SingUp></SingUp>
    </section>*/
  
  );
}
/*
<Router>
         <Route exact path="/" component={LogIn} />
    </Router>*/


export default App;
