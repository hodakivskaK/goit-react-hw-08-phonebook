import s from './style/UserMenu.module.css'
import { logOut } from 'redux/auth/authOperation';
import authSelector from '../redux/auth/authSelector'
import { useSelector, useDispatch } from 'react-redux'

export const UserMenu = () => {
    const name = useSelector(authSelector.getUserName)
    const dispatch = useDispatch();


    return <div className={s.userMenu_box}>
  
            <p className={s.userMenu_userName}>Hi, {name}</p>
            <button className={s.userMenu_btn} onClick={() => dispatch(logOut())}>Log out</button>
        </div>
 
    
};


