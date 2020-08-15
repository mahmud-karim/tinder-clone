import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="Hey! how are you?"
                timestamp="35 minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg"
            />
            <Chat
                name="Sarah"
                message="Hey! how are you?"
                timestamp="35 minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg"
            />
            <Chat
                name="Sarah"
                message="Hey! how are you?"
                timestamp="35 minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg"
            />
            <Chat
                name="Sarah"
                message="Hey! how are you?"
                timestamp="35 minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg"
            />
        </div>
    )
}

export default Chats
