import React, { FC, useEffect } from 'react'
import MusicCard from './MusicCard'
import ProgramCard from './ProgramCard'
import program from '../data/program.json'

const ProgramSection: FC = () => {
    const programContRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        const programCont = programContRef.current

        if (!programCont) return

        let currentDay = new Date().getDay() == 0 ? 6 : new Date().getDay() - 1

        let currentHour = new Date().getHours()

        programCont.scrollLeft = (currentDay * 320) + (currentHour * 4.166666666666667)

        const interval = setInterval(() => {
            currentHour = new Date().getHours()
            currentDay = new Date().getDay() == 0 ? 6 : new Date().getDay() - 1

            programCont.scrollLeft = (currentDay * 320) + (currentHour * 4.166666666666667)

            console.log(currentDay, currentHour)
        }, 1000)

        return () => {
            clearInterval(interval)
        }    
      }, []);

    return (
        <section id='program' className='flex flex-col items-center justify-center text-white gap-24 h-auto pb-2 z-[2] md:p-8 relative'>
            <h1 className='text-[60px] font-black m-0'>Műsorlista</h1>

            <svg className='z-10 absolute top-[10.7rem] md:!top-[12.7rem]' width="17" height="359" viewBox="0 0 17 359" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 10L1.13878 2.5L15.8612 2.5L8.5 10Z" fill="#EB5757" />
                <path d="M8.5 4L8.5 359" stroke="#EB5757" strokeWidth="3" />
            </svg>

            <div className='flex flex-col w-full items-center gap-7 pt-12'>
                {/* <div className='flex items-center gap-7 flex-1'>
                    {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                        <MusicCard key={index} />
                    ))}
                </div> */}

                <div className='programcont flex items-center gap-7 w-full overflow-x-auto px-[750px] scroll-smooth' ref={programContRef}>
                    {program.map((item, index) => (
                        <div className='prog flex' key={item.day}>
                            <ProgramCard prog={item} key={item.day} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProgramSection