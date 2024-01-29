import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import FaqQuestionCard from './FaqQuestionCard'
import Spinner from './Spinner'
import { FAQContainer } from './styles'

function FAQ() {
    const [faqInput, setFaqInput] = useState('');
    const [faqs, setFaqs] = useState([]);
    const [progress, setProgress] = useState(false);

    const handleChange = (search) => setFaqInput(search)

    const handleSearch = () => {
        setProgress(true)
        axios.get(`https://python-people-also-ask-restapi.onrender.com/getPaa/${faqInput}`)
        .then((resp) => {
            setFaqs(resp.data)
            setProgress(false);
        }).catch(function (error) {
            if (error.response && error.response.status === 500) {
                setProgress(false);
            }
          })
    }
    console.log(faqs, 'FAQS')
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
                progress && (
                    <Spinner />
                )
            }
            {
                faqs && faqs.length !== 0 && faqs.map((faq, i) =>
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
