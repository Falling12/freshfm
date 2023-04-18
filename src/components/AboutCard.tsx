import React, { FC } from 'react'

interface AboutCardProps {
    person: IPerson
}

interface IPerson {
    image: string,
    name?: string,
    description?: string,
}

const AboutCard: FC<AboutCardProps> = ({ person }) => {
  return (
    <div className='flex w-[200px] h-[200px] z-[2] group relative'>
        <img src={person.image} alt='person'></img>

        <div className='group-hover:!opacity-100 opacity-0 from-transparent to-black bg-gradient-to-b absolute z-[3] inset-0 w-full h-full transition-all flex flex-col justify-end p-5 duration-200'>
            <h1 className='text-[20px] font-bold'>Varga Márk</h1>
            <p className='text-[13px] opacity-75'>Varga Márk vagyok, a Fresh FM tulajdonosa.</p>
        </div>
    </div>
  )
}

export default AboutCard