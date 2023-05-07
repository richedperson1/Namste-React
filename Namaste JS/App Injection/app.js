// import React from "react";
// import ReactDOM from 'react-dom';






// // const h11 = React.createElement("h1", {}, "Hello world");
// // const h12 = React.createElement("h1", {}, "Rutvik");

// // const outerDiv = React.createElement("div", {
// //     id: "Hellow",
// //     className: "h1Div"
// // },
// //     [h11, h12])

// // let reactAPP = ReactDOM.createRoot(document.getElementById("main"));
// // reactAPP.render(outerDiv);

// // let reactAPP = ReactDOM.createRoot(document.getElementById("main"))
// // reactAPP.render(h1Tag)

const rootData = document.getElementById("main");

const h1Crate = document.createElement("h1")
const h11Crate = document.createElement("h1")
h1Crate.innerHTML = "Hello world"
h11Crate.innerHTML = "Hello world"

rootData.appendChild(h1Crate)
rootData.appendChild(h11Crate)