import style from "./SearchBar.module.css"
import { useState } from 'react';
import { useLocation } from "react-router-dom";

export default function SearchBar({onSearch}) {


let [id, idSet] = useState ("");

const handleChange = (event) => idSet(event.target.value)

const {pathname} = useLocation(); 

if (pathname === "/" || pathname === "/about" || pathname === "/favorites" ) {
   return null;
}

   return (
      <>
      <div className={style.containerSearch}>
            <input className={style.inputSearch} type='search' onChange={handleChange} value={id}/>
            <button onClick={()=>{onSearch(id);idSet("")}} >Agregar</button>
            <button onClick={()=>onSearch(Math.floor(Math.random()*826))}>Random</button>
      </div>
      </>
   );
}

