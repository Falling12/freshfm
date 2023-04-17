import React, { FC } from 'react'

interface ProgramCardProps {
    prog: IProgram
}

interface IProgram {
    day: string,
    from: string,
    to: string,
    name: string,
    dj: string,
    id: number
}


const ProgramCard: FC<ProgramCardProps> = ({prog}) => {
  return (
    <div className='w-[300px] bg-[#FFFFFF14] h-auto p-6 flex flex-col gap-4'>
        <div className='flex justify-between items-center uppercase opacity-80'>
            <h1>{prog.day}</h1>
            <h1>{`${prog.from} - ${prog.to}`}</h1>
        </div>
        <hr className='border-[#FFFFFF26]'></hr>
        <div className='flex flex-col'>
            <p className='font-semibold text-[24px]'>{prog.name}</p>
            <p className='text-[18px] opacity-80'>{prog.dj}</p>
        </div>
    </div>
  )
}

export default ProgramCard