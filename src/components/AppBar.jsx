import { UserMenu } from './UserMenu'
import { Navigation } from "./Navigation";
import authSelectors from '../redux/auth/authSelector'
import { useSelector } from "react-redux";

export const AppBar = () => {
    const getLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
  return <>
    <header >
      {getLoggedIn ?<UserMenu /> : <Navigation/>}
          
    </header>
    </>
  
}
