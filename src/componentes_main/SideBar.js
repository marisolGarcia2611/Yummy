import React, { Component } from "react";
import SideBarItem from "./SideBatItem"
function SideBar(props) {



    return (
        <div id="space2" className="col-md-2 d-none d-md-block space2">
            <h5>Categorias</h5>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                {props.items.map((obj, i) =>
                    <SideBarItem nombre={obj.cat_name} key={i} />
                )}
            </div>
            <div>
                <button type="button" data-bs-toggle="modal" data-bs-target="#addModal" className=" card btn btn-warning text-center">
                    <b>+ Añadir producto</b>
                </button>
            </div>
        </div>
    );
}

export default SideBar;