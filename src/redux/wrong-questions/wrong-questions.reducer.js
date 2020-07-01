import questions from '../../questions.json';

const INITIAL_STATE = {
    wrongQuestions : questions
}

const wrongQuestionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_WRONG_QUESTIONS_ARRAY':
            return {
                ...state,
                wrongQuestions: action.payload
            } 
        default:
            return state;
    }
}

export default wrongQuestionsReducer;