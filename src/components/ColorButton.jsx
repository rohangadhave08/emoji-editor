import React from "react";
import "./ColorButton.css";

function ColorButton({ color, onClick }) {
  return (
    <button
      className="color-btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></button>
  );
}

export default ColorButton;
