import React, { FC, useEffect, useState } from 'react'

const Header: FC = () => {
    const [navBlur, setNavBlur] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavBlur(true)
            } else {
                setNavBlur(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <header className={`text-white flex justify-between items-center p-4 z-10 fixed top-0 w-full transition-all ${navOpen ? '!flex-col w-full bg-black/30' : ''} ${navBlur ? 'backdrop-blur-xl bg-black/30' : ''}`}>
        <a href='#' className={`block ${navOpen ? '!hidden' : ''}`}>
            <img src='/logo.png' alt='logo' />
        </a>

        <div className={`hidden ${navOpen ? '!flex' : ''} justify-between items-center flex-1 w-full`}>
            <a href='#'>
                <img src='/logo.png' alt='logo' />
            </a>

            <svg className='navlink' width='33' height='33' xmlns="http://www.w3.org/2000/svg" onClick={() => setNavOpen(!navOpen)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </div>
        
        <div className={`flex md:flex-col items-center gap-5 text-[24px] md:hidden ${navOpen ? '!flex' : ''}`}>
            <a className='navlink' href='#program'>Műsorlista</a>
            <a className='navlink' href='#about'>Rólunk</a>
            <a className='navlink' href='#csapatunk'>Csapatunk</a>
            <button role={'button'} className='supportbtn px-5 py-2 rounded-xl font-medium ml-3'>Támogatás</button>
        </div>

        <svg className={`md:block hidden cursor-pointer hover:opacity-75 transition-all ${navOpen ? '!hidden' : ''}`} onClick={() => setNavOpen(!navOpen)} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.25 24.7569C30.25 25.5131 29.6367 26.125 28.8819 26.125H17.8681C17.5053 26.125 17.1573 25.9809 16.9007 25.7243C16.6441 25.4677 16.5 25.1197 16.5 24.7569C16.5 24.394 16.6441 24.046 16.9007 23.7895C17.1573 23.5329 17.5053 23.3888 17.8681 23.3888H28.8819C29.6381 23.3888 30.25 24.0006 30.25 24.7569ZM30.25 16.5C30.25 17.2563 29.6367 17.8681 28.8819 17.8681H4.11812C3.75528 17.8681 3.40729 17.724 3.15071 17.4674C2.89414 17.2108 2.75 16.8628 2.75 16.5C2.75 16.1372 2.89414 15.7892 3.15071 15.5326C3.40729 15.276 3.75528 15.1319 4.11812 15.1319H28.8819C29.6381 15.1319 30.25 15.7451 30.25 16.5ZM28.8819 9.61125C29.2447 9.61125 29.5927 9.46711 29.8493 9.21054C30.1059 8.95396 30.25 8.60597 30.25 8.24312C30.25 7.88028 30.1059 7.53229 29.8493 7.27571C29.5927 7.01914 29.2447 6.875 28.8819 6.875H12.3681C12.1885 6.875 12.0106 6.91039 11.8446 6.97914C11.6786 7.0479 11.5278 7.14867 11.4007 7.27571C11.2737 7.40276 11.1729 7.55358 11.1041 7.71957C11.0354 7.88556 11 8.06346 11 8.24312C11 8.42279 11.0354 8.6007 11.1041 8.76668C11.1729 8.93267 11.2737 9.08349 11.4007 9.21054C11.5278 9.33758 11.6786 9.43835 11.8446 9.50711C12.0106 9.57586 12.1885 9.61125 12.3681 9.61125H28.8819Z" fill="white"/>
        </svg>
    </header>
  )
}

export default Header