import { Link } from "react-router-dom";

import s from './Home.module.css'

export const Home = () => {
  
    
    return <div className={s.home_box}>
    <h1 className={s.home_title}>Hello your personal phone book</h1>

        <p className={s.home_text}>
            <Link className={s.home_link} to={`/register`}>  Register </Link>
            or <Link to={`/login`} className={s.home_link}>login </Link>
            to create your phonebook </p>
    </div>
  
}
