import React from "react";
import  ReactDOM  from "react-dom/client";
// import {Second,First}  from "./comp/title";
import * as obj  from "./comp/title";

const first = (
    <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <obj.First/>
    <obj.Second/>

    </>
)


const mainRoot = document.getElementById("root");

const nodeRoot = ReactDOM.createRoot(mainRoot);
nodeRoot.render(first)