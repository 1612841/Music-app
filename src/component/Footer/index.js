import React, { useState,useEffect, useRef } from 'react';
import './style.scss';

function Footer(props) {

    const [height, setHeight] = useState(false);
    const [play, setPlay] = useState(false);
    const [trackProgress, setTrackProgress] = useState('');
    const [current, setCurrent] = useState(0);
    const [songChange, setSongChange] = useState([]);
    const [changeSelect, setChangeSelect] = useState(false);
    const [changeCurrent, setChangeCurrent] = useState(false)

    const audioSrc = (changeSelect?`http://localhost:5000/${songChange.audioFile}` : `http://localhost:5000/${props.song.audioFile}`);
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();

    const startTime = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setTrackProgress(audioRef.current.currentTime);
        }, 1000);
    }

    const trackProgressValue = (e) => {
        setTrackProgress(e.target.value);
        audioRef.current.currentTime = e.target.value
    }

    useEffect(() => {
        audioRef.current.pause()
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play()
        setPlay(true);
        startTime()
    }, [audioSrc]);

    const nextSlide = () => {
        setCurrent(current === (props.listSong.length - 1)? 0 : (current + 1));
        setChangeSelect(true);
        setChangeCurrent(!current)
    };
    const preSlide = () => {
        setCurrent(current === 0? (props.listSong.length - 1) : (current -1));
        setChangeSelect(true);
        setChangeCurrent(!current)
    };

    useEffect(() => {
        props.listSong.forEach((e, index) => {
            if (index === current) {
                setSongChange(e);
            } else {
                setCurrent(index)
            }
        })
    }, [changeCurrent, props.off])

    useEffect(() => {
        setChangeSelect(false)
    }, [props.song.title])

    return (
        <div className={`${height? 'h-88vh' : ''} ${props.opacity} footer position-fixed l-0 r-0 b-0 h-120 border-top border-radius-4 z-index-1 d-flex align-items-center flex-direction-column`}>
            <div className='w-60 h-7 mt-4 border-radius-8 bg-transparent d-flex align-items-center justify-content-center flex-direction-column' onClick={() => setHeight(!height)}>
                <div className='w-59 h-1 border border-radius-4' />
                <div className='w-59 h-1 border border-radius-4' />
            </div>

            {
            height && 
            <div>
                <div className='h-300 w-300 my-20 border-radius-16 d-flex align-items-center justify-content-center'>
                {/*(songChange.avatar || props.song.avatar) && 
                    <div className='w-280 h-280 bg-transparent border border-radius-50%'>
                        <img className='w-280 h-280 bg-transparent border border-radius-50%' alt='img' src={changeSelect?`http://localhost:5000/${songChange.avatar}` : `http://localhost:5000/${props.song.avatar}`} />
                    </div>
                */}
                </div>
                <div className='w-100% border-bottom'>
                    <h2 className='font-size-18 font-weight-500 color-black p-8'>{changeSelect? songChange.title : props.song.title} <p className='font-weight-normal font-size-14 opacity-5 py-4 color-dark'>{changeSelect? songChange.singer : props.song.singer}</p></h2>
                </div>
                <div className='range w-100%'>
                    <input type='range' min={'0'} max={audioRef.current.duration} value={trackProgress} onChange={trackProgressValue} />
                </div>
                <div className='d-flex align-items-center justify-content-center p-16'>
                    <span class="fas fa-step-backward px-16 cursor" onClick={preSlide}></span>
                    <div className='w-30 h-30 border-radius-50% border bg-transparent mx-16 cursor d-flex align-items-center justify-content-center'>
                        {
                            play && <span className="far fa-pause-circle font-size-16 color-indigo" onClick={() => {setPlay(!play); audioRef.current.pause()}}></span>
                        }
                        {
                            play || <span className="fas fa-play-circle font-size-16 color-dark" onClick={() => {setPlay(!play); audioRef.current.play()}}></span>
                        }
                    </div>
                    <span class="fas fa-step-forward px-16 cursor" onClick={nextSlide}></span>
                </div>
            </div>
            }
            {
            height || 
            <div className='d-flex align-items-center justify-content-space-between my-4 w-100%'>
                <div className='d-flex align-items-center justify-content-left my-4'>
                { (songChange.avatar || props.song.avatar) &&
                    <div className='w-40 h-40 border border-radius-50% ml-8 mr-16'>
                        <img className='w-40 h-40 border border-radius-50%' alt='hinh' src={changeSelect?`http://localhost:5000/${songChange.avatar}` : `http://localhost:5000/${props.song.avatar}`} />
                    </div>
                }
                    <h4 className='color-indigo font-size-12'>{changeSelect?songChange.title : props.song.title} <p className='font-weight-normal color-indigo opacity-5 font-size-12'>{changeSelect?songChange.singer : props.song.singer}</p></h4>
                </div>
                { (songChange.avatar || props.song.avatar) &&
                <div className='d-flex px-16'>
                    {
                        play && <span className="far fa-pause-circle font-size-16 color-indigo mx-16" onClick={() => {setPlay(!play); audioRef.current.pause()}}></span>
                    }
                    {
                        play || <span className="fas fa-play-circle font-size-16 color-dark mx-16" onClick={() => {setPlay(!play); audioRef.current.play()}}></span>
                    }
                    <span class="fas fa-times font-size-16 color-black font-weight-lighter" onClick={() => {audioRef.current.pause(); setHeight(true); setPlay(false)}}></span>
                </div>
                }
            </div>
            }
            {
            height || 
            <div className='menu-footer w-150 h-40 my-4 border-radius-6 d-flex align-items-center justify-content-center'>
                <div className='d-flex align-items-center justify-content-center flex-direction-column px-16'>
                    <span className="fas fa-home color-light font-size-12"></span>
                    <a to='/' className='color-light font-size-12 font-weight-lighter'>Home</a>
                </div>
                <div className='d-flex align-items-center justify-content-center flex-direction-column px-16'>
                    <span className="far fa-user color-light font-size-12"></span>
                    <h4 className='color-light font-size-12 font-weight-lighter'>Profile</h4>
                </div>
            </div>
            }
        </div>
    )
}

export default Footer;
