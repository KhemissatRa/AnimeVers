import { useEffect } from "react";
import React, { useContext} from "react";
import { AnimeContext } from "../context/context";

export default function Favorite() {
    const { favList,setFavList } = useContext(AnimeContext);

  
  

  
    const Delete = (id) => {
        setFavList((prevFavList) => {
            const updatedFavList = prevFavList.filter((item) => item.mal_id !== id);
           setFavList(updatedFavList)
            return updatedFavList;
        });
    };    
    
    return (
        <div className="flex justify-center  bg-gray-800 items-center flex-col p-8">
            <h1 className="text-red-600 text-4xl mb-4">Favorite Anime</h1>
           <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
            {favList.length === 0 ? (
                <h2 className="text-center text-2xl text-red-600">No favorites added yet.</h2>
            ) : (
                favList.map((item) => (
                    <div key={item.mal_id} className="flex flex-col  justify-center items-center bg-white p-2 rounded-lg w-[300px] min-h-[200px] shadow-lg mb-4">
                        <img className="rounded-xl w-full" src={item.images?.jpg?.image_url} alt={item.title} width="200" />
                        <div className="ml-4 flex justify-center items-center  flex-col">
                            <h1 className=" text-xl p-4 text-black">{item.title}</h1>
                        
                            <p className="text-2xl text-yellow-600">
                                <strong>Year:</strong> {item.year}
                           </p>
                           <button className="w-28 h-10 text-white mx-auto mt-8 bg-red-600 rounded-xl hover:bg-red-600  " onClick={()=>Delete(item.mal_id)}>Delete Anime</button>

                        </div>
                    </div>
                ))
            )}
            </div>
        </div>
    );
}
