import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/albums/${id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-colors">
            <img className="rounded w-full aspect-square object-cover" src={image} alt={name} />
            <p className="font-bold mt-2 mb-1 truncate">{name}</p>
            <p className="text-slate-200 text-sm line-clamp-2">{desc}</p>
        </div>
    );
};

export default AlbumItem;
