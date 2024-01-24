import React from "react";

export default function Rules({isRulesActive, setIsRulesActive}) {

    function handleRulesClick() {
        setIsRulesActive(!isRulesActive)
    }

    return (
        <div className="rules-wraper">
            {isRulesActive && (
                <div className="rules-desktop">
                    <div className="rules-container">
                        <h1>RULES</h1>
                        <img className="rules-img" src="src/assets/images/image-rules.svg" alt="Rules"/>
                    <div className="close-rules-btn" onClick={handleRulesClick}></div>
                </div> 
            </div>)}
            {!isRulesActive && (
                <button className="rules-btn" onClick={handleRulesClick}>RULES</button>)}
        </div>
         
    )
}