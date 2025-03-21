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
        <div className="flex  justify-center  bg-white items-center flex-col p-8">
            <h1 className="text-black text-4xl mb-4">Favorite Anime</h1>
            {favList.length === 0 ? (
                <h2 className="text-center text-2xl text-black">No favorites added yet.</h2>
            ) : (
                favList.map((item) => (
                    <div key={item.mal_id} className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start bg-gray-800 p-4 rounded-lg max-w-[450px] min-h-[500px] shadow-lg mb-4">
                        <img className="rounded-xl" src={item.images?.jpg?.image_url} alt={item.title} width="200" />
                        <div className="ml-4 flex justify-center items-center space-y-4 flex-col">
                            <h1 className=" text-xl p-4 text-red-600">{item.title}</h1>
                            <p className="text-xl text-red-600">
                                <strong>Japanese Title:</strong> {item.title_japanese}
                            </p>
                            <p className="text-2xl text-yellow-600">
                                <strong>Year:</strong> {item.year}
                           </p>
                           <button className="w-28 h-10 text-white mx-auto mt-8 bg-blue-800 rounded-xl hover:bg-red-600  " onClick={()=>Delete(item.mal_id)}>Delete Anime</button>

                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
