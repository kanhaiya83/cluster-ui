import { useState } from "react";
import WavesurferPlayer from "@wavesurfer/react";

const AudioWave = ({ link }: { link: string }) => {
  const [wavesurfer, setWavesurfer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws: any) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <>
      <WavesurferPlayer
        height={100}
        waveColor="gray"
        url={link}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </>
  );
};

export default AudioWave;
