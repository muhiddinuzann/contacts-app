import { useState } from "react";

function ContactList({ contacts, setContacts }) {
  const [filterText, setFilterText] = useState("");

  const handleRemove = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  return (
    <div>
      <input
        placeholder="Filtrele"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span> {contact.phone_number}</span>
            <button
              className="removeButton"
              onClick={() => handleRemove(i)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
      <div className="totalCount">
        <span>Toplam Kişi Sayısı :</span>
        <span>{filtered.length}</span>
      </div>
    </div>
  );
}

export default ContactList;
