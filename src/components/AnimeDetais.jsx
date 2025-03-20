import React, { useContext } from "react";
import { AnimeContext } from "../context/context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function AnimeDetails() {
    const {favList, animeList, loading, setFavList } = useContext(AnimeContext);
    const { id } = useParams();

    useEffect(()=>{
        localStorage.setItem("anime", JSON.stringify(favList));

    },[favList]);   
        const details = animeList.find((item) => item.mal_id === Number(id));
  
    const AddtoFav = () => {

        if (favList.some((item)=>item.mal_id === details.mal_id)){
            alert("Item is already in the favorites list!");

        }
        else {setFavList((PrevFavList)=>[...PrevFavList,details])
        
        }
    }

   
    if (loading) {
        return <h1 className="text-center text-3xl text-white">Page is Loading ...</h1>;
    }

    if (!details) {
        return <h1 className="text-center text-3xl text-white">Anime not found</h1>;
    }

    return (
        <div className="max-w-full flex flex-col justify-center items-center bg-white min-h-full">
            <h1 className="text-center text-4xl p-4 text-red-600">{details.title}</h1>
            <div className="flex shadow-xl justify-center space-x-8 space-y-8 p-8 mx-auto rounded-xl items-center bg-gray-800 w-[900px] min-h-[500px]">
                <img className="rounded-xl" src={details.images?.jpg?.image_url} alt={details.title} width="300" />
                <div>
                    <p className="text-2xl text-red-600">
                        <strong>Japanese Title:</strong> {details.title_japanese}
                    </p>
                    <p className="text-2xl text-white">
                        <strong>Type:</strong> {details.type}
                    </p>
                    <p className="text-2xl text-yellow-600">
                        <strong>Year:</strong> {details.year}
                    </p>
                    <p className="text-2xl text-blue-800">
                        <strong>Studio:</strong> {details.studios?.length > 0 ? details.studios[0].name : "Unknown"}
                    </p>
                    <p className="text-white">
                        <strong>Synopsis:</strong> {details.synopsis}
                    </p>
                    <p className="text-2xl text-red-600">
                        <strong>Watch Trailer:</strong>{" "}
                        <a href={details.trailer?.url} target="_blank" rel="noopener noreferrer">
                            YouTube
                        </a>
                    </p>
                    <p>
                        <strong>More Info:</strong>{" "}
                        <a href={details.url} target="_blank" rel="noopener noreferrer">
                            MAL Page
                        </a>
                    </p>
                </div>
            </div>
            <button
                className="w-48 h-8 hover:shadow-xl active:bg-blue-800 mx-auto rounded-xl bg-red-600 my-8 text-gray-800"
                onClick={AddtoFav}
            >
            Add to favorite <i className="fa-solid fa-heart text-gray-600"></i>
            </button>
            
        </div>
    );
}
