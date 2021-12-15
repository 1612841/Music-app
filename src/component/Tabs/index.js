import React, { useState } from 'react';
import './style.scss';

function Tabs({ onClick, opacity, target }) {

    const [changeItem, setChangeItem] = useState('')

    return (
        <div className={`${opacity} bg-gray-100 h-100vh`}>
            <div className='tabs d-flex align-items-center justify-content-space-evenly bg-gray-100 border-radius-bottom-8 border-bottom'>
                <a href='#' onClick={() => setChangeItem(true)} className={changeItem? 'link-item links py-16 pb-16 px-16 line-height-24 color-black font-size-14 font-weight-bold' : 'link-item py-16 pb-16 px-16 line-height-24 color-black font-size-14 font-weight-bold'}>Genre</a>
                <a href='#' onClick={() => setChangeItem(false)} className={changeItem === true? 'link-item py-16 px-16 line-height-24 color-black font-size-14 font-weight-bold' : 'link-item py-16 px-16 line-height-24 color-black font-size-14 font-weight-bold links'}>Genre For Vip</a>
            </div>
            {
                changeItem !== '' &&
                <div className='tabs d-flex align-items-center'>
                    <p className={changeItem? 'link-item py-8 px-8 line-height-24 color-gray-700 font-size-14 font-weight-bold' : 'd-none'}>Genre</p>
                    <p className={changeItem?'d-none' : 'link-item py-8 px-8 line-height-24 color-gray-700 font-size-14 font-weight-bold'}>Genre For Vip</p>
                </div>
            }
            {
                changeItem &&
                <div>
                    <div className='d-flex align-items-center justify-content-space-evenly my-8'>
                        <div onClick={onClick} className='w-80 h-80 border border-radius-50%'>
                            <img className='w-80 h-80 border border-radius-50%' src='../images/usuk.jpg' alt='ukpop'/>
                        </div>
                        <div onClick={onClick} className='w-80 h-80 border border-radius-50%'>
                            <img className='w-80 h-80 border border-radius-50%' src='../images/kpop.jpg' alt='kpop' />
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-space-evenly my-24'>
                        <div onClick={onClick} name='cpop' className='w-80 h-80 border border-radius-50%'>
                            <img className='w-80 h-80 border border-radius-50%' src='../images/cpop.jpg' alt='cpop' />
                        </div>
                        <div onClick={onClick} name='vpop' className='w-80 h-80 border border-radius-50%'>
                            <img className='w-80 h-80 border border-radius-50%' src='../images/vpop.jpg' alt='vpop' />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Tabs;
