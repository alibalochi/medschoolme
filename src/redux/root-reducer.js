import { combineReducers } from 'redux';

import topicReducer from './topic/topic.reducer';
import totalQuestionsReducer from './total-questions/total-questions.reducer';
import correctAnswersReducer from './correct-answers/correct-answers.reducer'
import wrongQuestionsReducer from './wrong-questions/wrong-questions.reducer';
import percentageReducer from './percentage/percentage.reducer';


export default combineReducers({
    topic: topicReducer,
    totalQuestions: totalQuestionsReducer,
    correctAnswers: correctAnswersReducer,
    wrongQuestions: wrongQuestionsReducer,
    percentage: percentageReducer
});