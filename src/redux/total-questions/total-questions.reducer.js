const INITIAL_STATE = {
    totalQuestions : null
}

const totalQuestionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_TOTAL_QUESTION_NUMBER':
            return {
                ...state,
                totalQuestions: action.payload
            } 
        default:
            return state;
    }
}

export default totalQuestionsReducer;