import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';
import { Section, ContactsList, ContactForm, Filter } from 'components/index';
import { useEffect } from 'react';

export function ContactsView() {
  const contactsValue = useSelector(contactsSelectors.getContacts);
  const filterValue = useSelector(contactsSelectors.filter);
  const isLoading = useSelector(contactsSelectors.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const addContact = (name, number) => {
    const checkContact = contactsValue.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
  };

  const findedContactByFilter = contactsValue.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSabmit={addContact}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter>Find contacts by name</Filter>
        {isLoading && <h1>Loading...</h1>}
        <ContactsList contacts={findedContactByFilter}></ContactsList>
      </Section>
    </>
  );
}
