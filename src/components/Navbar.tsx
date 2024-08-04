import { useState } from 'react'
import logo from '../assets/logo.png'
import ScrollNav from './ScrollNav'

export default function Navbar(){
    const [navColor,setNavColor] = useState<boolean>(false)

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
        navColor ? <div className='transition ease-in duration-700'><ScrollNav></ScrollNav></div> : 
        <div className="bg-[#ff6b81] w-full">
            <nav className='flex justify-between px-32 py-6  text-white font-noto text-md font-roboto overflow-x-hidden'>
                <img src={logo} className='md:w-[150px] w-[50px]' />
                <ul className='flex gap-12 font-semibold items-center text-md'>
                    <a href='#'>Home</a>
                    <a href='#'>Features</a>
                    <a href='#'>Overview</a>
                    <a href='#'>Pricing</a>
                    <a href='#'>Blog</a>
                    <a href='#'>About Us</a>
                </ul>
                <button className='text-md font-semibold md:block border-white border-2 rounded-lg px-8 py-2 hover:text-[#ff6b81] hover:bg-white' >Get It Now</button>
            </nav>
        </div>
    )
}

