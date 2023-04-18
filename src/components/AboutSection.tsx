import React, { FC } from 'react'
import AboutCard from './AboutCard'

const AboutSection: FC = () => {
  return (
    <section id="about" className='flex flex-col items-center justify-center text-white gap-24'>
        <div className='relative mx-auto'>
            <h1 className='text-[60px] font-black m-0 z-[2] relative'>Rólunk</h1>

            <img src='/bg-blob-1.svg' className='blur-[475px] rotate-[87deg] absolute min-w-max min-h-max inset-0 z-[1] -left-[300%] -top-[200px]' alt='bg-blob'></img>
        </div>

        <div className='flex gap-16 items-center lg:flex-col z-[2]'>
            <img src='/logo-bigger.png' alt='logo' />
            <p className='max-w-[700px] lg:max-w-[400px]'>Hallgasd online a Fresh FM internetes rádiót, amely 2011-ben indult! A rádió Budapestről, a Puskás Tivadar Távközlési Technikum stúdiójából jelentkezik a nap 24 órájában. A CHR zenei formátumú állomás napjaink legkedveltebb slágereiből válogat, óránkét egyszer az előző évtizedek meghatározó dalai közül hallhatunk egyet-egyet. Szerkesztett beszélgetős műsorok időszakosan gazdagítják a műsorfolyamot, amiket podcast formában vissza lehet hallgatni. Kétóránként friss hírek és időjárás-jelentés tájékoztatja a világ eseményeiről a hallgatókat. A Fresh FM 2011-ben kezdte meg jogtiszta működését, így a magyar webrádiós kínálat egyik legtapasztaltabb résztvevőjének számít.</p>
        </div>


        <div className='grid grid-cols-4 gap-11 lg:grid-cols-3 md:!grid-cols-2 relative' id='csapatunk'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) =>
                <AboutCard person={{image: `/about/${item}.png`}} key={index} />
                )
            }

            <img src='/bg-blob-2.svg' className='blur-[475px] rotate-[87deg] absolute min-w-max min-h-max inset-0 z-[1] top-[500px] -left-[500px]' alt='bg-blob'></img>
        </div>
        
        <div className='flex gap-24 z-[2] flex-wrap w-full justify-center'>
            <img src='/mars.png' alt='logo' />
            <img src='/tokyohost.png' alt='logo' />
            <img src='/42net.png' alt='logo' />
            <img src='/online-radio.png' alt='logo' />
            <img src='/puskas.png' alt='logo' />
        </div>
    </section>
  )
}

export default AboutSection