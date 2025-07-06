import React from "react";
import { assets } from "../assets/assets";
import { usePlayer } from "../context/PlayerContext";

const Player = () => {
    const {
        currentSong,
        isPlaying,
        setIsPlaying,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        audioRef,
        playNext,
        playPrevious,
    } = usePlayer();

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        const seekTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="fixed bottom-0 w-full bg-black text-white px-4 py-2 z-50 flex justify-between items-center h-24">
            <audio
                ref={audioRef}
                src={currentSong.file}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                autoPlay={isPlaying}
            />

            {/* LEFT: Song Info */}
            <div className="flex items-center gap-4 w-1/4">
                <img src={currentSong.image} alt={currentSong.name} className="w-16 h-16 rounded" />
                <div className="hidden md:block">
                    <p className="font-semibold">{currentSong.name}</p>
                    <p className="text-sm text-gray-400">{currentSong.desc}</p>
                </div>
            </div>

            {/* CENTER: Controls + Progress Bar */}
            <div className="flex flex-col items-center w-1/2 max-w-[500px]">
                <div className="flex items-center gap-6 mb-2">
                    <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
                    <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="Previous" onClick={playPrevious} />
                    <img
                        className="w-6 cursor-pointer"
                        src={isPlaying ? assets.pause_icon : assets.play_icon}
                        alt="Play/Pause"
                        onClick={togglePlayPause}
                    />
                    <img className="w-4 cursor-pointer" src={assets.next_icon} alt="Next" onClick={playNext} />
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
                </div>
                <div className="flex items-center gap-2 w-full">
                    <span className="text-xs text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={duration ? (currentTime / duration) * 100 : 0}
                        onChange={handleSeek}
                        className="w-full h-1 accent-green-500 cursor-pointer"
                    />
                    <span className="text-xs text-gray-400 w-10">{formatTime(duration)}</span>
                </div>
            </div>

            {/* RIGHT: Additional Controls */}
            <div className="hidden md:flex items-center gap-4 w-1/4 justify-end pr-2">
                <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="Mic" />
                <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="Mic" />
                <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="Queue" />
                <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="Speaker" />
                <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="Volume" />
                <input type="range" min="0" max="100" className="accent-green-500 w-24 h-1 cursor-pointer" />
                <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="Mini Player" />
                <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="Zoom" />
            </div>
        </div>
    );
};

export default Player;
