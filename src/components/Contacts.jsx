import PropTypes from 'prop-types';
import s from "./style/contacts.module.css"
import { useDispatch } from "react-redux";

import {  deleteContact } from "redux/contacts/contactsOperation";

export const Contacts = ({ contacts }) => {
  const dispatch = useDispatch();
  
    const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  }
 
    return <ul className={s.contactList}> {contacts.map(({ name, number, id}) =>
          (<li key={id} className={s.contactItem}>
      <p>{name} <br />
        {number}</p>
        
        <button type="button" onClick={() => onDeleteContact(id)} className={s.contact__btn}> Delete</button>
          </li>
          ))}
          
        </ul> 
}


Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
