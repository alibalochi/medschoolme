const INITIAL_STATE = {
    currentTopic : ''
}

const topicReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_TOPIC' :
            return {
                ...state,
                currentTopic: action.payload
            }

        default:
            return state;
    }
}

export default topicReducer;