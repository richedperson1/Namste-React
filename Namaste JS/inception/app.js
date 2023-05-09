import React from "react";
import ReactDOM from 'react-dom';



const h11 = React.createElement("h1", {}, "Hello world")
const h12 = React.createElement("h1", {}, "Rutvik")

const outerDiv = React.createElement("div", {
    id: "Hellow"
},
    [h11, h12])

let reactAPP = ReactDOM.createRoot(document.getElementById("main"))
reactAPP.render(outerDiv)

console.log("Checking wheather log is remove or not!");
// let reactAPP = ReactDOM.createRoot(document.getElementById("main"))
// reactAPP.render(h1Tag)
