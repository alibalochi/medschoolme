import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.component';
import { ReactComponent as PassPic } from '../../assets/pass.svg';
import { ReactComponent as FailPic } from '../../assets/fail.svg';

import './result-page.styles.scss';


const ResultPage = ({ totalQuestions, correctAnswers, wrongQuestions, history, currentTopic, percentage }) => {
    return (
        <div className="result-page">
            <div className="left-third">
                <div className="result-title">
                    <h1>{`Result for your ${currentTopic} quiz`}</h1>
                </div>
                <div className="result-container">
                    <p className="result-text"> You got
                    <span> {correctAnswers}</span> question out of
                    <span> {totalQuestions}</span> correct!
                </p>
                    <div className="result-text questions-container">
                    { wrongQuestions[0].wrongQuestion ? (
                        <span> The questions that you got the answers wrong to are
                        {wrongQuestions.map(question => {
                        return (<div key={question.id}>
                            <p className="result-text">Q: {question.wrongQuestion}<br /></p>
                            <p className="result-text">Ans: {question.wrongAnswer}</p>
                        </div>)

                    })}</span>
                    ): 'Congratulations! You have no wrong answers!'
                    }
                    
                    </div>
                </div>
                <div className="result-buttons">
                    <CustomButton
                        onClick={() => {
                            history.push('/topics');
                        }}
                    >Restart the Quiz</CustomButton>
                    <CustomButton
                        onClick={() => {
                            history.push('/topics');
                        }}
                    >Choose a Different Topic</CustomButton>
                </div>
            </div>
            <div className="right-two-third">
                {(percentage < 50 ) ? 
                <FailPic className="result-pic" /> :
                <PassPic className="result-pic" /> }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    totalQuestions: state.totalQuestions.totalQuestions,
    correctAnswers: state.correctAnswers.correctAnswers,
    wrongQuestions: state.wrongQuestions.wrongQuestions,
    currentTopic: state.topic.currentTopic,
    percentage: state.percentage.percentage

});

export default withRouter(connect(mapStateToProps)(ResultPage));