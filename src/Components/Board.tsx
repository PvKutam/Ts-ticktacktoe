import React,{ useState } from "react";
import { Block } from "./Block"

export const Board: React.FC =()=>{
    const [state,setState]=useState(Array(9).fill(null))
    const [currentPlayerTurn,setCurrentPlayerTurn] = useState("X")


    // checking for winner


const winnerCheck = (state:any[]) => {
    const winnerBlock = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
  
    for (let i = 0; i < winnerBlock.length; i++) {
      const [a, b, c] = winnerBlock[i];
  
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };
  
 

const blockListener = (index: number) => {
    const newState = Array.from(state); // Create a copy of the current state
    
    // Prevent updates if the cell is already filled or if the game has ended
    if (newState[index] !== null || winnerCheck(newState)) {
        return;
    }
    
    // Apply the move
    newState[index] = currentPlayerTurn;
    setState(newState); // Update the board state
    
    // Now pass newState to winnerCheck
    const win = winnerCheck(newState);  
    if (win) {
        setTimeout(() => alert(`${currentPlayerTurn} won`), 1); // Alert the win after the state update
    } else {
        // Switch turns if no win
        setCurrentPlayerTurn(currentPlayerTurn === "X" ? "O" : "X");
    }
};

    console.log(state);
    
    return(
        <div className=" flex flex-col items-center justify-center h-[100vh]">
            <div className="flex gap-2">
            <Block value={state[0]} onClick={()=>{blockListener(0)}}/>
            <Block  value={state[1]}onClick={()=>{blockListener(1)}}/>
            <Block value={state[2]} onClick={()=>{blockListener(2)}}/>
            </div>
            <div className="flex gap-2">
            <Block value={state[3]} onClick={()=>{blockListener(3)}}/>
            <Block value={state[4]} onClick={()=>{blockListener(4)}}/>
            <Block  value={state[5]}onClick={()=>{blockListener(5)}}/>
            </div>
            <div className="flex gap-2">
            <Block value={state[6]} onClick={()=>{blockListener(6)}}/>
            <Block value={state[7]} onClick={()=>{blockListener(7)}}/>
            <Block value={state[8]} onClick={()=>{blockListener(8)}}/>
            </div>

        </div>
    )

}