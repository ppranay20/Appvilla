import logo from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";



export default function Footer(){
    return(
        <div className='bg-[#081828] py-24' id='aboutus'>
            <div className='m-auto max-w-[1100px] text-[#D2D6DC] flex md:flex-row flex-col items-center justify-between'>
                <div className='flex flex-col gap-6'>
                    <img src={logo} className='w-[200px] ' />
                    <p className='text-[14px] font-[500]'>Making the world a better place through <br /> constructing elegant hierarchies.</p>
                    <div className='flex gap-6 py-5'>
                        <div className='hover:text-dpink transition ease-linear duration-200 cursor-pointer'><FaFacebookF size={16} /></div>
                        <div className='hover:text-dpink transition ease-linear duration-200 cursor-pointer'><FaXTwitter size={16} /></div>
                        <div className='hover:text-dpink transition ease-linear duration-200 cursor-pointer'><FaInstagram size={16} /></div>
                        <div className='hover:text-dpink transition ease-linear duration-200 cursor-pointer'><FaLinkedin size={16} /></div>
                        <div className='hover:text-dpink transition ease-linear duration-200 cursor-pointer'><FaYoutube size={16} /></div>
                        <div className='hover:text-dpink transition ease-linear duration-200 cursor-pointer'><FaPinterest size={16} /></div>
                    </div>
                    <p className='text-[15px] font-[500]'>Designed and Developed by UIdeck</p>
                </div>
                <div className='flex flex-col md:gap-8 gap-6'>
                    <h1 className='text-[19px] font-[620] pt-4 md:pt-0'>Solutions</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Marketing</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Analytics</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Commerce</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Insights</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Promotion</li>
                    </ul>
                </div>
                <div className='flex flex-col md:gap-8 gap-6 text-center'>
                    <h1 className='text-[19px] font-[620] pt-8 md:pt-0'>Support</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Pricing</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Documentation</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Guides</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>API Status</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Live Support</li>
                    </ul>
                </div>
                <div className='flex flex-col md:gap-8 gap-6 text-center'>
                    <h1 className='text-[19px] font-[620] pt-8 md:pt-0'>Company</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>About Us</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Our Blogs</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Jobs</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Press</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Contact Us</li>
                    </ul>
                </div>
                <div className='flex flex-col md:gap-8 gap-6 pt-8 md:pt-0 text-center'>
                    <h1 className='text-[19px] font-[620]'>Legal</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Terms & Conditions</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Privacy Policy</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Catering Services</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Customer Relations</li>
                        <li className='text-[16px] cursor-pointer font-[480] hover:text-dpink'>Innovation</li>
                    </ul>
                </div>
            </div>
            <div className='max-w-[1050px] mx-auto mt-20 py-12 text-[#D2D6DC] px-10 border-[2px] border-gray-700 rounded-lg flex md:flex-row flex-col gap-20 items-center'>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-[18px] font-semibold'>Subscribe to our newsletter</h4>
                    <p className='text-[15px] font-semibold'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                </div>
                <div className='flex gap-8'>
                    <input type="text" placeholder='Your email address' className='bg-[#FFFFFF33] text-white py-3 px-5 rounded-lg outline-none' />
                    <button className='border border-transparent bg-dpink text-white rounded-lg px-14 text-[15px] font-semibold hover:text-dpink hover:bg-white transition ease-linear duration-300'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}