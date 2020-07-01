import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import { setCurrentTopic } from '../../redux/topic/topic.actions'
import './topics-item.styles.scss';


class TopicsItem extends Component {

    render(){
        const {title, imageUrl, setCurrentTopic, history} = this.props;
        return(
            <div className='topics-item'>
            <div className='content'>
                <img src={`${imageUrl}`} alt='medical-topic' />
            </div>
            <CustomButton 
            onClick={() => {
                setCurrentTopic(title);
                history.push('/quiz');
                }} >{title.toUpperCase()}</CustomButton>
        </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    setCurrentTopic: topic => dispatch(setCurrentTopic(topic))
})

export default withRouter(connect(null, mapDispatchToProps)(TopicsItem));