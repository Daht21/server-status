import React, { useState, useEffect} from 'react';
import './App.css'

const url = "https://api.minetools.eu/ping/thickthighs.org"

// USE THIS FOR FACES
// https://crafatar.com/

function App() {
  const [numPlayers, setNumPlayers] = useState(0);

  async function getPlayers () {
    const res = await fetch(url)
    const json = await res.json()
    setNumPlayers(json.players.online)
  }

  useEffect(() => {
    getPlayers();
  }, [])

  return (
    <div class="card">
      <div class="icon">
        <img src="https://cdn.discordapp.com/attachments/813939001249103902/920846684290957313/pfp.png" id="favicon" /></div>
      <div class="header">
        <div class="image"> <img src="https://cdn.discordapp.com/attachments/813939001249103902/920846684290957313/pfp.png" alt="" /> </div>
        <h2>ThickThighs.org</h2>
      </div>
      <h1>{(numPlayers < 1) ? "" : "Player Count: " + numPlayers}</h1>
    </div>
  );
}

export default App;
