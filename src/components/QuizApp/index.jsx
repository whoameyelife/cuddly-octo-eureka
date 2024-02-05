import axios from 'axios';
import React, { useState, useEffect } from 'react'
import QuizTimer from './components/QuizTimer';
import { QuizGlobalContainer } from './styles';
import QuestionMover from './components/QuestionMover';
import ProgressBar from './components/ProgressBar';
import QuestionAnswerContainer from './components/QuestionAnswerContainer';
import { questions } from './components/questions';

function QuizApp() {
    const [quizData, setQuizData] = useState(questions);
    const [currQuest, setCurrQuest] = useState(1);
    const [questInd, setQuestInd] = useState([
        {
            questionNo: 1,
            progress: true
        },
        {
            questionNo: 2,
            progress: false
        },
        {
            questionNo: 3,
            progress: false
        },
        {
            questionNo: 4,
            progress: false
        },
        {
            questionNo: 5,
            progress: false
        }
    ]);

    // useEffect(() => {
    //     console.log('INSIDE');
    //     handleQuizData();
    // },[])

    // const handleQuizData = () => {
    //     axios.get('https://opentdb.com/api.php?amount=5&category=27&type=multiple')
    //     .then((resp) => {
    //         setQuizData(resp.data)
    //     })
    //     .catch(function (error) {
    //         if (error.response && (error.response.status === 500 || error.response.status === 429)) {
    //             setQuizData([]);
    //         }
    //     })
    // }

    const handleQuestionClick = (data, quest) => {
        console.log('HANDLE', data, quest);
        let newArr = [...questInd];
        if (data === 'next' && currQuest <=5) {
            newArr[quest].progress = true;
            setQuestInd(newArr)
            setCurrQuest(currQuest+1);
        }
        if (data === 'last' && currQuest >=1) {
            newArr[quest-1].progress = false;
            setQuestInd(newArr)
            setCurrQuest(currQuest-1)
        }
    }

    console.log('DATA', quizData);
    return (
        <QuizGlobalContainer currQuest={ currQuest }>
            <div className="container-1">
                <div className='quiz-timer-comp'>
                    <QuizTimer seconds={ 60 } />
                </div>
                <div className='question-mover-container'>
                    {
                        currQuest !== 1 && (
                            <QuestionMover type={'last'} currQuest={ currQuest } handleQuestionClick={ handleQuestionClick } />
                        )
                    }
                    {
                        currQuest !== 5 && (
                            <QuestionMover type={'next'} currQuest={ currQuest } handleQuestionClick={ handleQuestionClick } />
                        )
                    }
                </div>
                <img src="https://templates.seekviral.com/qzain/quiz/Quiz17/assets/images/svg1.png" alt="arrow" />
            </div>
            <div className="container-2">
                <div className="progress-bar-comp">
                    {
                        questInd.map((numb, i) => <ProgressBar num={numb} />)
                    }
                </div>
                <div className="question-answer-comp">
                    <QuestionAnswerContainer
                        questionData={ quizData.results }
                        quesNo={ questInd.filter((item) => item.progress === true) }
                    />
                </div>
            </div>
        </QuizGlobalContainer>
    )
}

export default QuizApp;
