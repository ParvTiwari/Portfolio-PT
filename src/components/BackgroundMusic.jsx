"use client";
import { useEffect, useRef, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    if (!audioRef.current) return;
    if (audioRef.current.currentTime < 1) {
      audioRef.current.currentTime = 14.2;
    }
    audioRef.current.volume = 0.30;
    audioRef.current.play();
    setIsPlaying(true);
    localStorage.setItem("bg-music", "on");
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
    localStorage.setItem("bg-music", "off");
  };

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("bg-music");
    if (saved === "on") playMusic();
  }, []);

  if (!mounted) return null; // hydration safe

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/sounds/songbird.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={isPlaying ? pauseMusic : playMusic}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/60 text-white backdrop-blur-md hover:scale-110 transition"
      >
        {isPlaying ? <FiVolume2 size={20} /> : <FiVolumeX size={20} />}
      </button>
    </>
  );
}