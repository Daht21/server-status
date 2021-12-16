import React, { useState, useEffect} from 'react';
import Players from "./Players"
import './App.css'

const url = "https://api.mcsrvstat.us/2/thickthighs.org"

// USE THIS FOR FACES
// https://crafatar.com/

function App() {
  const [numPlayers, setNumPlayers] = useState(0);
  const [status, setStatus] = useState(false);
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function getInfo () {
    const res = await fetch(url)
    const json = await res.json()
    setNumPlayers(json.players.online)
    setStatus(json.online)
    setUsers(json.players.uuid)
    setIsLoading(false);
  }

  useEffect(() => {
    getInfo();
    console.log(users)
  }, [])

  return !isLoading ? (
    <>
      <div class="card">
        <h2>{(status) ? "Server is operational" : "Server is offline"}</h2>
        <div class="icon">
          <img src="https://cdn.discordapp.com/attachments/813939912419704833/920888728103288942/pfp.png" id="favicon" /></div>
        <div class="header">
          <div class="image"> <img src="https://cdn.discordapp.com/attachments/813939912419704833/920888729005072415/8a79ae60c65c025c65d1e9a70fdacd95.jpg" alt="" /> </div>
          <h2>ThickThighs.org</h2>
        </div>
        <h1>{(numPlayers < 1) ? "No Players Online" : "Player Count: " + numPlayers}</h1>
      </div>
      {(numPlayers > 0) ? <Players players={users} /> : <h2>No Players Online</h2>}
      
    </>
  ) : (
  <div class="card">
    <h2>"LOADING..."</h2>
  </div>);
}

export default App;
