import React from 'react';

import './info-section.styles.scss';

const InfoSection = ({ correctAnswers, wrongAnswers, currentQuestionIndex, totalQuestions }) => {
    return (
        <div className="info-section">
            <div className="timer-stats">
                <div className="timer"> 00:00</div>
                <div className="answers-count">
                    <h5>Correct Answers</h5>
                    <h3>{correctAnswers}</h3>
                </div>
                <div className="answers-count">
                    <h5>Wrong Answers</h5>
                    <h3>{wrongAnswers}</h3>
                </div>
            </div>
            <div className="question-info">
                <div className="question-number"> <h5>{currentQuestionIndex + 1}<span><br/>Out Of</span></h5></div>
                <div className="total-questions"> <h5>{totalQuestions}</h5></div>
            </div>

        </div>
    )
}

export default InfoSection;