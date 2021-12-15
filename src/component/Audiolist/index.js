import React, { useState,useEffect } from 'react';
import './style.scss';
import axios from 'axios';


function Audio({display, onClick, lists, target, setSong, setOff, setListSong}) {

    const[data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                let res = await axios.get(`http://localhost:5000/song`)
                if (target === 'ukpop') {
                    setData(res.data.songData.ukpop)
                    setListSong(res.data.songData.ukpop)
                } else if (target==='kpop') {
                    setData(res.data.songData.kpop)
                    setListSong(res.data.songData.kpop)
                } else if (target==='cpop') {
                    setData(res.data.songData.cpop)
                    setListSong(res.data.songData.cpop)
                } else if (target==='vpop') {
                    setData(res.data.songData.vpop)
                    setListSong(res.data.songData.vpop)
                }
            } catch (err) {
                return err
            }
        }
        getData();
    }, [target])

    return (
        <div className={`${display} audio-list position-fixed r-0 l-0 t-0 b-0 border-radius-14 tr-all-ease-in-out-4 max-h-0 visibility-hidden z-index-20`}>
            <span onClick={() => onClick('')} class={`${lists} fas fa-chevron-left color-light mx-20 px-8 pb-24 pt-36 tr-all-ease-in-out-2 max-w-0 opacity-0 visibility-hidden`}></span>
            <ul className={`${lists} tr-all-ease-in-out-2 opacity-0 visibility-hidden`}>
                {
                    data && data.map((item, index) => 

                    <li key={index} className={`${lists} d-flex align-items-center py-4 mx-14 px-8 opacity-0 visibility-hidden`} onClick={() => {setSong(item); setOff()}} >
                        <div className='w-48 h-48 border border-radius-50% mr-16'><img className='w-48 h-48 border border-radius-50%' alt='img' src={`http://localhost:5000/${item.avatar}`} /></div>
                        <h4 className='color-light'>{item.title} <p className='font-weight-normal color-light opacity-5'>{item.singer}</p></h4>
                    </li>
                    ) 
                }
            </ul>
        </div>
    )
}

export default Audio;
