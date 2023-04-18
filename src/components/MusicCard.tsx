import React, { FC } from 'react'

const MusicCard: FC = () => {
    return (
        <div className='w-[600px] bg-[#FFFFFF14] h-[100px] p-6 flex justify-between items-center font-inter md:w-[300px]'>
            <div className='flex gap-3 items-center'>
                <img src='/dummymusic.png' alt='musicimg'></img>
                <div className='flex flex-col gap-1 items-center text-center'>
                    <p className='text-[18px] p-0 m-0'>Quantum</p>
                    <p className='text-[13px] opacity-70 p-0 m-0'>Martin Garrix</p>
                </div>
            </div>
            <p className='uppercase text-[#E056FD]'>Most</p>
        </div>
    )
}

export default MusicCard