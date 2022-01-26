import React from "react";
import { BracketsNotation } from "./components/BracketsNotation";
/*cartella*/ /*percorso*/
import { VariableAccess } from "./components/VariableAccess";
import { UpdatingProps } from "./components/UpdatingProps";
import { NewProperties } from "./components/NewProperties";
import { DeleteProps } from "./components/DeleteProps";

import "./App.css";

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

const variableComp = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

const goodDoggo = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

const heyDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
  // torna il valore di heyDog piuttosto che dell'intera costante senza la prop eliminata. E' normale?
};

function App() {
  return (
    <div className="App">
      <p>
        <BracketsNotation testObj={testObj["the drink"]} />
      </p>
      <p>
        <VariableAccess variableComp={variableComp[16]} />
      </p>
      <p>
        <UpdatingProps myDog={(myDog["name"] = "Happy Coder")} />
      </p>
      <p>
        <NewProperties goodDoggo={(goodDoggo.bark = "Woof")} />
      </p>
      <p>
        <DeleteProps heyDog={delete heyDog.bark} />
      </p>
    </div>
  );
}

export default App;
