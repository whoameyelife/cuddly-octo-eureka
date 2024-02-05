import React from 'react'
import { optionShuffle } from '../../../utils/utils';
import OptionCard from './OptionCard';
import QuizQuestion from './QuizQuestion';
import { QuestionAnswerArea } from './styles';

function QuestionAnswerContainer({ questionData, quesNo }) {
    const currQuestIndex = quesNo[quesNo.length - 1].questionNo - 1;
    const options = optionShuffle([ ...questionData[currQuestIndex].incorrect_answers, questionData[currQuestIndex].correct_answer]);

    console.log('LOGGGGG', questionData, quesNo);
    return (
        <QuestionAnswerArea>
            <div className="question-area">
                <QuizQuestion question={ questionData[currQuestIndex].question } />
            </div>
            <div className="answer-area">
                {
                    options.map((opt, i) => <OptionCard option={ opt } key={`${opt}-${i}`} optIndex={ i } />)
                }
            </div>
        </QuestionAnswerArea>
    )
}

export default QuestionAnswerContainer;
