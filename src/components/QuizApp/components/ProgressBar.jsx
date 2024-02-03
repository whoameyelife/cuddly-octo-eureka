import React from 'react'
import { ProgressBarArea } from './styles'

function ProgressBar({ num }) {
    console.log('NUM', num);
    return (
        <ProgressBarArea progress={num.progress}>
            <div className="progress-number">
                <p>{num.questionNo}</p>
                <img src="https://templates.seekviral.com/qzain/quiz/Quiz17/assets/images/svg2.png" alt="qustionno" />
            </div>
            {
                num.questionNo !== 5 && (
                    <div className="flow-line" />
                )
            }
        </ProgressBarArea>
    )
}

export default ProgressBar
