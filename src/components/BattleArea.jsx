import React from "react";
import FightElement from "./FightElement";

export default function BattleArea({fightIcons, handleBattleElementClick, isBattleAreaActive}) {

    const battleElements= fightIcons.map((icon) =>
        <FightElement
        icon= {icon}
        key = {icon}
        handleBattleElementClick = {handleBattleElementClick}
        />)
    
    return (
        <div className="battle-area-container">
            {isBattleAreaActive && (
            <div className="battle-area">
                {battleElements}
            </div>)
            }
        </div>
    )
}