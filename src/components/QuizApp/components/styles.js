import { styled } from "styled-components";

export const QuizTimerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: auto;
    width: 70px;
    height: 70px;
    & .text-style {
        color: lavender;
        font-size: 32px;
        font-family: 'Sen', sans-serif;
        position: absolute;
        top: -50px;
        right: 45px;
    }
    & .timer-style {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotateY(-180deg) rotateZ(-90deg);
        overflow: visible;
    }
`;

export const QuestionMoverContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.type === 'last' ? 'row-reverse' : 'row' };
    width: 15rem;
    height: 5rem;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.type === 'last' ? 'white' : '#FF6282' };
    & p {
        margin: 0;
        color: ${(props) => props.type === 'last' ? 'black' : 'white' };
        font-size: 18px;
        font-family: 'Sen', sans-serif;
    }
    & svg {
        color: ${(props) => props.type === 'last' ? 'black' : 'white' };
        width: 3em;
        height: 1.5em;
    }
`;

export const ProgressBarArea = styled.div`
    position: relative;
    width: 90px;
    height: 60px;
    background-color: ${ (props) => (props.progress) ? '#FF6282' : '#cdcdcd' };
    display: flex;
    &:before {
        width: 110px;
        height: 10px;
        display: inline-block;
        transition: 0.5s;
    }
    & .progress-number {
        & p {
            font-family: 'Oswald', sans-serif;
            font-size: 22px;
            margin: 0;
            padding-block: 13px;
            color: white;
            margin-left: 2.5rem 
        }
        & img {
            width: 100%;
            height: auto;
            position: absolute;
            left: 0;
            filter: ${ (props) => (props.progress) ? 'invert(54%) sepia(52%) saturate(1543%) hue-rotate(319deg) brightness(120%) contrast(87%)' : 'brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(0%) hue-rotate(228deg) brightness(97%) contrast(79%)' };
        }
    }
    & .flow-line {
        background: ${ (props) => (props.progress) ? '#FF6282' : '#cdcdcd' };
        width: 55px;
        height: 10px;
        position: absolute;
        left: 100%;
        top: 0;
    }
`;

export const QuestionAnswerArea = styled.div`
    display: flex;
    flex-direction: column;
    & .question-area {
        & .question-style {
            font-size: 40px;
            font-family: 'Sen', sans-serif;
            width: 93%;
            margin-top: 8%;
            margin-bottom: 4%;
        }
    }
    & .answer-area {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-left: 1rem;
    }
`;

export const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    & .option-card {
        background: #cdcdcd;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & img {
            margin-right: 3rem;
            width: 10%;
        }
        & .option-text {
            font-size: 36px;
            font-family: 'Sen', sans-serif;
        }
    }
    & .option-decorator {
        width: 100%;
        height: 16px;
        // filter: invert(54%) sepia(52%) saturate(1543%) hue-rotate(319deg) brightness(120%) contrast(87%);
        filter: brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(0%) hue-rotate(228deg) brightness(97%) contrast(79%);
    }
`;