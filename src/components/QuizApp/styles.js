import styled from "@emotion/styled";

export const QuizGlobalContainer = styled.div`
    display: flex;
    background: grey;
    width: 100%;
    height: 100vh;
    & .container-1 {
        display: flex;
        width: 50%;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 100%;
        background-color: rgb(164, 204, 210);
        position: relative;
        background-image: url(https://templates.seekviral.com/qzain/quiz/Quiz17/assets/images/guy-thinking.png);
        background-size: auto;
        background-repeat: no-repeat;
        background-position: 0 100px;
        & .quiz-timer-comp {
            display: flex;
            width: 50%;
            margin-top: 12%;
        }
        & .question-mover-container {
            margin: 0 0 8% 8%;
            cursor: pointer;
            display: flex;
            width: 80%;
            justify-content: ${(props) => props.currQuest === 1 ? 'flex-start' : 'space-around'};
        }
        & img {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: auto;
        }
    }
    & .container-2 {
        background-image: url(https://templates.seekviral.com/qzain/quiz/Quiz17/assets/images/bg.png);
        background-size: auto;
        overflow: hidden;
        display: flex;
        width: 50%;
        height: 100%;
        align-self: self-start;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-position: -126px 0;
        & .progress-bar-comp {
            display: flex;
            width: 100%;
            justify-content: space-around;
            margin-right: 7.5%;
        }
        & .question-answer-comp {
            
        }
    }
`;
