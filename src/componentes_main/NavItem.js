import React from "react";

function NavItem(props){

    
    console.log("props:",props.item.indice, props.item.cat_name)
    console.log("props:",props.itindex)
    return(
             <li className="nav-item">
                        <a className="nav-link link-secondary"  href={'#scrollspyHeading'+(props.itindex+1)} > { props.item.cat_name } </a>
            </li>
    );
}

export default NavItem;