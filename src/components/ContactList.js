import React from 'react';
import Contact from './Contact';


const myTab = [

    { name: 'Kay', lastName: 'Sims', img: "https://randomuser.me/api/portraits/women/66.jpg", email: "Kay.Sims@example.com", birthday: "02/06/1998" },
    { name: 'Irma', lastName: 'Thompson', img: "https://randomuser.me/api/portraits/women/49.jpg", email: "Irma.Thompson@example.com", birthday: "11/02/1985" },
    { name: 'Lois', lastName: 'Watson', img: "https://randomuser.me/api/portraits/women/30.jpg", email: "Lois.Watson@example.com", birthday: "11/07/1945" },
    { name: 'Beverly', lastName: 'Price', img: "https://randomuser.me/api/portraits/women/26.jpg", email: "Beverly.Price@example.com", birthday: "23/04/1978" },
    { name: 'Milton', lastName: 'Davidson', img: "https://randomuser.me/api/portraits/men/85.jpg", email: "Milton.Davidson@example.com", birthday: "08/11/1984" },
];


const ContactList = () => (

    <div>
        {myTab.map(props => (
        <Contact name ={props.name} lastName = {props.lastName} img = {props.img} email= {props.email} birthday = {props.birthday}  />
        ))}

    </div>

)



export default ContactList;

