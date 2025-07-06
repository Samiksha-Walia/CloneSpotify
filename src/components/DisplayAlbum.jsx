import React from "react";
import Navbar from "./navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { usePlayer } from "../context/PlayerContext";

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData.find(album => album.id === Number(id));
    const { setCurrentSong, setIsPlaying } = usePlayer();

    const handlePlay = (item) => {
        setCurrentSong(item);
        setIsPlaying(true);
    };

    if (!albumData) {
        return (
            <>
                <Navbar />
                <p className="text-white p-4">Album not found.</p>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="p-6 flex flex-col md:flex-row items-center md:items-end gap-6 text-white">
                {/* Album Image */}
                <img
                    src={albumData.image}
                    alt={albumData.name}
                    className="w-48 h-48 object-cover rounded shadow-lg"
                />

                {/* Album Details */}
                <div>
                    <p className="uppercase text-sm font-medium mb-1">Playlist</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">{albumData.name}</h1>
                    <p className="text-gray-200 mb-3">{albumData.desc}</p>
                    <p className="text-sm text-gray-300">
                        <img className="inline-block w-4 -mt-1" src={assets.spotify_logo} alt="" />
                        <span className="text-green-500 font-semibold"> Spotify</span> •
                        1,323,154 likes •
                        <span className="font-semibold"> 50 songs</span>, about 2 hr 30 min
                    </p>
                </div>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] text-sm">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <div className="flex justify-center items-center">
                    <img className="w-4" src={assets.clock_icon} alt="Duration" />
                </div>
            </div>

            <hr className="border-gray-700 my-2" />

            {/* Songs List */}
            {
                songsData.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handlePlay(item)}  // ✅ PLAY ON CLICK
                        className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded"
                    >
                        <div className="flex items-center gap-4">
                            <p className="w-6 text-right">{index + 1}</p>
                            <img className="w-10 h-10 rounded object-cover" src={item.image} alt={item.name} />
                            <p className="text-white">{item.name}</p>
                        </div>
                        <p>{albumData.name || "Album Name"}</p>
                        <p className="hidden sm:block">{item.dateAdded || "5 Days ago"}</p>
                        <p className="text-center">{item.duration || "3:45"}</p>
                    </div>
                ))
            }
        </>
    );
};

export default DisplayAlbum;
