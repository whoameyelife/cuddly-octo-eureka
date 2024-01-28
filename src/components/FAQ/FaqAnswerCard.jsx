import React from 'react'

function FaqAnswerCard({ faqAnswer, key }) {
    return (
        <div className="faq-answer" key={ key }>
            <p>{ faqAnswer }</p>
        </div>
    )
}

export default FaqAnswerCard
