import React,{Component} from "react";

function NavCategories(props){

    
    console.log("props:",props)
    return(
             <li className="nav-item">
                        <a className="nav-link link-secondary"  href={'#scrollspyHeading'+(props.indice+1)} > { props.item.cat_name } </a>
            </li>
    );
}

export default NavCategories;