import s from './UserMenu.module.css'
import { logOut } from 'redux/auth/authOperation';
import authSelector from '../redux/auth/autnSelector'
import { useSelector, useDispatch } from 'react-redux'

export const UserMenu = () => {
    const name = useSelector(authSelector.getUserName)
    const dispatch = useDispatch();


    return   <div className={s.userMenu_box}>
            <p>{name}</p>
            <button className={s.userMenu_btn} onClick={() => dispatch(logOut())}>Log out</button>
        </div>
 
    
};


