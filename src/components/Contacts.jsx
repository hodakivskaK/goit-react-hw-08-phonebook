import PropTypes from 'prop-types';
import styleCon from "./contacts.module.css"
import { useDispatch } from "react-redux";

import {  deleteContact } from "redux/contacts/contactsOperation";

export const Contacts = ({ contacts }) => {
  const dispatch = useDispatch();


    const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  }
 
    return <ul className={styleCon.contactList}> {contacts.map(({ name, phone, id}) =>
          (<li key={id} className={styleCon.contactItem}>
        <p>{name} : {phone}</p>
        
        <button type="button" onClick={() => onDeleteContact(id)}> Delete</button>
          </li>
          ))}
          
        </ul> 
}


Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
};
