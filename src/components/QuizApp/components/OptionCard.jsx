import React from 'react'

function OptionCard({ option, optIndex }) {
    const optionIcon = optIndex === 0 ? 'optiona.svg' : optIndex === 1 ? 'optionb.svg' : optIndex === 2 ? 'optionc.svg' : 'optiond.svg';
    return (
        <div className="option-card">
            <img src={ optionIcon } alt={ optionIcon } />
            <div className="option-text">
                {option}
            </div>
        </div>
    )
}

export default OptionCard
