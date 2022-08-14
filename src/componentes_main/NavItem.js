import React from "react";

function NavItem(props) {
    return (
        <li className="nav-item">
            <a className="nav-link link-secondary" href={'#scrollspyHeading' + (props.itindex + 1)} > {props.item.cat_name} </a>
        </li>
    );
}

export default NavItem;