import { Helmet } from 'react-helmet';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchContacts } from 'redux/contacts/contactsOperation'
import { Phonebook } from 'components/Phonebook';


export default function PhoneBookPage(){
      const dispatch = useDispatch();

      useEffect(() => {
    dispatch(fetchContacts())
      }, [dispatch])
    
      
    
    return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Phonebook />
  
   </>
  );
  
}
