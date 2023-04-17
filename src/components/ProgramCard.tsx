import React, { FC } from 'react'

const ProgramCard: FC = () => {
  return (
    <div className='w-[300px] bg-[#FFFFFF14] h-auto p-6 flex flex-col gap-4'>
        <div className='flex justify-between items-center uppercase opacity-80'>
            <h1>Szerda</h1>
            <h1>19:00 - 20:00</h1>
        </div>
        <hr className='border-[#FFFFFF26]'></hr>
        <div className='flex flex-col'>
            <p className='font-semibold text-[24px]'>DerikeÓra</p>
            <p className='text-[18px] opacity-80'>Derikehh</p>
        </div>
    </div>
  )
}

export default ProgramCard