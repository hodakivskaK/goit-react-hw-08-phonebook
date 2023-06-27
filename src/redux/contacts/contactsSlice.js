import {  createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOperation";

const handlePending = (state) => {
    state.isLoading = true;

}

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.entities = payload;
}


const contactSlice =  createSlice({
    name: 'contacts',
    initialState: {
        entities: [],
        isLoading: false,
        error: null,
    },
    
    extraReducers: builder => { 
        builder
        // FETCH
        .addCase(fetchContacts.fulfilled, (state, { payload: contacts }) => {
            state.entities = contacts;
            state.isLoading = false;
        })
            
 
        // ADD
      .addCase(addContact.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.isLoading = false;
      })


        // DELETE
      .addCase(deleteContact.fulfilled, (state, action) => {
        //   state.contacts.entities = state.contacts.items.filter(contact => contact.id !== contactId);
          const index = state.entities.findIndex(
        contact => contact.id === action.payload.id
          );
             state.entities.splice(index, 1);
          state.isLoading = false; 
          
      })
    
            
    // PENDING
    .addMatcher(isAnyOf(
            fetchContacts.pending,
            addContact.pending,
            deleteContact.pending,
    ), handlePending)
            
            
    // REJECTED 
    .addMatcher(isAnyOf(
            fetchContacts.rejected,
            addContact.rejected,
            deleteContact.rejected,
    ), handleRejected)
    } 
})


export const contactsReducer = contactSlice.reducer;


