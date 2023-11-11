
export default function GameBoard({onSelectSquareChange , board}) {

    return(
        <ol id = "game-board" >
         {board.map((row,rowNum) => (<li key={rowNum} >
            <ol>
                {row.map((col,colNum) => (<li key={colNum} >
                    <button onClick={()=>{onSelectSquareChange(rowNum,colNum)}} disabled = {col !==null}>{col}</button>
                    </li>)
                )}
            </ol>
         </li>))}
        </ol>
    );
};