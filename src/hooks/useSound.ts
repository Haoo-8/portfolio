import { useCallback, useRef } from "react";

interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
}

export const useSound = (url: string, options: SoundOptions = {}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { volume = 1, playbackRate = 1, loop = false } = options;

  const play = useCallback(async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(url);
        audioRef.current.volume = volume;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current.loop = loop;
      }

      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (error) {
      console.warn("Failed to play sound:", error);
    }
  }, [url, volume, playbackRate, loop]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  return { play, stop, pause };
};
