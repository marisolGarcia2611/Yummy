import React, {useState} from "react"
import HeaderPage from "./Components/HeaderPage"
import NavBar from "./Components/NavBar"
import AddButton from "./Components/AddButton"
import TableRecipes from './Components/TableRecipes';
import Modal from "../Modal";
import Portal from "../Portal";



const currentPage = "Recetas";

function Recipes() {
    const [active, setActive] = useState(false);
    const toggle = () => { setActive(!active);
}
   return (
       <section>
           <div>
           <div className="content-wrapper">
                   <HeaderPage current_page={currentPage} />
               <div className="content">
                    <div className="card card-outline card-dark shadow">
                       <div className="container-fluid mt-2">
                               <button onClick={toggle}>Agregar producto</button>
                               <Modal active={active} toggle={toggle}>
                                    <h1>Hola</h1>
                                    <h2>Si funciona</h2>
                        </Modal>
                       </div>
                       <div>
                        </div>
                        <div>
                                <TableRecipes />
                        </div>
                    </div>
                </div>
           </div>   
        </div>
       </section>
    )
}

export default Recipes;