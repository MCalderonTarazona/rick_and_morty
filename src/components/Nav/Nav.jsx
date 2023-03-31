import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"
import style from "./Nav.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import banner from '../../img/banner.png'

export default function Nav({logout}) {
const {pathname} = useLocation(); 

if (pathname === "/") {
    return null;
}

   return (
    <div className={style.containerNav}>
      <Link to="/home"><img src={banner} alt='' /></Link>
      <div className={style.menuNavContainer}>
        <Link className={style.menuNav} to="/home">Home</Link>
        <Link className={style.menuNav} to="/favorites">Favorites</Link>
        <Link className={style.menuNav} to="/about">About</Link>       
      </div>
      <div className={style.logoutNav} onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></div>
    </div>  
   );
}