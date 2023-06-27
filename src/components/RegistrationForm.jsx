import s from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { register } from "../redux/auth/authOperation";


export const RegistrationForm = ({ a }) => {
  const dispatch = useDispatch();


    const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  
  
  return <form onSubmit={handleSubmit}  className={s.registrationForm_form}>
     
        <h2 className={s.registrationForm_title}> Registration </h2>
        <label htmlFor={a}>
          Name:
          <input
            type="text"
        name="name"
            
            pattern="^^[A-Za-z\u0080-\uFFFF ']+$"
            required
          />
    </label> 
    
    <label htmlFor={a}>
          Email:
          <input
            type="email"
            name="email"
            

            required
          />
    </label> 
    

    <label htmlFor={a}>
          Password:
      <input
            type="password"
        name="password"
        required
        
          />
        </label> 


    <button type='submit' className={s.registrationForm_btn}>Sing up</button>


    <p className={s.registrationForm_optionText}> Already a member? 
        <Link to={`/login`} className={s.registrationForm_link}>Sing in</Link>
    </p>  
      </form>
    }


