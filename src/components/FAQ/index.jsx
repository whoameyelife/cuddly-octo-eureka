import React from 'react'
import { useState } from 'react'
import { faqData } from '../../data/FAQ'
import FaqQuestionCard from './FaqQuestionCard'
import { FAQContainer } from './styles'

function FAQ() {
    const [faqInput, setFaqInput] = useState('');
    const [faqs, setFaqs] = useState([]);

    const handleChange = (search) => setFaqInput(search)

    const handleSearch = () => {
        fetch('https://python-people-also-ask-restapi.onrender.com/getPaa/'+ new URLSearchParams({
            a: faqInput
        })).then((resp) => resp.json()).then(data => setFaqs(data))
    }
    console.log(faqs)
    return (
        <FAQContainer>
            <div className="faq-heading">
                <h1>
                    Your FAQs!
                </h1>
            </div>
            <div className="faq-search">
                <input placeholder="Enter topic for the FAQ" value={ faqInput } onChange={ (e) => handleChange(e.target.value) } />
                <button className="search-button" onClick={ handleSearch }>
                    Search
                </button>
            </div>
            {
                faqs.length !==0 && faqs.map((faq, i) =>
                <FaqQuestionCard
                    faqQuestion={ faq.question }
                    faqAnswer={ faq.answer }
                    cardKey={`${i}-${faq.question}`}
                />
                )
            }
        </FAQContainer>
    )
}

export default FAQ
