export default function GameOver({winner , restart}){
    return(
        <div id="game-over" >
            <h2>Game Over!!</h2>
            {winner && <p>{winner} Won!!</p>}
            {!winner && <p>Its a Draw. <br></br> Try Again!!!</p>}
            <p><button onClick={restart} >Rematch!!</button></p>
        </div>
    );
}