import React from "react";
import "./input.css"
import "./img.css"
import "./div.css"

export const Input=({src})=>{
    return(
        <div class="text1">
        <img  id="im1" src={src}/>
        <input placeholder="search for items"/>
        </div>
    );
}