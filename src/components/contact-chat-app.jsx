import React from 'react';
import '../chat-app.css';




function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.img} />
           
            <div className="status">
                <p className="name">{props.name}</p>
                <span className="status-online"></span>
                <span className="status-text">{props.online ? 'Online' : 'Offline'}</span>               
            </div>
         
        </div>
    );
}


export default Contact;