import React, { useEffect, useRef, useState } from 'react';
import { FaShuffle } from "react-icons/fa6";
import { LuRepeat, LuRepeat1 } from "react-icons/lu";
import { MdSkipPrevious,MdSkipNext } from "react-icons/md";
import { FaPlayCircle, FaPauseCircle} from "react-icons/fa";
import { HiMiniSpeakerWave,HiMiniSpeakerXMark } from "react-icons/hi2";
import { FaForward, FaBackward} from "react-icons/fa";


const playList = [
  {id:1, src: './audio/hukum.mp3'},{id:2, src: './audio/Badass.mp3'},
  {id:3, src: './audio/Mankatha.mp3'},{id:4, src: './audio/vikram.mp3'},{src: './audio/leo.mp3'},
  {id:5, src: './audio/AalumaDoluma.mp3'},{id:6, src:'./audio/Kokkarakko.mp3'},{id:7, src:'./audio/Suthudhe Suthudhe.mp3'},{id:8, src:'./audio/Irumbile Oru.mp3'}]


const PlayBackPlayer = () => {
const [isPlaying, setIsPlaying] = useState(false)
const [isMuted, setIsMuted] = useState(false)
const [volume, setVolume] = useState(0.5)
const [duration, setDuration] = useState(0)
const [currentTime, setCurrentTime] = useState(0)
const [index, setIndex] = useState(0)
const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [isShuffled, setIsShuffled] = useState(false);
const [repeatMode, setRepeatMode] = useState('none');
const [repeatedTimes, setRepeatedTimes] = useState();

// const song = playList[currentSongIndex];

// const togglePlayback = () => {
//   setIsPlaying(!isPlaying);
// };

//References
const audioPlayer = useRef(new Audio(playList[currentSongIndex].src))  
const progressBar = useRef()
const animationRef = useRef()

const playOSong = () => {
  let nextIndex;
  if (isShuffled) {
    nextIndex = Math.floor(Math.random() * playList.length);
  } else {
    nextIndex = (currentSongIndex + 1) % playList.length;
  }
  setCurrentSongIndex(nextIndex);
};

const toggleShuffle = () => {
  setIsShuffled(!isShuffled);
};

const toggleRepeat = () => {
  if (repeatMode === 'none') {
    setRepeatMode('all');
  } else if (repeatMode === 'all') {
    setRepeatMode('one');
  } else {
    setRepeatMode('none');
  }
}

useEffect(() => {
  audioPlayer.current.src = playList[currentSongIndex].src;
  if (isPlaying) {
    audioPlayer.current.play();
  }
}, [currentSongIndex]);

useEffect(() => {
  audioPlayer.current.addEventListener('ended', () => {
    if (repeatMode === 'one') {
      audioPlayer.current.play();
    } else {
      
      if (repeatedTimes < 2) { // Play current song 3 times, adjust this number as needed
        audioPlayer.current.play();
        setRepeatedTimes(repeatedTimes + 1);
      } else {
        playOSong();
      }
  }
})

  // return () => {
  //   audioPlayer.current.removeEventListener('ended', () => {});
  // };
}, [currentSongIndex, repeatMode])


const playNextSong = () =>{
  if(index > playList.length - 1){
    setIndex(0)
    audioPlayer.current.src = playList[0].src
    audioPlayer.current.play()
  }
  else{
    setIndex(prev => prev + 1)
    audioPlayer.current.src = playList[index + 1].src
    audioPlayer.current.play()
  }
}

const playPrevSong = () =>{
  if(index > 0){
    setIndex(prev => prev - 1)
    audioPlayer.current.src = playList[index - 1].src
    audioPlayer.current.play()
  }
}


useEffect(()=>{
  const seconds = Math.floor(audioPlayer.current.duration)
  setDuration(seconds)
  progressBar.current.max = seconds
},[audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])


const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60)
  const returnMinute = minutes < 10 ? `0${minutes}`: `${minutes}`
  const seconds = Math.floor(secs % 60)
  const returnSeconds = seconds < 10 ? `0${seconds}`: `${seconds}`

  return `${returnMinute} : ${returnSeconds}`
}

 const togglePlayPause = () =>{
  const prevValue = isPlaying
  setIsPlaying(!prevValue)
  if(!prevValue){
    audioPlayer.current.play()
    animationRef.current = requestAnimationFrame(whilePlaying)
  }
  else{
    audioPlayer.current.pause()
    cancelAnimationFrame(animationRef.current)
  }
 }


 const toggleVolume = () =>{
  const prevSound = isMuted
  setIsMuted(!prevSound)
  if(!prevSound){
    audioPlayer.current.volume = 0
  }
  else{
    audioPlayer.current.volume = 1
  }
 }

 const handleVolumeChange = (event) => {
  const newVolume = parseFloat(event.target.value);
  setVolume(newVolume);
  if (audioPlayer.current) {
    audioPlayer.current.volume = newVolume;
  }
};

 const whilePlaying = () => {
  progressBar.current.value = audioPlayer.current.currentTime
  changePlayerCurrentTime()
  animationRef.current = requestAnimationFrame(whilePlaying)
 }

 const changeRange = () => {
  audioPlayer.current.currentTime = progressBar.current.value
  changePlayerCurrentTime()
 }

 const changePlayerCurrentTime = () => {  
  setCurrentTime(progressBar.current.value)
 }


  return (
    <div className=" text-white bg-chose-30 w-lvw fixed bottom-11 h-11 rounded-md lg:h-20 lg:fixed lg:bottom-0 lg:bg-black">
      <audio 
      ref={audioPlayer} 
      src={currentSongIndex} 
      volume={volume} 
      type="audio/mpeg" 
      preload = 'metadata'
      autoPlay={isPlaying}
      />       
      <ul className='flex justify-between items-center p-3 h-full w-lvw'>
        <li className='flex w-fit lg:border h-16 lg:flex items-center lg:w-60'>
          <img className='w-10 h-10 lg:w-16 lg:h-16 '/>
          <p className='pl-4 pt-5 text-xs md:pt-8 lg:pt-8'>Anirudh Ravichandran</p>
        </li>
        <div>
          <ul className='flex justify-center items-center gap-5'>
            <li className='hidden lg:block'>
              <button
              onClick={toggleShuffle}
              >
              {isShuffled ? <FaShuffle className="w-5 h-5 text-blue-600"/>:<FaShuffle className='text-white'/>}
              </button>   
            </li>
            
            <li className='hidden lg:block'>
            <button
            onClick={playPrevSong}
            >
              <MdSkipPrevious className="w-7 h-7" />
            </button>   
            </li>
        
            <li>
              <button
              onClick={togglePlayPause}
              className='mt-2 lg:m-0'>
                {isPlaying ? <FaPauseCircle className='w-7 h-7'/> : <FaPlayCircle className='w-7 h-7'/> }
              </button>
            </li>

            <li className='hidden lg:block'>
              <button
              onClick={playNextSong}
              >
                <MdSkipNext className="w-7 h-7" />
              </button>
            </li>

            <li className='hidden lg:block'>
              <button
              onClick={toggleRepeat}
              >
                {repeatMode ? <LuRepeat className="text-white"/> : <LuRepeat1 className="w-5 h-5"/>}
              </button> 
              </li>
            
          </ul>

          <div className='hidden lg:flex gap-7'>
            
            <div>{calculateTime(currentTime)}</div>
            <input 
            type='range'
            className='w-90' 
            defaultValue='0'
            ref={progressBar} 
            onChange={changeRange}
            />
            <div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>

          </div>
        </div>

        <li className='hidden md:block lg:flex gap-5'>
          <button onClick={toggleVolume}>
            {isMuted ? <HiMiniSpeakerXMark className='w-7 h-7' /> : <HiMiniSpeakerWave className='w-7 h-7'/> }
            
          </button>
          <input 
          type='range'
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          />
        </li>
      </ul>

    </div>
  );
};

export default PlayBackPlayer;