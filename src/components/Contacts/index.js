import { useState, useEffect } from "react";
import ContactList from "./List";
import ContactsForm from "./Form";
import "./styles.css";
function Contacts() {
  const initialContacts = JSON.parse(localStorage.getItem("contacts")) || [
    {
      fullname: "Ali",
      phone_number: "05444444444",
    },
    {
      fullname: "Veli",
      phone_number: "05333333333",
    },
    {
      fullname: "Ahmet",
      phone_number: "05555555555",
    },
  ];

  const [contacts, setContacts] = useState(initialContacts);

  // contacts state'i güncellendiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div id="container">
      <ContactList contacts={contacts} setContacts={setContacts} />
      <ContactsForm addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
