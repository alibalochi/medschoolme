const INITIAL_STATE = {
    percentage : null
}

const percentageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_PERCENTAGE':
            return {
                ...state,
                percentage: action.payload
            } 
        default:
            return state;
    }
}

export default percentageReducer;