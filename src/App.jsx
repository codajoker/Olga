import React, { useState, useEffect, useRef } from "react";
import { Section, ContactsList, ContactForm, Filter } from "./components/index";
import { nanoid } from "nanoid";

const LOCAL_KEY = "contacts";

export function App() {
  const isMounted = useRef(false);
  const generateId = nanoid();

  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? [];
  });

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
    }

    isMounted.current = true;
  }, [contacts]);

  const addContact = (name, number) => {
    const checkContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts((prevState) => [
      { name, id: generateId, number },
      ...prevState,
    ]);
  };

  const filterContacts = (e) => setFilter(e.target.value);

  const deleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const findedContactByFilter = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section title={"Phonebook"}>
        <ContactForm onSabmit={addContact}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter onChange={filterContacts} filerValue={filter}>
          Find contacts by name
        </Filter>
        <ContactsList
          contacts={findedContactByFilter}
          onDeleteContact={deleteContact}
        ></ContactsList>
      </Section>
    </>
  );
}
