import React from 'react';
import '../chat-app.css';




class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { online: props.online };
    }


    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.img} />

                <div className="status"  onClick={event => { this.state.online ? this.setState({ online: false }) : this.setState({ online: true }) }}>
                    <p className="name">{this.props.name} {this.props.lastName}</p>
                    <p></p>
                    <span className={this.state.online ? "status-online" : "status-offline"}></span>
                    <span className="datButton">{this.state.online ? "Online" : "OffLine"}</span>
                    <p>{this.props.birthday}</p>
                    <p>{this.props.email}</p>

                </div>
            </div>
        );
    }
}


export default Contact;