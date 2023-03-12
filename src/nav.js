import React from "react";
import "./nav.css"
export const Nav=({text1,text2})=>{
    return(
        <nav><a id="a1" href={text2}>{text1}</a></nav>
    );
}