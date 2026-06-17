import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const audio = audioRef.current;
    if (!audio) return;

    const start = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
      document.removeEventListener("click", start);
      document.removeEventListener("touchstart", start);
    };

    audio.play().then(() => setPlaying(true)).catch(() => {
      setPlaying(false);
      document.addEventListener("click", start);
      document.addEventListener("touchstart", start);
    });
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/tokyo.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-[100] w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-150"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Pause size={18} /> : <Play size={18} />}
      </button>
    </>
  );
};
