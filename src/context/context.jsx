import React, { createContext, useState, useEffect } from "react";

export const AnimeContext = createContext();

const AnimeProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favList, setFavList] = useState(() => {
    const savedFavorites = localStorage.getItem("anime"); 
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    const fetchAllAnime = async () => {
      try {
        const page1 = await fetch("https://api.jikan.moe/v4/top/anime?limit=25&page=1");
        const page2 = await fetch("https://api.jikan.moe/v4/top/anime?limit=25&page=2");

        const data1 = await page1.json();
        const data2 = await page2.json();

        setAnimeList([...data1.data, ...data2.data]);
      } catch (error) {
        console.error("Error fetching anime:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchAllAnime();
  }, []);



  return (
    <AnimeContext.Provider value={{ favList, animeList, loading, setFavList }}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeProvider;
