import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import TopicsPage from './pages/topics-page/topics.component';
import QuizPage from './pages/quiz-page/quiz-page.component'; 
import ResultPage from './pages/result-page/result-page.component';

import './App.css';
import 'tachyons';



function App() {
  return (
    <div>
      {/* <Header /> */}
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/topics' component={TopicsPage}/>
      <Route exact path='/quiz' component={QuizPage} />
      <Route exact path='/result' component={ResultPage} />
    </div>

  );
}

export default App;
