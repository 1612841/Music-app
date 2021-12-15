import React, { useEffect, useState } from 'react';
import './App.scss';
import './Bo-Re/Bootstrap.scss';
import './Bo-Re/Responsive.scss';
import Header from './component/Header';
import Tabs from './component/Tabs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Audio from './component/Audiolist';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './component/Footer';

function App() {

  const [list, setList] = useState('');
  const [lists, setLists] = useState('');
  const [target, setTarget] = useState('');
  const [song, setSong] = useState([]);
  const [off, setOff] = useState(false);
  const [listSong, setListSong] = useState([]);

  useEffect(() => {
    setList('')
    setLists('')
  }, [off])

  let opacity = '';
  if (list !== '') {
    opacity = 'opacity-0'
  }

  return (
    <div className="App m-20">
      <Router>
        <Header opacity={opacity} />
        <h2 className={`${opacity} font-size-14 text-align-center p-16 mt-8 line-height-28 color-indigo bg-gray-100 border-radius-top-10`}>Find the best music for you</h2>
        <Routes>
          <Route exact path='/' element={<Tabs opacity={opacity} onClick={(e) => {setList('max-h-100% tr-all-ease-in-out-4 visibility-visible'); setLists('tr-all-ease-in-out-4 visibility-visible opacity-10'); setTarget(e.target.alt)}} />} />
        </Routes>
        <Footer listSong={listSong} song={song} off={off} target={target} opacity={opacity} />
        <Audio setListSong={(e) => setListSong(e)} display={list} lists={lists} target={target} setSong={(e) => setSong(e)} onClick={e => {setList(e); setLists(e)}} off={off} setOff={() => setOff(!off)} /> 
      </Router>
    </div>
  );
}

export default App;
