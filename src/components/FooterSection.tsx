import React, { FC } from 'react'

interface Props {
    selectSource: any
}

const FooterSection: FC<Props> = (props) => {
    return (
        <footer className='w-full flex justify-center bg-[#111111] z-[2] text-white'>
            <div className="flex justify-between p-10 lg:flex-col lg:gap-8 max-w-[1500px] w-full">
                <img src='/logo-bigger.png' className='w-[150px] h-[150px] self-center lg:self-start' alt='logo'></img>

                <div className='flex flex-col gap-4 max-w-[300px]'>
                    <h1 className='font-medium text-[24px]'>Felügyeleti szerv</h1>
                    <p className='opacity-80'>Nemzeti Média- és Hírközlési Hatóság, 1015 Budapest, Ostrom u. 23-25. - honlap:</p>
                    <a href='https://nmhh.hu/' className='text-[#BB6BD9]' target="_blank">https://nmhh.hu/</a>
                    <img src='/nmhh.png' className='w-[200px]' alt='nmhh'></img>
                </div>

                <div className='flex flex-col gap-4 max-w-[300px]'>
                    <h1 className='font-medium text-[24px]'>Jogkezelők</h1>
                    <p className='opacity-80'>Artisjus Egyesület
                        1016 Budapest, Mészáros u. 15-17.
                        www.artisjus.hu
                        Szerződésszám: W/001424/2019
                        Magyar Hangfelvétel-kiadók Szövetsége Közös Jogkezelő Egyesület (Az IFPI Magyar Csoportja)
                    </p>
                    <p className='opacity-80'>1113 Budapest, Harcos tér 5.</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='font-medium text-[24px]'>Navigáció</h1>
                    <div className='flex flex-col gap-2 text-[15px]'>
                        <a href='#' className='opacity-80'>Mobil lejátszó</a>
                        <a href='#' className='opacity-80'>Támogatás</a>
                        <a href='#' className='opacity-80'>Beküldés</a>
                        <a href='#' className='opacity-80'>Fresh FM asztali lejátszó</a>
                        <a href='#' className='opacity-80'>Facebook</a>
                        <a href='#' className='opacity-80'>Instagram</a>
                        <a href='#' className='opacity-80'>Discord</a>
                        <a href='#' className='opacity-80'>TikTok</a>
                        <a href='#' className='opacity-80'>Email</a>
                        <a href='#' className='opacity-80'>Adatvédelem</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection