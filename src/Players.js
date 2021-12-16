import Player from "./Player"

const playerList = (players) => {
    console.log(players)
    const playerList = [];
    Object.keys(players).forEach(key => {
        playerList.push(<Player name={key} uuid={players[key]} />)
    })
    
    return playerList;
}

const Players = ({ players }) => {
    return (
        <div>{playerList(players)}</div>
    )
}

export default Players