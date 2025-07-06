import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()
    return (
        <div className="w-full flex justify-between items-start font-semibold py-2">
            <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                    <img onClick={()=>navigate(-1)}
                        className="w-8 h-8 bg-black p-2 rounded-full cursor-pointer"
                        src={assets.arrow_left}
                        alt="Back"
                    />
                    <img onClick={()=>navigate(+1)}
                        className="w-8 h-8 bg-black p-2 rounded-full cursor-pointer"
                        src={assets.arrow_right}
                        alt="Forward"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <p className="bg-white text-black text-sm px-4 py-1 rounded-full cursor-pointer">
                        All
                    </p>
                    <p className="bg-black text-white text-sm px-4 py-1 rounded-full cursor-pointer">
                        Music
                    </p>
                    <p className="bg-black text-white text-sm px-4 py-1 rounded-full cursor-pointer">
                        Podcasts
                    </p>
                </div>
            </div>

            {/* Right: Action buttons */}
            <div className="flex items-center gap-4">
                <p className="bg-white text-black text-sm px-4 py-1 rounded-full hidden md:block cursor-pointer">
                    Explore Premium
                </p>
                <p className="bg-black border border-gray-600 text-white text-sm px-4 py-1 rounded-full hidden md:block cursor-pointer">
                    Install App
                </p>
                <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center text-sm cursor-pointer">
                    S
                </p>
            </div>
        </div>
    );
};

export default Navbar;
