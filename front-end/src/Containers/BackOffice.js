import React, {useState} from 'react';
import SearchAppBar from "./SearchAppBar";

const BackOffice = ({...props}) => {

    const userContacts = props.props.userContacts;

    console.log(userContacts);

    const [foundContact, setContact] = useState(null);
    const [typedName, setName] = useState(null);

    const searchContact = name => {

        setContact(null);
        setName(null);

        const searchResult = userContacts.filter(contact => contact.contactName === name)[0];


        if (searchResult) {
            return setContact(searchResult);
        } else {
            setName(name);
        }
    }

    return (<div className="main_nav">
        <SearchAppBar username={props.props.user.username} searchContact={name => searchContact(name)} logout={props.logout}/>

        <div>
            {foundContact ? <div><p>Here is your contact </p><p>{foundContact.contactName}</p><p>{foundContact.mobileNumber}</p></div> : typedName ? <p>{typedName} "not found"</p> : null}
        </div>
        {props.props.userContacts ? props.props.userContacts.map((contact, idx) => (
            <p key={idx}>
                <b>{contact.contactName}</b>
                <p>{contact.mobileNumber}</p>
            </p>
        )) : null}
    </div>)
};


export default BackOffice;