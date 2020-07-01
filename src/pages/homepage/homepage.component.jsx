import React from 'react';
import { withRouter } from 'react-router-dom';
import './homepages.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';
import { ReactComponent as HomePic } from '../../assets/homepage.svg';

const HomePage = ({history}) => {
    return (
        <div className="homepage">
            <div className="left-two-third">
                <HomePic className="home-pic" />
            </div>
            <div className="right-third">
                <h2 className="home-title">Prepare for your exams</h2>
                <h4 className="home-para">We have tried to help you by preparing quizzes. Test yourself and get better. Learn and Improve!</h4>
                <CustomButton  onClick={() => {
                history.push('/topics');
                }} >Explore Topics</CustomButton>
            </div>
        </div>
    )
}


export default withRouter(HomePage);