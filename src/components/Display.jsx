import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import SearchPage from "./SearchPage";

const Display = () => {
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumID = isAlbum ? location.pathname.split("/").pop() : "";
    const albumData = albumsData.find(album => album.id === Number(albumID));
    const bgColor = albumData ? albumData.bgColor : "#121212";

    useEffect(() => {
        if (isAlbum && albumData) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
        } else {
            displayRef.current.style.background = "#121212";
        }
    }, [isAlbum, bgColor, albumData]);

    return (
        <div
            ref={displayRef}
            className="w-full m-2 px-6 pt-4 rounded text-white overflow-auto lg:w-[75%] lg:ml-0"
        >
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/albums/:id" element={<DisplayAlbum />} />
                <Route path="/search" element={<SearchPage/>} />
            </Routes>
        </div>
    );
};

export default Display;
