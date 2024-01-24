import React from "react"; 

export default function Header({score}) {
    return (
        <header>
            <h1 className="header-title">ROCK<br></br>PAPER<br></br>SCISSORS</h1>
            <div className="header-score-container">SCORE <span className="header-score">{score}</span></div>
        </header>
    )

}