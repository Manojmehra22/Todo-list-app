import React from "react";
import "./Box.css";

const Box = () => {
  return (
    <div className="main-container">
      <div className="box">
        <p>Todo List</p>
        <input type="text" placeholder="Add your task" />
        <button>Add</button>
      </div>
    </div>
  );
};

export default Box;
