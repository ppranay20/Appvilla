import Questions from "./Questions";
import {data} from "../assets/faqData";
import { useState } from "react";
import {motion} from 'framer-motion'

export default function FAQ() {
    const [isOpen,setIsOpen] = useState<boolean | number>(false);

    const handleClick = (index : number) => {
        if(index === isOpen) setIsOpen(false);
        else setIsOpen(index);
    }

    return (
    <div className="bg-white">
        <div className="max-w-[1170px] m-auto text-center py-20">
            <motion.h4 whileInView={{opacity : 1}} viewport={{once : true}} initial={{opacity : 0}} transition={{duration : 2 , ease : "easeOut"}} className="text-[16px] text-dpink font-semibold">FAQ</motion.h4>    
            <motion.h1 whileInView={{y : 0 , opacity : 1}} initial={{y : 40 , opacity : 0}}  transition={{duration : 0.8 , ease : "linear"}} viewport={{once : true}} className="text-[35px] font-bold">Frequently Asked Questions</motion.h1>
            <motion.p whileInView={{y : 0 , opacity : 1}} initial={{y : 40 , opacity : 0}} transition={{duration : 0.8 , ease : "linear", delay : 0.2}}  viewport={{once : true}} className="text-[15px] text-[#888888] py-5">There are many variations of passages of Lorem Ipsum available, but the <br></br> majority have suffered alteration in some form.</motion.p>
            <div className="flex py-8 gap-3 flex-col mx-40 md:mx-0">
                {
                    data.map((item,index) => {
                        return <Questions key={index} title={item.title} description={item.description} num={index} isOpen={index === isOpen} handleClick = {() => handleClick(index)} />
                    })
                }
            </div>
        </div>
    </div>
    )
}
