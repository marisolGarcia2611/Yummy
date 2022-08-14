import React,{Component} from "react";
import '../App.css';
import Tarject from "./Tarject";
import Search from "./Search";




function Sidebar() {
     return (
      <section>
        
            <div>
                <Search/>
                  <div className="contenedor-light">
                    <Tarject/>
                    <Tarject/>
                    <Tarject/>
                    <Tarject/>
                    <Tarject/>
                    <Tarject/>
                    <Tarject/>
                    <Tarject/>
                    <Tarject/>
                    <Tarject/>
                  </div>
            </div>
                
    </section>
     
    );
  }
export default Sidebar;