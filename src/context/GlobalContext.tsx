import React, {createContext, useState, useContext, FC} from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({children}: any) => {
  const [favorites, setFavorites] = useState<any>([]);

  const addFavorite = (recipe: any) => {
    setFavorites([...favorites, recipe]);
  };

  const removeFavorite = (id: any) => {
    setFavorites(favorites.filter((recipe: any) => recipe.id !== id));
  };

  return (
    <GlobalContext.Provider value={{favorites, addFavorite, removeFavorite}}>
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobal() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobal must be used within an GlobalContext');
  }

  return context;
}

export {GlobalContext, GlobalProvider, useGlobal};
