import React, { FC, useEffect } from 'react'

interface AboutCardProps {
  person: IPerson
}

interface IPerson {
  image: string,
  name: string,
  description: string,
}

const AboutCard: FC<AboutCardProps> = ({ person }) => {
  const [trimmedDesc, setTrimmedDesc] = React.useState<string | undefined>(undefined)
  const [showMore, setShowMore] = React.useState<boolean>(false)

  useEffect(() => {
    if (!person.description) return
    if (person.description?.length > 42) {
      setTrimmedDesc(person.description?.slice(0, 42) + '...')
    } else {
      setTrimmedDesc(person.description)
    }
  }, [])

  return (
    <div className='flex w-[200px] h-[200px]  group relative md:w-full md:h-fit md:gap-6 items-center'>
      <img src={person.image} className='md:w-[95px] md:h-[95px]' alt='person'></img>

      <div className='md:hidden group-hover:!opacity-100 opacity-0 from-transparent to-black bg-gradient-to-b absolute z-[3] inset-0 w-full h-full transition-all flex flex-col justify-end p-5 duration-200'>
        <h1 className='text-[20px] font-bold'>{person.name}</h1>
        <p className='text-[13px] opacity-75'>{trimmedDesc}</p>
      </div>

      <div className='flex-col hidden md:flex gap-4'>
        <h1 className='font-bold text-[20px]'>{person.name}</h1>
        <p className='text-[13px]'>
          {showMore ? person.description : trimmedDesc}
          { person.description?.length > 42 &&
            <span className='text-[#E056FD] cursor-pointer ml-2' onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Kevesebb...' : 'Több...'}
            </span>
          }
        </p>
      </div>
    </div>
  )
}

export default AboutCard