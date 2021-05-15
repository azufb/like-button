import React from "react";
import "./App.css";
import LikeButton from "./component/LikeButton"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>いいねボタンを実装してみたよ！</h3>
        <LikeButton />
      </header>
    </div>
  );
}

export default App;
