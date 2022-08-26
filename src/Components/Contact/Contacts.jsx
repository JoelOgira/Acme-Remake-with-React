import { useState } from "react";
import ContactList from "./ContactList";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
        id: 1, 
        info: 'Contact Information',
        name: 'John Doe',
        email: 'john@email.com',
        phone: +255712345678
    },
    {
        id: 2,
        info: 'Contact Information',
        name: 'Jane Hoe',
        email: 'jane@email.com',
        phone: +255712345678
    },
    {
        id: 3,
        info: 'Contact Information',
        name: 'Henry Zoe',
        email: 'Henry@email.com',
        phone: +255712345678
    },
    {
        id: 4,
        info: 'Contact Information',
        name: 'Julie Moe',
        email: 'julie@email.com',
        phone: +255712345678
    }
])
  return (
    <div className="container">
       <ContactList 
        contacts={contacts}
       /> 
    </div>
  )
}

export default Contacts