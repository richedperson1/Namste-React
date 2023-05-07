import React from "react";
import ReactDOM from 'react-dom';






const h11 = React.createElement("h1", {}, "Hello world")
const h12 = React.createElement("h1", {}, "Rutvik")

const outerDiv = React.createElement("div", {
    id: "Hellow",
    className: "h1Div"
},
    [h11, h12])

let reactAPP = ReactDOM.createRoot(document.getElementById("main"))
reactAPP.render(outerDiv)

// let reactAPP = ReactDOM.createRoot(document.getElementById("main"))
// reactAPP.render(h1Tag)
