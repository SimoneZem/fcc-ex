import React from "react";
import { BracketsNotation } from "./components/BracketsNotation";
/*cartella*/ /*percorso*/
import { VariableAccess } from "./components/VariableAccess";
import { UpdatingProps } from "./components/UpdatingProps";
import { NewProperties } from "./components/NewProperties";
import { DeleteProps } from "./components/DeleteProps";
import { TestingProps } from "./components/TestingProps";
import { ManipulateComplexObjects } from "./components/ManipulateComplexObjects";
import { NestedObjects } from "./components/NestedObjects";
import { NestedArrays } from "./components/NestedArrays";
import { WhileLoops } from "./components/WhileLoops";
import { ForLoops } from "./components/ForLoops";
import { ForOddNumbers } from "./components/ForOddNumbers";
import { CountBackwards } from "./components/CountBackwards";
import { IterateTrough } from "./components/IterateTrough";
import { NestForLoops } from "./components/NestForLoops";

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

const myObj = {
  top: "hat",
  bottom: "pants",
};

const myMusic = {
  artist: "Muse",
  title: "Origin of Symmetry",
  year: 2002,
  best_tracks: ["Bliss", "Plug in Baby", "Microcuts"],
};

const ourStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const myArray = [];
var i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

const forArray = [];
for (var i = 1; i <= 5; i++) {
  forArray.push(i);
}

const oddArray = [];
for (var i = 1; i < 10; i += 2) {
  oddArray.push(i);
}

const myCount = [];
for (var i = 9; i >= 1; i -= 2) {
  myCount.push(i);
}

const troughArray = [2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < troughArray.length; i++) {
  total += troughArray[i];
}

const multipleArray = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];
var product = 1;
for (var x = 0; x < multipleArray.length; x++) {
  for (var y = 0; y < multipleArray[x].length; y++) {
    product *= multipleArray[x][y];
  }
}

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
        <DeleteProps test={delete heyDog.bark} />
      </p>
      <p>
        <TestingProps myObj={myObj.hasOwnProperty("top")} />
      </p>
      <p>
        <ManipulateComplexObjects
          myMusic={myMusic[("artist", "title", "year", "best_tracks")]}
        />
      </p>

      <p>
        <NestedObjects ourStorage={ourStorage.car.inside["glove box"]} />
      </p>
      <p>
        <NestedArrays myPlants={myPlants[1].list[1]} />
      </p>
      <p>
        <WhileLoops myArray={myArray} />
      </p>
      <p>
        <ForLoops forArray={forArray} />
      </p>
      <p>
        <ForOddNumbers oddArray={oddArray} />
      </p>
      <p>
        <CountBackwards myCount={myCount} />
      </p>
      <p>
        <IterateTrough troughArray={total} />
      </p>
      <p>
        <NestForLoops product={product} />
      </p>
    </div>
  );
}

export default App;
