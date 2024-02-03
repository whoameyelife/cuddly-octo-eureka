import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { QuestionMoverContainer } from './styles'

function QuestionMover({ type, currQuest, handleQuestionClick }) {
    console.log('MOVER', currQuest);

    return (
        <QuestionMoverContainer type={ type } onClick={ () => handleQuestionClick(type, currQuest) }>
            <p>{`${type === 'next' ? 'NEXT' : 'LAST'} QUESTION`}</p>
            {
                type === 'next' ? <FaArrowRight /> : <FaArrowLeft />
            }
        </QuestionMoverContainer>
    )
}

export default QuestionMover
