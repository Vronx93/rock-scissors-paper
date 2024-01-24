import React from "react";

export default function FightElement(props) {

    function handleInteraction(event) {
        if(props.handleBattleElementClick) {
            props.handleBattleElementClick(event, props.icon)
        }
    }

    return (
        <div 
            id={props.icon}
            tabIndex={0} 
            onClick={handleInteraction}
            onKeyDown={handleInteraction}
            className={
                `battle-icon ${props.icon} ${props.winningIcon === props.icon && 'pulse'} ${
                    props.icon === props.houseChoice ? 'house' : ''}`}>
            <div className="fight-el-bg">
                <img src={`src/assets/images/icon-${props.icon}.svg`} alt={`${props.icon} icon`} />
            </div>
        </div>
    )
}
