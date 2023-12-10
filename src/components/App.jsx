import { GlobalStyle } from './GlobalStyle';
import  { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Title } from './App.styled';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError, selectContacts } from '../redux/selectors';
import { fetchContacts } from '../redux/operations'




export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Somesing went wrong! Please, try reload this page.</b>}
      {contacts.length>0 && <Contacts  />}
      <GlobalStyle />
      <Toaster />
    </div>
  );
};