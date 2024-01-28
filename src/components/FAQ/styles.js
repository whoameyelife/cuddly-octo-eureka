import styled from "styled-components"

export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #FF6868;
    & .faq-heading {
        width: 99.8%;
        background: #0C2D57;
        border: 1px solid white;
        position: sticky;
        top:0;
        font-family: 'Rubik Glitch Pop', system-ui;
        color: #EFECEC;
        font-size: medium;
    }
`;

export const FAQCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid brown;
    background: #FFEAA7;
    border-radius: 4px;
    padding-inline: 21px;
    padding-block: 8px;
    margin-block: 16px;
    width: 75%;
    & .faq-question {
        display: flex;
        width: 100%;
        background: #FFBB64;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 24px;
        p {
            margin: 0;
            width: 100%;
        }
        & .arrow-icon {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }
`;

export const FAQAnswerWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    background: #FFEAA7;
    width: 100%;
    & .faq-answer {
        width: 100%;
        font-family: 'PT Sans Narrow', sans-serif;
        font-size: 20px;
    }
`;