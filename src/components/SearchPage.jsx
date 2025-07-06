import React from 'react';
import Navbar from './navbar';

const SearchPage = () => {
    return (
        <div className="flex flex-col w-full h-full bg-[#121212] text-white overflow-auto">
            <Navbar />
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">Search</h1>
                <p className="text-gray-400">Search functionality coming soon. You will be able to explore songs, albums, and artists here in your Spotify clone.</p>
            </div>
        </div>
    );
};

export default SearchPage;
