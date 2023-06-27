import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import styleForm from "./form.module.css"


export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameId = nanoid();
  const numberId = nanoid();

   const handleChange = (e) => {
    const { name, value } = e.currentTarget;
     switch (name) {
      case "name":
      setName(value)
      break;
       
      case "number":
      setNumber(value)
      break;
       
      default:
      break;
     }
     
  }

  const handleSubmit = (e) => {
     e.preventDefault()
        e.currentTarget.reset()
    onSubmit(name, number)
  }


   useEffect(() => {
    return () => {
      setName("")
      setNumber("")
    };
  }, [setName, setNumber]);


   return <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>
          Name:
          <input
            type="text"
            name="name"
            pattern="^^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            id={nameId}
            required
          />
        </label> 

        <label htmlFor={numberId}>
          Number:
          <input
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            id={numberId}
            required
          />
        </label>

        <button type='submit' className={styleForm.formBtn}>Add contact</button>
      </form>
    }



