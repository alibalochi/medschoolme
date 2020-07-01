import React from 'react';

import './question.styles.scss';


const Question = ({ question, optionA, optionB, optionC, optionD, img, handleOptionClick }) => {
    return (
        <div className="quiz-container">
            <h5 className="quiz-question">{question}</h5>
            <div className="image-container">
                {img ? (<img
                    src={img}
                    className="question-image"
                    alt="question"
                />) :
                    null
                }
            </div>
            <div className="answers-container">
                <p onClick={handleOptionClick} className="option" name="optionA">{optionA}</p>
                <p onClick={handleOptionClick} className="option">{optionB}</p>
                <p onClick={handleOptionClick} className="option">{optionC}</p>
                <p onClick={handleOptionClick} className="option">{optionD}</p>
            </div>

        </div>
    )
}

export default Question;