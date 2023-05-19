import { useState } from "react";
import { firstResto } from "../constant";
let firstElem = 0;

export const First = () => {
  // This is made to declare varible in the JS React Library
  //useState will give Array of list out off which first was varible and another was function to change that varible

  const [searchState, setSearchState] = useState("hellow");
  let [findSpace, setFindSpace] = useState("False");
  return (
    <>
      <h1>First Course</h1>
      <input
        type="text"
        name="name"
        value={searchState}
        onChange={(e) => {
          setSearchState(e.target.value);
        }}
      />
      <h2>{firstResto}</h2>
      <button
        className="btnClic"
        onClick={() => {
          if (findSpace == "False") {
            setFindSpace("True");
          } else {
            setFindSpace("False");
          }
        }}
      >
        Hello 2
      </button>
    </>
  );
};
export const Second = () => {
  return <h2>Hello I'm H2 not using me "</h2>;
};
