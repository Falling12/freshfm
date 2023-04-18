import React, { FC } from 'react'
import MusicCard from './MusicCard'
import ProgramCard from './ProgramCard'
import program from '../data/program.json'

const ProgramSection: FC = () => {
  return (
    <section id='program' className='flex flex-col items-center justify-center text-white gap-24 h-auto pb-2 z-[2]'>
        <h1 className='text-[60px] font-black m-0'>Műsorlista</h1>

        <div className='flex flex-col relative items-center gap-7 pt-12 overflow-y-hidden'>
            <svg className='z-2 absolute top-0' width="17" height="359" viewBox="0 0 17 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 10L1.13878 2.5L15.8612 2.5L8.5 10Z" fill="#EB5757"/>
                <path d="M8.5 4L8.5 359" stroke="#EB5757" strokeWidth="3"/>
            </svg>

            <div className='flex items-center overflow-x-hidden gap-7'>
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                    <MusicCard key={index} />
                ))}
            </div>

            <div className='flex items-center overflow-x-hidden gap-7'>
                {program.map((item, index) => (
                    <ProgramCard prog={item} key={index} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProgramSection