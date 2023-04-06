import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from '../Actions/types'

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
           return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.myFavorites, action.payload],
           }
        case REMOVE_FAV:
            const newList = state.myFavorites.filter((elemento) => elemento.id !== action.payload);
            return {
                ...state,
                myFavorites: newList
           }
        case FILTER:
            const newGender = state.allCharacters.filter((element) => element.gender === action.payload);
            return {
                ...state,
                myFavorites: newGender
         }
         case ORDER:
            const newOrder = action.payload === "A" ? state.allCharacters.sort((a, b) => a.id - b.id) : state.allCharacters.sort((a, b) =>  b.id - a.id)
            return {
                ...state,
                myFavorites: newOrder
         } 
         
                
        default:
           return {...state}
    }

};

export default rootReducer;