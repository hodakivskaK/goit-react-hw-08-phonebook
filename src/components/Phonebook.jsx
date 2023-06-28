import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'


import { setFilter } from 'redux/filter/filterSlice'
import { addContact} from 'redux/contacts/contactsOperation'
import { getContacts } from 'redux/contacts/contactsSelector'
import { getFilter } from 'redux/filter/filterSelector'


import { Section } from './Section'
import { Form } from './ContactForm'
import { Filter } from './Filter'
import { Contacts } from './Contacts'


export const Phonebook = () => {
  
  const contacts = useSelector(getContacts);
  const filterState = useSelector(getFilter);
  const dispatch = useDispatch();


  const filterId = nanoid()

  // Send new contacts
  const formSubmit = ( name, number ) => {
     const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (name.length === 0 || number.length === 0) {
      return alert(`Field is empty`);
    }

    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
       return alert(`${name} is already in contacts.`);
    }

    if (contacts.find(contact => contact.number === number)) {
       return alert(`Number: ${number} is already in contacts.`);
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

