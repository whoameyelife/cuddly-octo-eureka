import React, { useState, useEffect, memo } from 'react'
import { QuizTimerContainer } from './styles';

const QuizTimer = memo((props) => {
    const milliseconds = 60 * 1000;
    const circumference = 2*70 * Math.PI;
    const [timer, setTimer] = useState(milliseconds)

    useEffect(() => {
      if (timer < 0) {
        setTimer(milliseconds)
      }
      const interval = setInterval(() => {
        setTimer(timer - 1000)
      }, 1000)
      return () => {
        clearInterval(interval);
      }
    },[timer])

    const seconds = (timer / 1000).toFixed();
    
    return (
        <QuizTimerContainer>
          <div className="text-style">
            <p>{seconds}s</p>
          </div>
          <svg className="timer-style">
            <circle
              cx={70}
              cy={70}
              r={70}
              fill="none"
              stroke={'lavender'}
              strokeWidth={5}
            ></circle>
          </svg>
          <svg className="timer-style">
            <circle
              strokeDasharray={circumference}
              strokeDashoffset={ circumference - (timer / milliseconds) * circumference }
              r={70}
              cx={70}
              cy={70}
              fill="none"
              strokeLinecap="round"
              stroke={'#FF6282'}
              strokeWidth={7}
            ></circle>
          </svg>
        </QuizTimerContainer>
    )
})

export default QuizTimer;
