import React from 'react'

function FaqAnswerCard({ faqAnswer, answerKey }) {
    return (
        <div className="faq-answer" key={ answerKey }>
            <p>{ faqAnswer }</p>
        </div>
    )
}

export default FaqAnswerCard
