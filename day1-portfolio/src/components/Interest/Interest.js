import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPizzaSlice, faCode, faBookReader } from '@fortawesome/free-solid-svg-icons'
import './Interest.css';

const cardData = [
    {
        name: "Travelling",
        icon: faGlobe,
        text: "Travelling is something that I am fond of since I was a child. I believe that travelling allows an individual to expand it's horizon. Travelling allows me to explore different cultures, meet new people, visit new places and above all this, it helps me to become a better human being."
    },
    {
        name: "Cooking",
        icon: faPizzaSlice,
        text: "Some random text about cooking and why I like cooking"
    },
    {
        name: "Coding",
        icon: faCode,
        text: "Obviously, I love it. That's why I opted for this profession😉. I was introduced to programming in the early days of my college. Since then I've been switching and hopping between different frameworks and languages be it Android, C#, Java and what not; but now It's all around Javascript."
    },
    {
        name: "Reading",
        icon: faBookReader,
        text: "Some random text about reading and why I like reading"
    }
]

function Card(props) {
    const data = props.data;
    return (
        <div className="card-wrap">
            <div className="card-icon">
                <FontAwesomeIcon icon={data.icon}/>
            </div>
            <div className="card-contenet">
                <h3>{data.name}</h3>
                <p>{data.text}</p>
            </div>
        </div>
    )
}

function Interest() {
    const cards = cardData.map(data => {
        return <Card data={data}/>
    })
    return (
        <section className="Interest">
            <div className="jumbotron interest-container" style={{ background: `url(${process.env.PUBLIC_URL}/interest-banner-img.jpg` }}>
                <div className='interest-header-title'>
                    <h2>MY
                        <strong> INTEREST</strong>
                    </h2>
                </div>
                <div className="interest-header-text">
                    <p>A hobby is, of course, an abomination, as are all consuming interests and passions that do not lead directly to large, personal gain.</p>
                </div>
                <div className="card-wrap-box">
                    { cards }
                </div>
            </div>
        </section>
    )
}

export default Interest;