import React, { useEffect, useState } from "react";
import NavItem from "../componentes_main/NavItem";
import Cookies from "universal-cookie";
const cookies = new Cookies()

function NavCategories(props) {
    return (
        <nav id="nav1" className="navbar start-50 translate-middle-x navb px-3  ">
            <ul className="nav nav-pills">
                {props.items.map((obj,i) =>
                <NavItem item={obj} key={i}></NavItem>
                    )}               
            </ul>
        </nav>
    );
}

export default NavCategories;