import { useState, useEffect } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const Contacts = () => {
  const apiKey = 'http://localhost:7000/contacts';
  const [contacts, setContacts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch (apiKey);
        if (!response.ok) throw Error('Could not fetch contacts from database');
        const data = await response.json();
        console.log(data);
        setContacts(data);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();

  }, [])
  

  return (
    <div className="container">
      <AddContact />
      <main>
        {loading && <p className="text-center text-success my-4 py-4">Loading Contacts ... </p>}
        {fetchError && <p className="text-center text-danger my-4 py-4">{`Ooops! ${fetchError}`}</p>}
        {!fetchError && !loading && <ContactList 
        contacts={contacts}
        />}
      </main> 
    </div>
  )
}

export default Contacts;