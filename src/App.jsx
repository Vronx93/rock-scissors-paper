import React from 'react'
import Header from './components/Header'
import BattleArea from './components/BattleArea'
import Rules from './components/Rules'
import Fight from './components/Fight'


function App() {

  const [userChoice, setUserChoice] = React.useState('')
  const [houseChoice, setHouseChoice] = React.useState('')
  const [score, setScore] = React.useState(0)
  const [isRulesActive, setIsRulesActive] = React.useState(false)
  const [isBattleAreaActive, setIsBattleAreaActive] = React.useState(true)
  const [isFightActive, setIsFightActive] = React.useState(false)
  const [resultText, setResultText] = React.useState('')
  const [winningIcon, setWinningIcon] = React.useState('')

  const fightIcons = ['paper', 'scissors', 'rock']

  function computerChoice() {
    const randomNum = Math.floor(Math.random() * (0, 3))
    setHouseChoice(fightIcons[randomNum])
  }

  function handleBattleElementClick(event, icon) {
    if(event.key === 'Enter' || event.type === 'click') {
        setUserChoice(icon)
        computerChoice()
        setIsBattleAreaActive(false)
        setIsFightActive(true)
    }
  }

  function checkResult(userChoice, houseChoice) {
    if(houseChoice === userChoice) {
      setResultText('DRAW')
    } else if(houseChoice === 'rock' && userChoice === 'scissors') {
      setTimeout(() => setScore(prevScore => prevScore - 1), 1500)
      setResultText('YOU LOSE')
      setWinningIcon(houseChoice)
    } else if(houseChoice === 'paper' && userChoice === 'rock') {
      setTimeout(() => setScore(prevScore => prevScore - 1), 1500)
      setResultText('YOU LOSE')
      setWinningIcon(houseChoice)
    } else if(houseChoice === 'scissors' && userChoice === 'paper') {
      setTimeout(() => setScore(prevScore => prevScore - 1), 1500)
      setResultText('YOU LOSE')
      setWinningIcon(houseChoice)
    } else {
      setTimeout(() => setScore(prevScore => prevScore + 1), 1500)
      setResultText('YOU WIN')
      setWinningIcon(userChoice)
    }
  }

  function playAgain() {
    setIsBattleAreaActive(true)
    setIsFightActive(false)
    setHouseChoice('')
    setUserChoice('')
    setWinningIcon('')
  }

  
  return (
    <div className='main-container'>
      <Header
      score = {score} />
      <BattleArea
      isBattleAreaActive = {isBattleAreaActive}
      fightIcons={fightIcons}
      userChoice = {userChoice}
      setUserChoice = {setUserChoice} 
      handleBattleElementClick = {handleBattleElementClick}
      />
      <Fight
      isFightActive = {isFightActive} 
      userChoice = {userChoice}
      houseChoice = {houseChoice}
      resultText = {resultText}
      playAgain = {playAgain}
      checkResult = {checkResult}
      winningIcon = {winningIcon}
      />
      <Rules 
      isRulesActive={isRulesActive}
      setIsRulesActive = {setIsRulesActive}
      />
    </div>
  )
}

export default App
