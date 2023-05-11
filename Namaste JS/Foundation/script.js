import React from "react"
import ReactDOM from "react-dom/client"



const heading = React.createElement("h1", {}, "Hello world using React");


const heading2 = (
    <div>
        <h1>Hello world 1</h1>
        <h1>Hello world 2</h1>
        <h1>Hello world 3</h1>
    </div>
)


function FunctionComponent1() {
    return (
        <div>
            <h2>I'm H2 tag in the div elements</h2>
            <h1>Hello I'm using JSX to create elements</h1>
        </div>
    )
};
let reactAPP = ReactDOM.createRoot(document.getElementById("main"));

let priceOfKela = 20;
let whatIs = "Price of kela is : "
function Comp() {
    return (<h1>{whatIs} {priceOfKela} == {console.log("Hello world")} As usual we can call the function using component call</h1>);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
reactAPP.render(<Comp />);
// let firstElement = functionComponent1();
// reactAPP.render(<functionComponent1 />);