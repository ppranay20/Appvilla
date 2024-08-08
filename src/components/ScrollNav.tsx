import { Link } from 'react-scroll'
import logo2 from '../assets/logo2.png'
import { useEffect, useRef, useState } from 'react'
import { IoReorderThree } from "react-icons/io5";

export default function ScrollNav(){
    const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false);
    const [height,setHeight] = useState<string>("0px");
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHeight(isMenuOpen ? `${navRef.current?.scrollHeight}px` : "0px")
    },[isMenuOpen])

    return(
        <div className="bg-white w-full shadow-sm">
            <nav className='flex justify-between px-10 py-3 md:px-24 md:py-4 text-black font-noto text-md items-center font-roboto overflow-x-hidden'>
                <img src={logo2} className='w-20 h-16 md:w-[120px] md:h-[60px]' />
                <div className='md:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IoReorderThree size={40} />
                </div>
                <ul className='md:flex gap-12 font-[400] items-center text-md hidden'>
                    <Link to='home' spy={true} smooth={true} duration={1000} offset={-100} className='hover:text-dpink transition cursor-pointer ease-in duration-400 focus:text-dpink'>Home</Link>
                    <Link to='features' spy={true} smooth={true} duration={1000} offset={-50} className='hover:text-dpink transition cursor-pointer ease-in duration-400 focus:text-dpink'>Features</Link>
                    <Link to='overview' spy={true} smooth={true} duration={1000} offset={-100} className='hover:text-dpink transition cursor-pointer ease-in duration-400 focus:text-dpink'>Overview</Link>
                    <Link to='pricing' spy={true} smooth={true} duration={1000} offset={-50} className='hover:text-dpink transition cursor-pointer ease-in duration-400 focus:text-dpink'>Pricing</Link>
                    <Link to='blog' spy={true} smooth={true} duration={1000} offset={-50} className='hover:text-dpink transition cursor-pointer ease-in duration-400 focus:text-dpink'>Blog</Link>
                    <Link to='aboutus' spy={true} smooth={true} duration={1000} offset={-50} className='hover:text-dpink transition cursor-pointer ease-in duration-400 focus:text-dpink'>About Us</Link>
                </ul>
                <button className='text-md bg-dpink font-semibold transition ease-in duration-400 md:block border-2 rounded-lg px-8 py-2 hover:bg-black text-white sm:block hidden'>Get It Now</button>
            </nav>
            <div className='absolute right-0 left-0 transition-all rounded-t-0 duration-500 ease-out overflow-hidden' style={{height:height}} ref={navRef}>
                <div className='md:hidden border bg-white flex flex-col font-medium gap-3 items-center rounded-md rounded-t-none mx-12 py-4'>
                    <Link to='home' spy={true} smooth={true} duration={1000} offset={-100} className='cursor-pointer hover:text-dpink'>Home</Link>
                    <Link to='features' spy={true} smooth={true} duration={1000} offset={-50} className='cursor-pointer hover:text-dpink'>Features</Link>
                    <Link to='overview' spy={true} smooth={true} duration={1000} offset={-100} className='cursor-pointer hover:text-dpink'>Overview</Link>
                    <Link to='pricing' spy={true} smooth={true} duration={1000} offset={-50} className='cursor-pointer hover:text-dpink'>Pricing</Link>
                    <Link to='blog' spy={true} smooth={true} duration={1000} offset={-50} className='cursor-pointer hover:text-dpink'>Blog</Link>
                    <Link to='aboutus' spy={true} smooth={true} duration={1000} offset={-50} className='cursor-pointer hover:text-dpink'>About Us</Link>
                </div>
            </div>
        </div>
    )
}