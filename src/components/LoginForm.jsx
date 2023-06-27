import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login } from "../redux/auth/authOperation";
import s from './LoginForm.module.css';

export const LoginForm = ({ a }) => {
   const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };
  
    return <form className={s.LoginForm_form} onSubmit={handleSubmit}>
               <h2 className={s.LoginForm_title}> Log into  </h2>

          <label htmlFor={a}>
          Email:
          <input
            type="email"
          name="email"

            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"        
            required
          />
    </label> 
    

    <label htmlFor={a}>
          Password:
          <input
            type="password"
          name="password"

            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"        
            required
          />
        </label> 

        
    

        <button type='submit' className={s.LoginForm_btn}>Sing up</button>

          <p className={s.LoginForm_optionText}> Not a member?
        <Link to={`/register`} className={s.LoginForm_link}>Sing up</Link>
            </p>  
      </form>
    }


