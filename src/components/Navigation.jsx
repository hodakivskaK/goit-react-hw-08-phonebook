import { Link } from "react-router-dom";
import s from './style/Navigation.module.css'

export const Navigation = () => {
  
    
  return <>
    <ul className={s.navigation_list}>
      <li className={s.navigation_item}>
            <Link to={`/`} className={s.navigation_link}>Home</Link>
          </li>

        <li className={s.navigation_item}>
            <Link to={`/register`} className={s.navigation_link}>Sing up</Link>
          </li>
          
             <li className={s.navigation_item}>
            <Link to={`/login`} className={s.navigation_link}>Sing in</Link>
      </li>
      
     
        </ul>
    </>
  
}

