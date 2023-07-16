import React, { createContext, useState } from "react";

interface SearchContextType {
  movieTitle: string | undefined;
  setSearchedTerm: (title: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  movieTitle: "",
  setSearchedTerm: () => {},
});

export const SearchContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const handleSearchTerm = (title: string) => {
    if (title) {
      setSearchTerm(title);
    }
  };

  const contextValue: SearchContextType = {
    movieTitle: searchTerm,
    setSearchedTerm: handleSearchTerm,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
