import React, { Component } from "react";
import Card from "../Componentes/Card";
import iCafe1 from "../images/mocha.png";
import iTea from '../images/shaken-black-tea.png';
import iCafe2 from '../images/cajeta-frappuccino.png';
import iSalado from '../images/Sandwich Pavo Panela.png';
import iSaladoH from '../images/Grilled Cheese Sandwich.png';
import iSaludable from '../images/Ensalada Cesar.png';

function Categorias(props) {
    return (
        <section>

            <h1 id="scrollspyHeading1">Bebidas</h1>
            <div className="space1">
                <div className="row">
                    <hr />
                    <h5 className="text-center" id="BebidasCalientes">Bebidas calientes</h5>
                    <hr />
                    <div className="col-md-4">
                        <Card />
                    </div>

                    <div className="col-md-4">
                        <Card />
                    </div>
                    <div className="col-md-4">
                        <Card />
                    </div>

                </div>
                <div className="row">
                    <hr />
                    <h5 className="text-center" id="BebidasFrias">Bebidas Frías</h5>
                    <hr />
                    <div className="col-md-4">
                        <div className="card card_Backgraund">
                            <div className="card-body text-center">
                                <img src={iCafe2} className="img__Cafe"></img>
                                <h5 className="card-title">Mocha</h5>
                                <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                            </div>
                        </div>

                    </div>


                </div>

                <div className="row">
                    <hr />
                    <h5 className="text-center" id="BebidasBaseTe">Bebidas Base Té</h5>
                    <hr />
                    <div className="col-md-4">
                        <div className="card card_Backgraund">
                            <div className="card-body text-center">
                                <img src={iTea} className="img__Cafe"></img>
                                <h5 className="card-title">Mocha</h5>
                                <h6 className="card-subtitle mb-2 text-muted">$00.00</h6>
                                <p className="card-text">Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
}

export default Categorias;