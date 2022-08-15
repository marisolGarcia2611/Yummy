import React, { Component } from "react";
import SideBarItem from "./SideBatItem"
function SideBar(props) {



    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h6>{props.nombre}</h6>
                </button>
            </h2>

        </div>
    );
    {/* <div className="accordion-item">
<h2 className="accordion-header" id="flush-headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <h6>Aliementos</h6>
    </button>
</h2>

</div>
<div className="accordion-item">
<h2 className="accordion-header" id="flush-headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" >
        <h6>Postres</h6>
    </button>
</h2>
</div> */}

}

export default SideBar;

