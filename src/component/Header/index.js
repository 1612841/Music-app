import React, { useState } from 'react';
import './style.scss';

function Header(props) {

    const [searchIcon, setSearchIcon] = useState(false);
    const [input, setInput] = useState({
        search: ''
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            search: e.target.value
        })
    }

    return (
        <header className={`${props.opacity} header bg-gray-100 z-index-10 d-flex align-items-center justify-content-space-between border-radius-8`}>
            <img className='w-40 h-40 p-8 mr-4 cursor' src='../images/logo.svg' alt='logo' />
            <input type='text' placeholder='Find your music...' className={searchIcon? 'opacity-5 font-size-14 font-weight-lighter px-16 py-8 outline-none border-radius-8 border tr-all-ease-3' : 'opacity-0 visibility-hidden font-size-14 font-weight-lighter px-16 py-8 border-radius-8 border tr-all-ease-in-out-3'} onChange={handleChange} value={input.search} />
            <span onClick={() => {setSearchIcon(!searchIcon); }} class="fas fa-search py-16 pr-16 font-size-18 font-weight-lighter color-black"></span>
        </header>
    )
}

export default Header;
