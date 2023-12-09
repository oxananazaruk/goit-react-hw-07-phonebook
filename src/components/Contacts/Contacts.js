import { useSelector } from 'react-redux';
import { List, ListItem } from './Contacts.styled';
import { ContactCard } from '../ContactCard/ContactCard';
import { selectVisibleContacts } from '../../redux/selectors';

export const Contacts = () => {
  const items = useSelector(selectVisibleContacts);

  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <ContactCard contact={item} />
        </ListItem>
      ))}
    </List>
  );
};
