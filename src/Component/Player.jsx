import { useState } from "react";

const Player = ({playerName,playerSymbol,currentPlayer,changingName}) =>{

    const[isEditing , setIsEditing] = useState(false);
    const[updatedPlayerName , setUpdatedPlayerName] = useState(playerName);

    var editOrSave = isEditing ? "Save" : "Edit" ;

    function handleEditOrSaveClick()
    {
        setIsEditing((editing) => !editing);

        if(isEditing)
        {
            changingName(playerSymbol,updatedPlayerName);
        }
    }

    return( 
        <li className={currentPlayer ? "active" : undefined} >
            <span className="player" >
              { isEditing ? <input type="text" placeholder={playerName} onChange={(event) => {setUpdatedPlayerName(event.target.value)}}/> : <span className="player-name" >{updatedPlayerName}</span> }
              <span className="player-symbol" >{playerSymbol}</span>
            </span>
            <button onClick={handleEditOrSaveClick} >{editOrSave}</button>
        </li>   
    );
}

export default Player;