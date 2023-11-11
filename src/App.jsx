import { useState } from "react";
import GameBoard from "./Component/GameBoard";
import Player from "./Component/Player";
import Log from "./Component/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./Component/GameOver";
// import {WINNING_COMBINATIONS} from "./winning-combinations.js";

const gameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]; 

function App() {

  const [activeSymbol , setIsActive] = useState("X");
  const[ gameState , setGameState ] = useState([]);
  const[players , setPlayers] = useState({
    'X' : 'Player 1',
    'Y' : 'Player 2'
  });

  function savePlayerNameFunc(playerSym , playerN)
  {
    setPlayers(prev => {
      return{
        ...prev,
        [playerSym] : playerN
      };
    })
  }

  function onSelectSquareChange(row , col)
  {
    setIsActive( (sym) => (sym === 'X') ? 'O' : 'X' );

    setGameState((prevTurn)=>{
      let currentPlayer = 'X';
      if(prevTurn.length > 0 && prevTurn[0].player === 'X')
      {
        currentPlayer = 'O';
      }
      const updatedTurn = [{square : {rowI : row , colI : col} , player : currentPlayer},...prevTurn];
      return updatedTurn;
    });
  }

  let gameBoardOrig = [...gameBoard.map(arr => ([...arr]))];
  let winner;
  for(const t of gameState)
  {
      const {square , player} = t;
      const {rowI , colI} = square;
      gameBoardOrig[rowI][colI] = player;
  }

  for(const winning of WINNING_COMBINATIONS)
  {
    var firstSquare = gameBoardOrig[winning[0].row][winning[0].column]
    var secondSquare = gameBoardOrig[winning[1].row][winning[1].column];
    var thirdSquare = gameBoardOrig[winning[2].row][winning[2].column];

    if(firstSquare && firstSquare === secondSquare && secondSquare === thirdSquare)
    {
      winner = players[firstSquare];
    }
  }
  const hasDrawn = gameState.length === 9 && !winner

  function restartMatch()
  {
    setGameState([]);
    setIsActive('X');
  }

  return (
    <main>
      <div id = "game-container">
        <ol id = "players" className="highlight-player" >
          <Player playerName="Player 1" playerSymbol="X" currentPlayer = { activeSymbol === 'X' } changingName = {savePlayerNameFunc}/>
          <Player playerName="Player 2" playerSymbol="O" currentPlayer = { activeSymbol === 'O' } changingName = {savePlayerNameFunc}/>
        </ol>
        {(winner || hasDrawn) && <GameOver winner={winner} restart = {restartMatch} />}
        <GameBoard onSelectSquareChange = {onSelectSquareChange} board = {gameBoardOrig} />
      </div>
      <Log logging = {gameState} />
    </main>
  )
}

export default App
