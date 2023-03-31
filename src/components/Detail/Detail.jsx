import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {

const {id} = useParams();
const [character, setCharacter] = useState({});
const [loading, setloading] = useState(true); 
const navigate = useNavigate();

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
          setloading(false);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    if (loading) {
        return <div>....Cargando</div>
    }

    return(
      <div className="modalDiv">
         <div className="modal">
            <div>
               <img src={character.image} alt='' />
            </div>
            <div>
               <h2>{character.name}</h2>
               <h2>{character.status}</h2>
               <h2>{character.species}</h2>
               <h2>{character.gender}</h2>
               <h2>{character.origin.name}</h2>
            </div>
            <div>
               <button onClick={() => navigate(-1)}>Close</button>
            </div> 
         </div>
      </div>
    );
}

export default Detail;