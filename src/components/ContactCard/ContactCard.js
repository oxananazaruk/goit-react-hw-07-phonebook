import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactCard = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <span>{name}: </span>
      <span>{phone} </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
