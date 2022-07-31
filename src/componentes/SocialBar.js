import React,{Component} from "react";
import '../App.css';

function SocialBar() {
     return (
      <section>
         <div className='social-bar position_SocialBar'>

            <div  className='icon icon-tie'> 
            <button className="btn btn-danger Social__border__radius"></button><p>&nbsp; 15</p>
            </div>
            <div className='icon icon-tie'>
            <button className="btn btn-success Social__border__radius"></button><p>&nbsp; 15</p>
            </div>

        </div>

    </section>
     
    );
  }
export default SocialBar;