//import {connect} from "react-redux"
import Card from "../Card/Card";
import style from "./Favorites.module.css"
import {filter, order} from "../../redux/Actions/actions"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Favorites(props) {

   const [aux,setAux] = useState(false);

   const dispatch = useDispatch();

   const myFavorites = useSelector(state => state.myFavorites);

   const handleOrder = (e) => {
      dispatch(order(e.target.value));
      setAux(!aux);
   };

   const handleFilter = (e) => {
      dispatch(filter(e.target.value));
   };


   return (
   <>
   <select onChange={handleOrder}>
      <option value="A">Ascendente</option>
      <option value="D">Descendente</option>
   </select>
   <select onChange={handleFilter}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">unknown</option>
   </select>
   
    <div className = {style.containerFav}>
       
        {  
          myFavorites.map((elemento) => {
           return <Card
            id={elemento.id}
            name={elemento.name}
            status={elemento.status}
            species={elemento.species}
            gender={elemento.gender}
            origin={elemento.origin}
            image={elemento.image}
            />
        })}
       
    </div>
   </>  
   );
}


/*export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, null)(Favorites);*/