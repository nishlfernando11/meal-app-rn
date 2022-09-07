import { createContext, useState } from 'react';

export const FavContext = createContext({
    ids: [],
    addFav :(id) => {},
    removeFav :(id) => {},
});

const FavContextProvider = ({children}) => {
    const [favMealIds, setFavMealIds] = useState([]);

    const addFav = (id) => {
        setFavMealIds(prev => [...prev, id])
    }

    const removeFav = (id) => {
        setFavMealIds(prev => prev.filter(mealId => mealId !== id))
    }

    const favCtx = {
        ids: favMealIds,
        addFav,
        removeFav
    }
    return <FavContext.Provider value={favCtx}>
        {children}
    </FavContext.Provider>
}

export default FavContextProvider;