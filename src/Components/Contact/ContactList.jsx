const ContactList = ({contacts}) => {
  return (
    <div className="container">
        {contacts.map(contact => (
            <div className="contacts-preview" key={contact.id}>
                <div className="card" key={contact.id}>
                <div className="card-body">
                    <h3 className="card-title">{contact.info}</h3>                    
                    <hr style={{height: '2px'}} />
                    <p className="my-2 card-text">Name: {contact.name}</p>
                    <p className="my-2 card-text">Email: {contact.email}</p>
                    <p className="my-2 card-text">Phone: {contact.phone}</p>                                                          
                </div>
                </div>
            </div>
        ))};
    </div>
  )
}

export default ContactList;