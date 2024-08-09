import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import ScrollNav from './ScrollNav'
import {Link} from 'react-scroll'
import { IoReorderThree } from "react-icons/io5";


export default function Navbar(){
    const [navColor,setNavColor] = useState<boolean>(false)
    const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false);
    const [height,setHeight] = useState<string>("0px");
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHeight(isMenuOpen ? `${navRef.current?.scrollHeight}px` : "0px")
    },[isMenuOpen])

    const changeColor = () => {
        if(window.scrollY > 0){
            setNavColor(true);
        }
        else{
            setNavColor(false);
        }
    }

    window.addEventListener('scroll',changeColor)

    return(
            navColor ? <ScrollNav></ScrollNav> : 
        <div className="bg-[#ff6b81]">
            <nav className='flex justify-between px-10 py-3 md:px-24 md:py-4 text-white font-noto text-md items-center font-roboto overflow-x-hidden'>
                <img src={logo} className='w-20 h-16 md:w-[150px] md:h-[60px]' />
                <div className='md:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IoReorderThree size={40} />
                </div>
                <ul className='md:flex gap-12 font-medium items-center text-md hidden '>
                    <Link to='home' spy={true} smooth={true} duration={1000} offset={-100} className='cursor-pointer'>Home</Link>
                    <Link to='features' spy={true} smooth={true} duration={1000} offset={-50} className='cursor-pointer'>Features</Link>
                    <Link to='overview' spy={true} smooth={true} duration={1000} offset={-100} className='cursor-pointer'>Overview</Link>
                    <Link to='pricing' spy={true} smooth={true} duration={1000} offset={-50} className='cursor-pointer'>Pricing</Link>
                    <Link to='blog' spy={true} smooth={true} duration={1000} offset={-50} className='cursor-pointer'>Blog</Link>
                    <Link to='aboutus' spy={true} smooth={true} duration={1000} offset={-50} className='cursor-pointer'>About Us</Link>
                </ul>
                <button className='text-md font-semibold md:block border-white border-2 rounded-lg px-8 py-2 hover:text-[#ff6b81] hover:bg-white sm:block hidden'>Get It Now</button>
            </nav>
            <div className='absolute right-0 left-0 transition-all duration-500 ease-out overflow-hidden' style={{height:height}} ref={navRef}>
                <div className='md:hidden border bg-white flex flex-col font-medium gap-3 items-center rounded-md mx-12 py-4'>
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

