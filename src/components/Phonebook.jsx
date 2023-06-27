import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { setFilter } from 'redux/filter/filterSlice'
import {fetchContacts, addContact} from 'redux/contacts/contactsOperation'
import { getContacts } from 'redux/contacts/contactsSelector'
import { getFilter } from 'redux/filter/filterSelector'


import { Section } from './Section'
import { Form } from './Form'
import { Filter } from './Filter'
import { Contacts } from './Contacts'


export const Phonebook = () => {
  
  const contacts = useSelector(getContacts);
  const filterState = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const filterId = nanoid()

  // Send new contacts
  const formSubmit = ( name, phone ) => {
     const contact = {
      id: nanoid(),
      name,
      phone,
    };

    if (name.length === 0 || phone.length === 0) {
      return alert(`Field is empty`);
    }

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
       return alert(`${name} is already in contacts.`);
    }

    if (contacts.find(contact => contact.phone === phone)) {
       return alert(`Number: ${phone} is already in contacts.`);
    }

    dispatch(addContact(contact))  
  }
  

    // Send new filter for search contact 
  const searchContact = (e) => {
    dispatch(setFilter(e.currentTarget.value))
  }

      // Condition visible 
  const getVisibleContacts = () => {
    const normalizedFilter = filterState.toLowerCase();

    return contacts.filter(contact =>
       contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
    
  return <>
    
      <Section title="Phonebooks">
        <Form onSubmit={formSubmit} />
      </Section>

      
      <Section title="Contacts" >
        {contacts.length > 1 && (
        <Filter filterId={filterId} value={filterState} onChange={searchContact} />
        
        )}
       
    
        {contacts.length > 0 ?
          <Contacts contacts={getVisibleContacts()} /> :
          <p>The phonebook is empty 😔</p>
        }
             
      </Section>
    </>
  
}

