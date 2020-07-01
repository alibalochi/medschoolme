import React from 'react';


import TopicsDirectory from '../../components/topics-directory/topics-directory.component';
import './topics.styles.scss';


const TopicsPage = () => {
    return (
        <div className="topics-page">
            <TopicsDirectory/>
        </div>
    )
}

export default TopicsPage;