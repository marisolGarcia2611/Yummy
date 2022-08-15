import React, { Component } from "react";
import iCafe1 from "../images/mocha.png";
import iTea from '../images/shaken-black-tea.png';
import iCafe2 from '../images/cajeta-frappuccino.png';
import iSalado from '../images/Sandwich Pavo Panela.png';
import iSaladoH from '../images/Grilled Cheese Sandwich.png';
import iSaludable from '../images/Ensalada Cesar.png';
import Card from "../componentes/Card";
import CategoriasProducto from "./CategoriasProducto"
function Menu(props) {
    return (
        <div className="col-md-9">
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
            {props.categorias.map((obj, i) =>
                <CategoriasProducto categoria={obj} key={i} index={i +1}/>
                )}
            </div>
        </div>
    );
}
export default Menu;
