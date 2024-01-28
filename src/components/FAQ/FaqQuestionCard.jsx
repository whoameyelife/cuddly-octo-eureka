import React, { useState } from 'react'
import FaqAnswerCard from './FaqAnswerCard'
import { IoMdArrowDroprightCircle, IoMdArrowDropdownCircle } from "react-icons/io";
import { FAQAnswerWrapper, FAQCard } from './styles';

function FaqQuestionCard({ key, faqQuestion, faqAnswer }) {
    const [open, setOpen] = useState(false);

    const handleArrowCLick = () => {
        setOpen(!open);
    }
    return (
        <FAQCard>
            <div className="faq-question" key={ key }>
                <div className="arrow-icon" onClick={ handleArrowCLick }>
                    {
                        open ? <IoMdArrowDropdownCircle /> : <IoMdArrowDroprightCircle />
                    }
                </div>
                <p>{ faqQuestion }</p>
            </div>
            <FAQAnswerWrapper>
                {
                    open && (
                        <FaqAnswerCard
                            faqAnswer={ faqAnswer }
                            key={ key }
                        />
                    )
                }
            </FAQAnswerWrapper>
        </FAQCard>
    )
}

export default FaqQuestionCard
