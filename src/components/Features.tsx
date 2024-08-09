import { LiaCloudUploadAltSolid } from "react-icons/lia";
import { IoLockOpen } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsDatabaseCheck } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import FeatureCard from "./FeatureCard";
import { animate, easeOut, motion } from 'framer-motion';

export default function Features(){
    const animateCards = (delay : number) => {
        return {
            initial : {
                y : 20,
                opacity : 0
            },
            animate : {
                y : 0,
                opacity : 1,
                transition : {
                    duration : 0.6,
                    delay : delay
                }
            }
        }
    }

    return(
        <div className="bg-[#f9f9f9]" id="features">           
            <div className="max-w-[1100px] py-20 m-auto">
                <div className="text-center">
                    <motion.h4 whileInView={{opacity : 1}} viewport={{once : true}} initial={{opacity : 0}} transition={{duration : 2 , ease : easeOut}} className="text-dpink py-2 font-bold">FEATURES</motion.h4>
                    <motion.h1 whileInView={{y : 0 , opacity : 1}} initial={{y : 40 , opacity : 0}}  transition={{duration : 0.8 , ease : "linear"}} viewport={{once : true}} className="text-[34px] font-bold leading-10 py-3">Your Experience Gets Better <br /> And Better Over Time.</motion.h1>
                    <motion.p whileInView={{y : 0 , opacity : 1}} initial={{y : 40 , opacity : 0}} transition={{duration : 0.6 , ease : "linear", delay : 0.2}}  viewport={{once : true}} className="text-[15px] text-[#888888] py-4">There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form.</motion.p>
                </div>
                <div className="md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-12 flex flex-col items-center gap-12 my-8">
                    <motion.div whileInView="animate" variants={animateCards(0)} initial="initial" viewport={{once : true}}>
                        <FeatureCard icon={<LiaCloudUploadAltSolid size={24} color="white" />} title="Push to Deploy" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    </motion.div>
                    <motion.div whileInView="animate" variants={animateCards(0.3)} initial="initial" viewport={{once : true}}>
                        <FeatureCard icon={<IoLockOpen size={24} color="white" />} title="SSL Certificates" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    </motion.div>
                    <motion.div whileInView="animate" variants={animateCards(0.6)} initial="initial" viewport={{once : true}}>
                        <FeatureCard icon={<TfiReload size={24} color="white" />} title="Simple Queues" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    </motion.div>
                    <motion.div whileInView="animate" variants={animateCards(0.3)} initial="initial" viewport={{once : true}}>
                        <FeatureCard icon={<MdOutlineSecurity size={24} color="white" />} title="Advanced Security" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    </motion.div>
                    <motion.div whileInView="animate" variants={animateCards(0.6)} initial="initial" viewport={{once : true}}>
                        <FeatureCard icon={<IoSettingsOutline size={24} color="white" />} title="Powerful API" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    </motion.div>
                    <motion.div whileInView="animate" variants={animateCards(0.9)} initial="initial" viewport={{once : true}}>
                        <FeatureCard icon={<BsDatabaseCheck size={24} color="white" />} title="Database Backups  " description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
{/* <LiaCloudUploadAltSolid />
<PiLockKeyThin />
<TfiReload />
<IoSettingsOutline />
<BsDatabaseCheck />
<MdOutlineSecurity /> */}