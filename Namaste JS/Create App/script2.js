// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { restaurantList as restoEle } from "./content";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

let urlData =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
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
  );
};
// Restaurant card component: Image, name, cuisine

function CreateSingleCard({
  name,
  address,
  costForTwoString,
  avgRating,
  cloudinaryImageId,
  id,
}) {
  const imageURL = urlData + cloudinaryImageId;
  return (
    <>
      <img src={imageURL} key={id + "image"} />
      <p key={id + "_name"}>name : {name} </p>
      <p key={id + "_add"}>Address : {address}</p>
      <p key={id + "_para"}>Price : {costForTwoString}</p>
      <p key={id + "_rating"}>Rating : {avgRating} 🌟</p>
    </>
  );
}

function selectedElement(searchTxt, restoDetails) {
  function secondSelect() {
    const elementFound = restoDetails.filter((val) => {
      return val.data.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    return elementFound;
  }
  return secondSelect();

  const sizeArr = restoDetails.length;
  let newResto = [];
  let flag = false;
  for (let i = 0; i < sizeArr; i++) {
    const firstInd = restoDetails[i].data;
    if (
      searchTxt &&
      firstInd.name.toLowerCase().search(searchTxt.toLowerCase()) != -1
    ) {
      flag = true;
      newResto.push(restoDetails[i]);
    }
  }
  if (flag == true) {
    return newResto;
  }
  return -1;
}
function BodyTags() {
  const [searchTxt, setseachTxt] = useState();

  const [restaurantList, setResto] = useState(restoEle);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => {
            setseachTxt(e.target.value);
          }}
        />
        <button
          className="searchBar pointer"
          onClick={(e) => {
            const foundEle = selectedElement(searchTxt, restaurantList);
            if (typeof foundEle == "object") {
              setResto(foundEle);
            }
          }}
        >
          Search...
        </button>
        <button
          className="searchBar pointer"
          onClick={() => {
            setResto(restoEle);
          }}
        >
          ❌
        </button>
      </div>
      <div className="dish-containers">
        {restaurantList.map((val) => {
          return (
            <div className="dish-card" key={val.data.id + "main-div"}>
              <CreateSingleCard {...val.data} />
            </div>
          );
        })}
      </div>
    </>
  );
}

const FooterElement = () => {
  return (
    <div className="footer-section">
      <p>Created by "rutvikjaiswal195@gmail.com"</p>
      <p>Using React</p>
    </div>
  );
};
const Footer = () => {
  return FooterElement();
};

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderCreate />
      <BodyTags />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root-card"));
root.render(<AppLayout />);
