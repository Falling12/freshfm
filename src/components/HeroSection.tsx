import React, { FC } from 'react'

const HeroSection: FC = () => {
  return (
    <section id='hero' className='flex flex-col items-center justify-center h-screen bg-hero bg-no-repeat text-white'>
      <h1 className='text-[130px] font-black m-0 lg:text-[80px] md:!text-[60px] text-center'>Összeköt a zene.</h1>
      <h2 className='text-[35px] font-semibold m-0 lg:text-[25px] md:!text-[20px] text-center'>Most szól: Jonas Blue, Ftelix Jaehn - Weekends</h2>
      <button role={'button'} className='flex items-center gap-4 supportbtn rounded-xl py-2 px-4 mt-8 font-semibold text-[20px]'>
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.444 17.37C34.9144 17.629 35.3066 18.0094 35.5798 18.4717C35.853 18.934 35.9971 19.4611 35.9971 19.998C35.9971 20.5349 35.853 21.062 35.5798 21.5243C35.3066 21.9866 34.9144 22.367 34.444 22.626L14.444 33.622C13.9872 33.8729 13.4728 34.0004 12.9517 33.992C12.4306 33.9836 11.9206 33.8396 11.4721 33.5742C11.0236 33.3087 10.6519 32.931 10.3938 32.4782C10.1357 32.0254 9.99993 31.5132 10 30.992V9.004C10.0001 8.48269 10.136 7.9704 10.3944 7.51762C10.6528 7.06485 11.0247 6.68721 11.4735 6.42195C11.9222 6.15668 12.4324 6.01293 12.9536 6.00487C13.4749 5.99682 13.9892 6.12473 14.446 6.376L34.444 17.37Z" fill="white" />
        </svg>
        Halgass bele
      </button>

      <a className='absolute bottom-5 cursor-pointer' href='#program'>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.23 25.77L36 39.51L49.77 25.77L54 30L36 48L18 30L22.23 25.77Z" fill="white" fillOpacity="0.65" />
        </svg>
      </a>
    </section>
  )
}

export default HeroSection