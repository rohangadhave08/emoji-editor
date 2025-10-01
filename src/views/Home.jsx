import React, { useState } from "react";
import "./Home.css";
import EmojiButton from "../components/EmojiButton";
import ColorButton from "../components/ColorButton";

function Home() {
  const [emoji, setEmoji] = useState("😀");
  const [size, setSize] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [bgColor, setBgColor] = useState("#ffffff");

  const emojis = ["😀", "🚀", "🌞", "🌈", "🌍", "🌸", "✨", "👏"];
  const colors = ["#ffffff", "#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];

  return (
    <div className="home">
      <h1>
        Playing with emojis using <span style={{ color: "blue" }}>useState</span>
      </h1>
      <p>This is a simple React app that demonstrates how to use the useState hook.</p>

      <div className="main-box">
        <div className="emoji-picker">
          {emojis.map((e, i) => (
            <EmojiButton key={i} emoji={e} onClick={() => setEmoji(e)} />
          ))}
        </div>

        <div
          className="emoji-box"
          style={{
            backgroundColor: bgColor,
            transform: `rotate(${rotate}deg)`,
            fontSize: `${size}px`,
          }}
        >
          {emoji}
        </div>

        <div className="color-picker">
          {colors.map((c, i) => (
            <ColorButton key={i} color={c} onClick={() => setBgColor(c)} />
          ))}
        </div>
      </div>

      <div className="controls">
        <input
          type="range"
          min="50"
          max="200"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <button onClick={() => setRotate(rotate + 30)}>🔄 Rotate</button>
      </div>
    </div>
  );
}

export default Home;
