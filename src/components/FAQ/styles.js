import styled from "styled-components"

export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: grey;
    & .faq-heading {
        width: 99.8%;
        background: antiquewhite;
        border: 1px solid brown;
        position: sticky;
        top:0;
        font-family: 'Rubik Glitch Pop', system-ui;
        color: cornflowerblue;
        font-size: medium;
    }
`;

export const FAQCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid brown;
    background: #ffe7b9;
    border-radius: 4px;
    padding-inline: 21px;
    padding-block: 8px;
    margin-block: 16px;
    width: 75%;
    & .faq-question {
        display: flex;
        width: 100%;
        background: #ffebeb;
        p {
            margin: 0;
            width: 100%;
        }
        & .arrow-icon {
            display: flex;
            align-items: center;
        }
    }
`;

export const FAQAnswerWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    background: #afeefa;
    width: 100%;
    & .faq-answer {
        width: 100%;
    }
`;