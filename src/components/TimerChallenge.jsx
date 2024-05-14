import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import ResultModal from './ResultModal'

function TimerChallenge({title, targetTime}) {
    const [timeRemaining, setTimeRemaining]  = useState(targetTime * 1000)

    const dialog = useRef()
    const timer = useRef();

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open()
    }

    const handleStart = () => {
       timer.current = setInterval(() => {
           setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10)

        setTimerStarted(true)
    }

    const handleStop = () => {
        clearInterval(timer.current);
        dialog.current.open()
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000)
    }

  return (
      <>
       <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset}/>
      <section className='challenge'>
          <h2>{title}</h2>
          <p className='challenge-time'>
              {targetTime} second{targetTime > 1 ? 's': ''}
          </p>
          <p>
              <button onClick={timerIsActive ?  handleStop : handleStart}>
                  {timerIsActive ? 'Stop' : 'Start'} Challenge
              </button>
          </p>
          <p className={timerIsActive ? 'active' : ''}>
              {timerIsActive ? 'Timer is Running' : 'Timer Inactive'}
          </p>
      </section></>
  )
}

export default TimerChallenge