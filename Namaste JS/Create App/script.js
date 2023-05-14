import React from "react"
import ReactDOM from "react-dom/client"


const heading = (
    <h1>Hello world</h1>
)

const HeaderCreate = () => {
    return (
        <div className="header-items">
            <nav>
                <ul>
                    <li>HOme</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            </nav>
            <img src="https://shorturl.at/hDFTU"></img>
        </div>
    )
}


function FunctionalComponents() {
    return (
        <>

            <HeaderCreate />
            <main>
                Hello world
            </main>
        </>
    )
}

const mainRoot = document.getElementById("root-card")
const reactApp = ReactDOM.createRoot(mainRoot)

reactApp.render(<FunctionalComponents />)