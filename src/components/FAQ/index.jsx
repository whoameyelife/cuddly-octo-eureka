import React from 'react'
import { faqData } from '../../data/FAQ'
import FaqQuestionCard from './FaqQuestionCard'
import { FAQContainer } from './styles'

function FAQ() {
    return (
        <FAQContainer>
            <div className="faq-heading">
                <h1>
                    Your FAQs!
                </h1>
            </div>
            {
                faqData.map((faq) =>
                <FaqQuestionCard
                    faqQuestion={ faq.question }
                    faqAnswer={ faq.answer }
                    key={`${faq.question} - ${faq.answer}`}
                />
                )
            }
        </FAQContainer>
    )
}

export default FAQ
