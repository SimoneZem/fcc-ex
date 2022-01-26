import React from "react";

export const TestingProps = ({ myObj, checkProp }) => {
  /* once again: la lettera maiuscola serve per nominare i componenti */
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else if (myObj.hasOwnProperty(checkProp) !== true) {
    return "Found";
  } else {
    return "Change Me!";
  }
};
