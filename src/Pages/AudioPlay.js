import Audio from "../assets/bg-audio.mp3";

const AudioPlay = () => {
  return (
    <audio src={Audio} autoPlay loop />
  );
};

export default AudioPlay;
