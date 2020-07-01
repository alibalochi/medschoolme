const INITIAL_STATE = {
    correctAnswers : null
}

const correctAnswersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CORRECT_ANSWERS_NUMBERS':
            return {
                ...state,
                correctAnswers: action.payload
            } 
        default:
            return state;
    }
}

export default correctAnswersReducer;