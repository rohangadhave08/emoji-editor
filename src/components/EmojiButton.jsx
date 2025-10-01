import React from "react";
import "./EmojiButton.css";

function EmojiButton({ emoji, onClick }) {
  return <button className="emoji-btn" onClick={onClick}>{emoji}</button>;
}

export default EmojiButton;
