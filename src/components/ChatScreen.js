import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg',
            message: 'How is it going'
        },
        {
            message: 'Good'
        },
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
            ))}

            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text"
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
