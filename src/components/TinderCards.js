import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Bill Gates',
            url: 'https://media.wired.com/photos/5e6c06e613205e0008da2461/1:1/w_1600,h_1600,c_limit/Biz-billgates-950211062.jpg'
        },
        {
            name: 'Russell Wilson',
            url: 'https://www.biography.com/.image/t_share/MTQxMDMwOTgyNzk4MDI1OTEx/russell-wilson-gettyimages-576525424_1600jpg.jpg'
        }
    ]);


    return (
        <div>
            <h1>TinderCards</h1>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
