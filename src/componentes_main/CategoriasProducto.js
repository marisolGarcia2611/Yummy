import React, { Component } from "react";
import Card from "../componentes/Card";
function CategoriasProducto(props) {
    return (
        <div className="space1">
            <h1 id={"scrollspyHeading" + props.index}>{props.categoria.cat_name}</h1>
            <div className="row">
                <Card />
            </div>
        </div>
    );
}

export default CategoriasProducto;