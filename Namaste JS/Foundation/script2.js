import React from "react";
import ReactDOM from "react-dom/client"

function CompontentMaking() {
    return (
        <div>
            <h1>Hello world using CompontentMaking 1</h1>
            <h2>This is h2 tags</h2>
            <h3>This is h3 tags</h3>
        </div>
    );
}
function CompontentMaking2() {
    return (
        <div>
            <h1>Hello world using CompontentMaking2</h1>
            <CompontentMaking />
        </div>
    );
}

const rootNode = document.getElementById("main")

const contentMaking = (
    <div>
        <h1>Hello world</h1>
        <h2>This is h2 tags</h2>
        <h3>This is h3 tags</h3>
    </div>
)


const reactAPP = ReactDOM.createRoot(rootNode)

reactAPP.render(<CompontentMaking2 />);