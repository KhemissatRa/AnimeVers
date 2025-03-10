import React, { useState, useContext } from 'react';
import { AnimeContext } from '../context/context';
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';

export default function AnimeList() {
  const [currentPage,setCurrentPage]=useState(0)
  const animePerPage = 10
  const start = currentPage * animePerPage
  const end = start + animePerPage
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { animeList,loading } = useContext(AnimeContext);
  const currentAnime = animeList.slice(start,end)

  const filteredAnime = currentAnime.filter((anime) => {
    return (
      (search.trim() === "" || anime.title.toLowerCase().includes(search.toLowerCase())) &&
      (selectedCategory === "All" || anime.genres.some((genre) => genre.name === selectedCategory))
    );
  });
if(loading){
  return(
    <h1 className="text-center text-3xl text-white">Page is Loading ...</h1>
  )
}
  return (
    <div className='bg-white min-h-screen p-6'>
      <div className='w-full flex flex-col items-center space-y-6'>
        <h1 className='text-5xl italic font-bold'>
          Browse Top <span className='text-red-600'>Anime</span>
        </h1>

        <div className='relative w-[400px]'>
          <input
            className='w-full border-2 border-[#181e2b] h-[40px] rounded-full px-4 text-black focus:outline-none focus:ring-2 focus:ring-red-600'
            type='text'
            placeholder='Find your anime...'
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className='fa-solid fa-magnifying-glass absolute right-4 top-3 text-[#181e2b]'></i>
        </div>

        <select
          className='p-2 rounded-xl bg-red-600 text-white shadow-md focus:outline-none cursor-pointer'
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value='All'>All</option>
          <option value='Fantasy'>Fantasy</option>
          <option value='Action'>Action</option>
          <option value='Suspense'>Suspense</option>
          <option value='Sci-Fi'>Sci-Fi</option>
          <option value='Drama'>Drama</option>
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8'>
        {filteredAnime.length > 0 ? (
          filteredAnime.map((anime) => (
            <div
              key={anime.mal_id}
              className='border border-gray-600 bg-[#181e2b] rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105'
            >
              <Link to={`Anime/${anime.mal_id}`}>
              <img className='w-full h-60 object-cover rounded-t-lg' src={anime.images.jpg.image_url} alt={anime.title} />
              <h1 className='text-white text-sm p-2'>{anime.title}</h1>
              </Link>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500 col-span-full'>No anime found...</p>
        )}
    
         </div>
         <ReactPaginate
        previousLabel={" Previous"}
        nextLabel={"Next "}
        pageCount={Math.ceil(animeList.length / animePerPage)}
        onPageChange={(e) => setCurrentPage(e.selected)}
        containerClassName={"border border-2 flex justify-center items-center space-x-4 border-red-600 text-white bg-gray-800"}
        activeClassName={"text-red-600 border border-red-600 rounded-xl w-4 text-center"}
      /> 
    </div>
  
  );
}