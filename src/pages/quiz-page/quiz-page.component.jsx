import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './quiz-page.styles.scss';

import Question from '../../components/question/question.component';
import InfoSection from '../../components/info-section/info-section.component';
import questions from '../../../src/questions.json';
import { setTotalQuestionNumber } from '../../redux/total-questions/total-questions.actions';
import { setCorrectAnswersNumber } from '../../redux/correct-answers/correct-answers.actions';
import { setWrongQuestionsArray } from '../../redux/wrong-questions/wrong-questions.actions';
import { setPercentage } from '../../redux/percentage/percentage.actions';

class QuizPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions,
            currentQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            currentQuestionIndex: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            correct: false,
            wrongQuestionsArray: [],
            firstQuestion: true,
            lastQuestion: false,
            score: 0
        };
    }

    componentDidMount() {
        const { questions, currentQuestion, numberOfQuestions } = this.state;

        this.displayQuestions(questions, currentQuestion, numberOfQuestions);

    }

    displayQuestions = (questions = this.state.questions, currentQuestion, numberOfQuestions) => {
        let { currentQuestionIndex } = this.state;
        if (this.state.questions.length !== 0) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            const answer = currentQuestion.answer;
            numberOfQuestions = questions.length;
            this.setState({
                currentQuestion,
                answer,
                numberOfQuestions
            });
        }
    };

    handleOptionClick = (event) => {
        const { currentQuestionIndex, numberOfQuestions } = this.state;
        if (currentQuestionIndex !== (numberOfQuestions - 1)) {
            if (event.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                console.log(event.target.innerHTML.toLowerCase(), this.state.answer.toLowerCase());
                this.setState((prevState => ({
                    correctAnswers: prevState.correctAnswers + 1,
                    currentQuestionIndex: prevState.currentQuestionIndex + 1,
                    currentQuestion: questions[prevState.currentQuestionIndex + 1],
                    answer: questions[prevState.currentQuestionIndex + 1].answer
                })));
            } else if (event.target.innerHTML.toLowerCase() !== this.state.answer.toLowerCase()) {
                console.log(event.target.innerHTML.toLowerCase(), this.state.answer.toLowerCase());
                const { questions, currentQuestionIndex, wrongQuestionsArray } = this.state;
                wrongQuestionsArray.push({
                    "wrongQuestion": questions[currentQuestionIndex].question,
                    "wrongAnswer": questions[currentQuestionIndex].answer,
                    "id": questions[currentQuestionIndex].id
                });
                this.setState((prevState => ({
                    wrongAnswers: prevState.wrongAnswers + 1,
                    currentQuestionIndex: prevState.currentQuestionIndex + 1,
                    currentQuestion: questions[prevState.currentQuestionIndex + 1],
                    answer: questions[prevState.currentQuestionIndex + 1].answer
                })));
            }
        } else if (currentQuestionIndex === (numberOfQuestions - 1)) {
            if (event.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                console.log(event.target.innerHTML.toLowerCase(), this.state.answer.toLowerCase());
                this.setState((prevState => ({
                    correctAnswers: prevState.correctAnswers + 1,
                })), () => (this.submitQuiz()));
            } else if (event.target.innerHTML.toLowerCase() !== this.state.answer.toLowerCase()) {
                console.log(event.target.innerHTML.toLowerCase(), this.state.answer.toLowerCase());
                const { questions, currentQuestionIndex, wrongQuestionsArray } = this.state;
                wrongQuestionsArray.push({
                    "wrongQuestion": questions[currentQuestionIndex].question,
                    "wrongAnswer": questions[currentQuestionIndex].answer,
                    "id": questions[currentQuestionIndex].id
                });
                this.setState((prevState => ({
                    wrongAnswers: prevState.wrongAnswers + 1,
                })), () => (this.submitQuiz()));
            }
        }
    }

    submitQuiz = () => {
        const { setTotalQuestionNumber, setCorrectAnswersNumber, setWrongQuestionsArray, setPercentage } = this.props;
        const { questions, correctAnswers, wrongQuestionsArray } = this.state;
        const percentage = (correctAnswers/questions.length) * 100;
        setTotalQuestionNumber(questions.length);
        setCorrectAnswersNumber(correctAnswers);
        setWrongQuestionsArray(wrongQuestionsArray);
        setPercentage(percentage);

        this.props.history.push('/result');
    }

    render() {
        const { currentTopic } = this.props;
        const {correctAnswers, wrongAnswers, currentQuestionIndex, questions} = this.state;
        const { question, optionA, optionB, optionC, optionD, img } = this.state.currentQuestion;
        return (
            <div className="quiz-page-container">
                <div className="left-third">
                    <InfoSection 
                    correctAnswers={correctAnswers} 
                    wrongAnswers={wrongAnswers} 
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions = {questions.length}
                    />
                </div>
                <div className="right-two-third">
                    
                    <h1 className="quiz-topic">{currentTopic.toUpperCase()}</h1>
                    <Question
                        question={question}
                        optionA={optionA}
                        optionB={optionB}
                        optionC={optionC}
                        optionD={optionD}
                        img={img}
                        handleOptionClick={this.handleOptionClick}
                    />
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    currentTopic: state.topic.currentTopic
});

const mapDispatchToProps = dispatch => ({
    setTotalQuestionNumber: totalNumberOfQuestions =>
        dispatch(setTotalQuestionNumber(totalNumberOfQuestions)),
    setCorrectAnswersNumber: numberOfCorrectAnswers =>
        dispatch(setCorrectAnswersNumber(numberOfCorrectAnswers)),
    setWrongQuestionsArray: arrayOfWrongQuestions =>
        dispatch(setWrongQuestionsArray(arrayOfWrongQuestions)),
    setPercentage: percentage => 
        dispatch(setPercentage(percentage))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizPage));



