import React, { Component } from 'react';

import  TopicsItem from '../topics-item/topics-item.component';

import './topics-directory.styles.scss';

class TopicsDirectory extends Component {

    constructor(){
        super();
        this.state = {
            sections: [{
                title: 'Anaesthetics',
                imageUrl: '/images/placeholder-1.png',
                id: 1
            },
            {
                title: 'Cardiology',
                imageUrl: '/images/placeholder-2.png',
                id: 2
            },
            {
                title: 'Dermatology',
                imageUrl: '/images/placeholder-3.png',
                id: 3
            },
            {
                title: 'Endocrinology',
                imageUrl: '/images/placeholder-4.png',
                id: 4
            },
            {
                title: 'Gastroenterology',
                imageUrl: '/images/placeholder-5.png',
                id: 5
            },
            {
                title: 'Haematology',
                imageUrl: '/images/placeholder-6.png',
                id: 6
            }]
        }
    }

    render() {
        return (
            <div className="topics-directory">
                {this.state.sections.map(({id, title, imageUrl}) => (
                    <TopicsItem key={id} title={title} imageUrl={process.env.PUBLIC_URL+imageUrl}/>
                ))}
            </div>
        )
    }
}

export default TopicsDirectory;