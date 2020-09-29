import React from 'react'
import './Message.css'

const Message = (props) => {
    //custom profile pic based on props.author
    let image = "https://api.adorable.io/avatars/70/" + props.author + ".png"
    
    // {props.author} - name
    // {props.timestamp} - date
    // {props.message} - message
    // note: {} indicates JS
    return(
        <div className="message">

            <div className="message-item">
                <img className="message-img" src={image} alt="profile picture"/>
            </div>

            <div className="message-item">
                <p><b>{props.author}</b> <span>{props.timestamp}</span></p>
                <p>{props.message}</p>
            </div>

        </div>
    )
}

// allow to use in app
export default Message;