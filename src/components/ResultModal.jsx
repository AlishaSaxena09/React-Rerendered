import React from 'react'
import { useRef } from 'react'
import { forwardRef, useImperativeHandle } from 'react'

const ResultModal = forwardRef(function ResultModal({onReset, targetTime, timeRemaining}, ref) {
    const dialog = useRef() //this creates  direct refernce to the dialog element so if we change dialog then also this will not get change.
    const userLost = timeRemaining <=0;
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining /(targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal(); // now this give reference method for dialog directly. 
            }
        }
    })
  return (
    <dialog onClose={onReset} ref={dialog} className='result-modal'>
       {userLost &&  <h2>You Lost</h2>}
       {!userLost &&  <h2>Your Score: {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
  )
})

export default ResultModal