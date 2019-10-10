import React from 'react';
import '../chat-app.css';




function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.img} />

            <div className="status">
                <p className="name">{props.name} {props.lastName}</p>
                <p></p>
                {props.online ? (
                <span className="status-online" />) : (<span className="status-offline" />)}
                <span className="status-text">{props.online ? 'Online' : 'Offline'}</span>
                <p>{props.birthday}</p>
                <p>{props.email}</p>

            </div>
            <div>


            </div>

        </div>
    );
}


export default Contact;