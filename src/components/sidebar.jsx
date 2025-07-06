import React from "react";
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleSearchClick = () => {
        navigate('/search');
    };

    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            {/* TOP: Home & Search */}
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
                <div
                    className="flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#242424] py-2 rounded"
                    onClick={handleHomeClick}
                >
                    <img className="w-6" src={assets.home_icon} alt="Home Icon" />
                    <p className="font-bold">Home</p>
                </div>
                <div
                    className="flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#242424] py-2 rounded"
                    onClick={handleSearchClick}
                >
                    <img className="w-6" src={assets.search_icon} alt="Search Icon" />
                    <p className="font-bold">Search</p>
                </div>
            </div>

            {/* BOTTOM: Library & Prompts */}
            <div className="bg-[#121212] h-[85%] rounded overflow-y-auto">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className="w-8" src={assets.stack_icon} alt="Library Icon" />
                        <p className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-5 cursor-pointer" src={assets.arrow_icon} alt="Arrow Icon" />
                        <img className="w-5 cursor-pointer" src={assets.plus_icon} alt="Plus Icon" />
                    </div>
                </div>

                {/* Playlist Prompt */}
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1">
                    <h1>Create Your First Playlist</h1>
                    <p className="font-light">It's easy, we will help you</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
                        Create Playlist
                    </button>
                </div>

                {/* Podcast Prompt */}
                <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 mt-4">
                    <h1>Let's Find Some Podcasts For You</h1>
                    <p className="font-light">We'll keep you updated on the new episodes</p>
                    <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
                        Browse Podcasts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
