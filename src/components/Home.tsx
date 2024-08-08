import homeImage from '../assets/homeImage.png'
import { LiaApple } from "react-icons/lia";
import { BiLogoPlayStore } from "react-icons/bi";
import { motion } from "framer-motion"
import '../App.css';

export default function Home(){
    return(
        <div className='bg-dpink w-full'>
            <div className='max-w-[1100px] m-auto h-full flex md:flex-row flex-col py-16 items-center'>
                <motion.div animate={{ x: 40 }} transition={{ ease: "easeOut", duration: 0.8 }} className='max-h-full flex flex-col md:items-start items-center text-white gap-10'>
                    <h2 className='text-[39px] font-bold leading-10'>A Powerful App For<br></br> Your Business.</h2>
                    <p className='text-[17px] text-bold max-w-[500px] text-center'>From open source to pro services, Piqes helps you to build,deploy,test and monitor apps.</p>
                    <div className='flex gap-5'>
                        <button className='apple-icon flex gap-2 text-md rounded-lg bg-white text-dpink font-semibold border-white border-2  items-center py-3 px-7 hover:bg-black hover:text-white hover:border-transparent'>
                            <div>
                                <LiaApple size={22} />
                            </div>
                            <p>App Store</p>
                        </button>
                        <button className='flex gap-2 text-md rounded-lg bg-dpink text-white font-semibold border-white border-2 items-center py-3 px-7 hover:bg-white hover:text-dpink'>
                            <BiLogoPlayStore size={22} />
                            <p>Google Play</p>
                        </button>
                    </div>
                </motion.div>
                <motion.img animate={{ x: -50 }} transition={{ ease: "easeOut", duration: 0.8 }} src={homeImage} className='md:max-w-[650px] max-w-[400px] my-6 md:my-0 relative left-20'  />
            </div>
        </div>
    )
}