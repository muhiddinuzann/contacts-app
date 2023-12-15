import React, { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function ContactsForm({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname.trim() === "" || form.phone_number.trim() === "") {
      return false;
    }
    addContact([...contacts, form]);
  };

  return (
    <div>
      <form className="inputContainer" onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Ad Soyad"
            value={form.fullname}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Telefon Numarası"
            value={form.phone_number}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <button className="addPerson">Kişi Ekle</button>
        </div>
      </form>
    </div>
  );
}

export default ContactsForm;
