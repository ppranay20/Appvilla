import { LiaCloudUploadAltSolid } from "react-icons/lia";
import { IoLockOpen } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsDatabaseCheck } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import FeatureCard from "./FeatureCard";
import { motion } from 'framer-motion';

export default function Features(){
    return(
        <div className="w-full bg-[#f9f9f9]">           
            <div className="w-[1100px] py-20 m-auto">
                <div className="text-center">
                    <motion.h4 initial={{opacity : 0}} whileInView={{opacity : 1}} viewport={{amount : 'all'}} className="text-dpink py-2 font-bold">FEATURES</motion.h4>
                    <h1 className="text-[34px] font-bold leading-10 py-3">Your Experience Gets Better <br /> And Better Over Time.</h1>
                    <p className="text-[15px] text-[#888888] py-4">There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration in some form.</p>
                </div>
                <div className="grid grid-cols-3 gap-x-10 gap-y-12 my-8">
                    <FeatureCard icon={<LiaCloudUploadAltSolid size={24} color="white" />} title="Push to Deploy" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    <FeatureCard icon={<IoLockOpen size={24} color="white" />} title="SSL Certificates" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    <FeatureCard icon={<TfiReload size={24} color="white" />} title="Simple Queues" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    <FeatureCard icon={<MdOutlineSecurity size={24} color="white" />} title="Advanced Security" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    <FeatureCard icon={<IoSettingsOutline size={24} color="white" />} title="Powerful API" description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
                    <FeatureCard icon={<BsDatabaseCheck size={24} color="white" />} title="Database Backups  " description="It is a long established fact that a reader will be distracted by the readable content of a page at its layout."></FeatureCard>
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