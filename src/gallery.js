import React from "react";
import "./gallery.css"
import pic20 from "./dispenser.jpg"
export const Gallery=()=>{
let ga=document.createElement('img');
ga.id("Gal");
ga.src(pic20);
document.body.appendChild(ga);

   
}