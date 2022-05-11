// используем redux-thunk

// import { useSelector, useDispatch } from 'react-redux';
// import { contactsOperations } from 'redux/contacts';
// import { contactsSelectors } from 'redux/contacts';
// import { Section, ContactsList, ContactForm, Filter } from 'components/index';
// import { useEffect } from 'react';
// import { Outlet } from 'react-router-dom';

// export function App() {
//   const contactsValue = useSelector(contactsSelectors.getContacts);
//   const filterValue = useSelector(contactsSelectors.filter);
//   const isLoading = useSelector(contactsSelectors.isLoading);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(contactsOperations.fetchContacts());
//   }, [dispatch]);

//   const addContact = (name, number) => {
//     const checkContact = contactsValue.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (checkContact) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     dispatch(contactsOperations.addContact({ name, number }));
//   };

//   const findedContactByFilter = contactsValue.filter(contact =>
//     contact.name.toLowerCase().includes(filterValue.toLowerCase())
//   );

//   return (
//     <>
//       <Outlet />
//       <Section title="Phonebook">
//         <ContactForm onSabmit={addContact}></ContactForm>
//       </Section>
//       <Section title="Contacts">
//         <Filter>Find contacts by name</Filter>
//         {isLoading && <h1>Loading...</h1>}
//         <ContactsList contacts={findedContactByFilter}></ContactsList>
//       </Section>
//     </>
//   );
// }

import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';

import { refresh } from 'redux/auth/auth-operations';
import { ContactsView } from 'views/ContactsView';
import PrivetRoute from 'components/privetRoute/PrivetRoute';
import PublicRoute from 'components/publicRoute/PublicRoute';
import { getIsFetching } from 'redux/auth/auth-selectors';

const Layout = lazy(() => import('./views/LayoutView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const HomeView = lazy(() => import('./views/HomeView'));

export function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isFetching && (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomeView />
                </PublicRoute>
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />

            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />

            <Route
              path="contacts"
              element={
                <PrivetRoute>
                  <ContactsView />
                </PrivetRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}
