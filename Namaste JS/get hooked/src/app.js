import React from "react";
import ReactDOM from "react-dom/client";
// import {Second,First}  from "./comp/title";
import * as obj from "./comp/title";

let firstELe = [1, 2, 3, 4, 5, 6, 9];

function ComponetProps(args) {
  console.log(args);
  return <h1>gel</h1>;
}
const first = (
  <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <ComponetProps prop={firstELe} second={"Elbow methods"} />
    <obj.First />
    <obj.Second />
  </>
);

const mainRoot = document.getElementById("root");

const nodeRoot = ReactDOM.createRoot(mainRoot);
nodeRoot.render(first);
