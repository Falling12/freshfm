import React, { ChangeEvent, FC, FormEvent, useEffect, useRef } from 'react'
import axios from 'axios'

interface Props {
  src: string
}

const HeroSection: FC<Props> = (props) => {
  const [music, setMusic] = React.useState<any>(null)
  const player = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = React.useState<any>(false)

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
    if(!player.current) return;
    if (playing) {
      player.current.pause()
      setPlaying(false)
    } else {
      if(props.src === 'mp3') player.current.src = 'http://botvps.bdaniel.hu:8000/freshfm.mp3?' + new Date().getTime();
      else if(props.src === 'aac') player.current.src = 'http://botvps.bdaniel.hu:8000/freshmobil.aac?' + new Date().getTime();
      player.current.play()
      setPlaying(true)
    }
  }

  function OnVolumeEv(e: FormEvent) {
    if (e.target == null || player.current == null) return;
    let val = e.target.value != undefined ? parseInt(e.target.value) / 100 : .5;

    player.current.volume = val;  
  }

  return (
    <section id='hero' className='flex select-none outline-none flex-col items-center justify-center h-screen bg-hero bg-no-repeat bg-center bg-cover text-white'>
      <h1 className='text-[130px] font-black m-0 lg:text-[80px] md:!text-[60px] text-center'>Összeköt a zene.</h1>
      <h2 className='text-[35px] m-0 lg:text-[25px] md:!text-[20px] text-center text-white'>Most szól: <b className='text-white/70 select-text ml-4 text-left max-w-[650px] inline-flex'>{music ? music.title : 'Ismeretlen'}</b></h2>
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
        {playing ? 'Leállítás' : 'Halgass bele'}
        <audio ref={player} src={props.src == 'mp3' ? 'http://botvps.bdaniel.hu:8000/freshfm.mp3' : 'http://botvps.bdaniel.hu:8000/freshmobil.aac'}>
        </audio>
      </button>

      <div className="flex items-center gap-4 mt-4">
        <svg className="mt-1" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5097 9.5C14.5097 8.18262 13.7044 7.05449 12.5614 6.57949L11.9528 8.0416C12.5243 8.2791 12.9251 8.84316 12.9251 9.50371C12.9251 10.1605 12.5243 10.7246 11.9528 10.9658L12.5614 12.4279C13.7044 11.9455 14.5097 10.8174 14.5097 9.5ZM13.7786 3.65527L13.17 5.11738C14.8882 5.83359 16.0942 7.52578 16.0942 9.5C16.0942 11.4779 14.8882 13.1664 13.17 13.8826L13.7786 15.3447C16.0683 14.391 17.6751 12.1348 17.6751 9.5C17.6751 6.86523 16.0683 4.60898 13.7786 3.65527ZM1.84424 5.54043V13.4559H5.00967L10.5501 19V0L5.00967 5.54043H1.84424Z" fill="white"></path>
        </svg>
        <input type="range" onInput={OnVolumeEv} min="0" max="100" className="mt-2" id="myRange"/>
      </div>

      <a className='absolute bottom-5 cursor-pointer' href='#program'>
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.23 25.77L36 39.51L49.77 25.77L54 30L36 48L18 30L22.23 25.77Z" fill="white" fillOpacity="0.65" />
        </svg>
      </a>
    </section>
  )
}

export default HeroSection