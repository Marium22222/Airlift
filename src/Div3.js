import React from "react";
import "./Div3.css"
import { Div1 } from "./Div1";
import { Gallery } from "./gallery";
export const Div3=({text1,but1,src,text2,text3,text4,text5})=>{
    return(
    <div class="text3">
        <h5 id="h4y">{text1}</h5>
        <Div1 quantity={text4} brand={text5}/>
        <img id="im4" src={src}/>
        <p>{text2}</p>
        <button id="but" onClick={Gallery}>{but1}</button>
        <a id="a3" href="#">{text3}</a>
    </div>
    );
}