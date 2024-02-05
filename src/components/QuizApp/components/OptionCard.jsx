import React from 'react'
import { OptionsWrapper } from './styles';

function OptionCard({ option, optIndex }) {
    const optionIcon = optIndex === 0 ? 'optiona.svg' : optIndex === 1 ? 'optionb.svg' : optIndex === 2 ? 'optionc.svg' : 'optiond.svg';
    return (
        <OptionsWrapper>
            <div className="option-card">
                <img src={ optionIcon } alt={ optionIcon } />
                <div className="option-text">
                    {option}
                </div>
            </div>
            <img className="option-decorator" src="https://templates.seekviral.com/qzain/quiz/Quiz17/assets/images/svg3.png" />
        </OptionsWrapper>
    )
}

export default OptionCard
