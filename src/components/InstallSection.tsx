import { LiaApple } from "react-icons/lia";
import { BiLogoPlayStore } from "react-icons/bi";
import { motion } from 'framer-motion'

export default function InstallSection() {
  return (
    <div className="bg-dpink">
        <div className="max-w-[800px] m-auto py-24 text-center flex gap-10 flex-col items-center">
            <motion.h1 whileInView={{y : 0 , opacity : 1}} initial={{y : 40 , opacity : 0}}  transition={{duration : 0.8 , ease : "linear"}} viewport={{once : true}}  className="text-[39px] font-bold text-white">Install Appvilla and Start Using</motion.h1>
            <motion.p whileInView={{y : 0 , opacity : 1}} initial={{y : 40 , opacity : 0}}  transition={{duration : 0.8 , ease : "linear"}} viewport={{once : true}} className="text-white text-[15px] font-normal">There are many variations of passages of Lorem Ipsum available, but the <br></br> majority have suffered alteration in some form, by injected humour, or <br></br> randomised words which don't look even slightly believable.</motion.p>
            <motion.div whileInView={{y : 0 , opacity : 1}} initial={{y : 40 , opacity : 0}} transition={{duration : 0.8 , ease : "linear", delay : 0.2}}  viewport={{once : true}} className='flex gap-5'>
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
            </motion.div>
        </div>
    </div>
  )
}
