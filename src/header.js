import React from "react";
import "./header.css";

export const Header=({text})=>{
    return(
        <header><h1>{text}</h1>
        </header>
    );
}