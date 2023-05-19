import React, { FC, useEffect } from 'react'
import axios from 'axios'

const HeroSection: FC = () => {
  const [music, setMusic] = React.useState<any>(null)
  const [source, setSource] = React.useState<any>(null)
  const [playing, setPlaying] = React.useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://botvps.bdaniel.hu:8000/status-json.xsl')

      return res
    }

    fetchData().then(res => {
      setMusic(res.data.icestats.source[0])
    })

    setInterval(() => {
      fetchData().then(res => {
        setMusic(res.data.icestats.source[0])
      })
    }, 1000 * 60 * 2)
  }, [])

  const play = () => {
    const player = document.getElementById('player') as HTMLAudioElement
    if (playing) {
      player.pause()
      setPlaying(false)
    } else {
      player.play()
      setPlaying(true)
    }
  }
  return (
    <section id='hero' className='flex flex-col items-center justify-center h-screen bg-hero bg-no-repeat text-white'>
      <h1 className='text-[130px] font-black m-0 lg:text-[80px] md:!text-[60px] text-center'>Összeköt a zene.</h1>
      <h2 className='text-[35px] font-semibold m-0 lg:text-[25px] md:!text-[20px] text-center'>Most szól: {music ? music.title : 'Ismeretlen'}</h2>
      <button role={'button'} className='flex items-center gap-4 supportbtn rounded-xl py-2 px-4 mt-8 font-semibold text-[20px]' onClick={() => play()}>
        {
          playing ? (
            <svg width="30" height="30" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5835 4.75001C1.5835 3.25693 1.5835 2.51118 2.04741 2.04726C2.51133 1.58334 3.25708 1.58334 4.75016 1.58334C6.24325 1.58334 6.989 1.58334 7.45291 2.04726C7.91683 2.51118 7.91683 3.25693 7.91683 4.75001V14.25C7.91683 15.7431 7.91683 16.4888 7.45291 16.9528C6.989 17.4167 6.24325 17.4167 4.75016 17.4167C3.25708 17.4167 2.51133 17.4167 2.04741 16.9528C1.5835 16.4888 1.5835 15.7431 1.5835 14.25V4.75001ZM11.0835 4.75001C11.0835 3.25693 11.0835 2.51118 11.5474 2.04726C12.0113 1.58334 12.7571 1.58334 14.2502 1.58334C15.7432 1.58334 16.489 1.58334 16.9529 2.04726C17.4168 2.51118 17.4168 3.25693 17.4168 4.75001V14.25C17.4168 15.7431 17.4168 16.4888 16.9529 16.9528C16.489 17.4167 15.7432 17.4167 14.2502 17.4167C12.7571 17.4167 12.0113 17.4167 11.5474 16.9528C11.0835 16.4888 11.0835 15.7431 11.0835 14.25V4.75001Z" fill="white" />
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.444 17.37C34.9144 17.629 35.3066 18.0094 35.5798 18.4717C35.853 18.934 35.9971 19.4611 35.9971 19.998C35.9971 20.5349 35.853 21.062 35.5798 21.5243C35.3066 21.9866 34.9144 22.367 34.444 22.626L14.444 33.622C13.9872 33.8729 13.4728 34.0004 12.9517 33.992C12.4306 33.9836 11.9206 33.8396 11.4721 33.5742C11.0236 33.3087 10.6519 32.931 10.3938 32.4782C10.1357 32.0254 9.99993 31.5132 10 30.992V9.004C10.0001 8.48269 10.136 7.9704 10.3944 7.51762C10.6528 7.06485 11.0247 6.68721 11.4735 6.42195C11.9222 6.15668 12.4324 6.01293 12.9536 6.00487C13.4749 5.99682 13.9892 6.12473 14.446 6.376L34.444 17.37Z" fill="white" />
            </svg>
          )
        }
        Halgass bele
        <audio id='player'>
          <source src={'http://botvps.bdaniel.hu:8000/freshfm.mp3'} type='audio/mp3' />
        </audio>
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