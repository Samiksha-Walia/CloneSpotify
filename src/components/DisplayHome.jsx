import React from "react";
import Navbar from "./navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./Albumitem";
import { songsData } from "../assets/assets";
import Songsitem from "./Songsitem";


const DisplayHome = () => {
    return(
        <>
            <Navbar/>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Fetured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.disc} id={item.id} image={item.image}/>))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Todays's Biggest Hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item,index)=>(<Songsitem key={index} name={item.name} desc={item.disc} id={item.id} image={item.image}/>))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome 