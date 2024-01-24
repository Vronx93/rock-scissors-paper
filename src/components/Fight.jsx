import React from "react";
import FightElement from "./FightElement";

export default function Fight(
    {userChoice, houseChoice, isFightActive, resultText, playAgain, checkResult, winningIcon}) {

    React.useEffect(() => {
        checkResult(userChoice, houseChoice)
    }, [isFightActive])
  
    return (
        <div>
            {isFightActive && (
            <div className="fight-container">
                <div className="fight-icons-container">
                    <div className="battle-icon-container">
                        <FightElement 
                        icon={userChoice}
                        winningIcon = {winningIcon}
                        />
                        <p>YOU PICKED</p>
                    </div>
                    <div id="house-pick" className="battle-icon-container">
                        <FightElement 
                        icon= {houseChoice}
                        winningIcon = {winningIcon}
                        houseChoice = {houseChoice}
                        />
                        <p>THE HOUSE PICKED</p>
                    </div>  
                </div>
                <div className="result-container">
                    <p className="result-text">{resultText}</p>
                    <button className="play-again-btn" onClick={playAgain}>PLAY AGAIN</button>  
                </div>
            </div>
            )}
        </div>     
    )
}