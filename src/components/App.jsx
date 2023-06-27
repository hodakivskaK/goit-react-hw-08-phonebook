import { Route, Routes,  } from "react-router-dom";

import { UserMenu } from './UserMenu'
import { RegistrationForm } from './RegistrationForm';
import {Phonebook} from './Phonebook'
import{LoginForm} from './LoginForm'
import { Navigation } from "./Navigation";
import authSelectors from '../redux/auth/autnSelector'
import { useSelector } from "react-redux";
import { Home } from "./Home";

export const App = () => {
  const clear = () => {
    console.log(localStorage)
  localStorage.clear();
    console.log(localStorage)
  }

  clear()
  const getLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    
  return <>
    <header >
      {getLoggedIn ?<UserMenu /> : <Navigation/>}
          
          
    </header>
     <Routes>
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm/>} />
          <Route path="contact" element={<Phonebook/>} />
          <Route path="*" element={<Home />} />
    </Routes>
  
    </>
  
}
