import { useSelector, useDispatch } from "react-redux";

import { addItems } from "./redux/reducers";
import { Section, ContactsList, ContactForm, Filter } from "./components/index";

export function App() {
  const contactsValue = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const addContact = (name, number) => {
    const checkContact = contactsValue.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addItems({ name, number }));
  };

  const findedContactByFilter = contactsValue.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSabmit={addContact}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter>Find contacts by name</Filter>
        <ContactsList contacts={findedContactByFilter}></ContactsList>
      </Section>
    </>
  );
}
