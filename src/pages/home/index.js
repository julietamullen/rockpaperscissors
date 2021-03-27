import React from 'react'
import {Link} from "react-router-dom"

function App() {
  return (
    <main className="main">
      <h1>Select:</h1>
    <Link to="../PvP"><button className="select">Player vs. Player</button></Link>
    <Link to="../PvC"><button className="select">Player vs. Computer </button></Link>
    </main>
  );
}

export default App;
