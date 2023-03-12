import React from "react";
import "./Div1.css"
import "./im2.css"
export const Div2=({text,src,text1})=>{
    return(
        <div class="text2">
        <h1>{text}</h1>
        <img id="im2" src={src}/>
        <br></br>
        <a href="#" id="cat">{text1}
            </a></div>

    );
}