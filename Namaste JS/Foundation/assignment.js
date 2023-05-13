import React from "react";
import ReactDOM from "react-dom/client";



const image = (
    <div className="mainContent">
        <img src="https://raw.githubusercontent.com/richedperson/Rutvik/master/smallLogo.png" alt="not found" id="websiteLogo" />
        <input type="text" placeholder="Search.." />
        <img src="https://shorturl.at/ryJR2" alt="not found" />
    </div>
)



function searchBarSelect() {
    console.log("Hello world");
}

const rootApp = ReactDOM.createRoot(document.getElementById("main"));



rootApp.render(image);

{
    const webLogo = document.getElementById("websiteLogo");
    console.log("------------>", webLogo);
}
