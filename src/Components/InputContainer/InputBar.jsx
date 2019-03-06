import React, { Component } from "react";
import Input from "./input";
import PlusButton from "./PlusButton";
import SubmitButton from "./SubmitButton";
import "./InputBar.css";

let InputBar = props => {
  return (
    <div className="input-bar">
      <Input />
      <SubmitButton />
      <PlusButton />
    </div>
  );
};

export default InputBar;
