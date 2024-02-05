import React from 'react';
var decode = require('html-entities').decode;

function QuizQuestion({ question }) {
    var decodedQuestion = decode(question)
    return (
        <div className="question-style">{ decodedQuestion }</div>
    )
}

export default QuizQuestion;
