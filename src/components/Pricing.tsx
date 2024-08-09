import PricingCard from "./PricingCard";
import { motion } from 'framer-motion'

export default function Pricing() {
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

  return (
    <div className="bg-[#F9F9F9]" id="pricing">
        <div className="max-w-[1170px] m-auto text-center py-20">
            <motion.h4 whileInView={{opacity : 1}} viewport={{once : true}} initial={{opacity : 0}} transition={{duration : 2 , ease : "easeOut"}} className="text-[16px] text-dpink font-semibold">PRICING</motion.h4>    
            <motion.h1 whileInView={{y : 0 , opacity : 1}} initial={{y : 40 , opacity : 0}}  transition={{duration : 0.8 , ease : "linear"}} viewport={{once : true}}  className="text-[35px] font-bold">Pricing Plan</motion.h1>
            <motion.p whileInView={{y : 0 , opacity : 1}} initial={{y : 40 , opacity : 0}} transition={{duration : 0.6 , ease : "linear", delay : 0.2}}  viewport={{once : true}} className="text-[15px] text-[#888888] py-5">There are many variations of passages of Lorem Ipsum available, but the<br></br> majority have suffered alteration in some form.</motion.p>
            <div className="flex py-10 gap-8 md:flex-row flex-col mx-40 md:mx-0">
              <motion.div whileInView="animate" variants={animateCards(0)} initial="initial" viewport={{once : true}}>
                <PricingCard title="Hobby" description="All the basics for starting a new business" price="$12" btn_text="Buy Hobby"></PricingCard>
              </motion.div>
              <motion.div whileInView="animate" variants={animateCards(0.3)} initial="initial" viewport={{once : true}}>
                <PricingCard title="Enterprise" description="All the basics for starting a new business" price="$48" btn_text="Buy Enterprice"></PricingCard>
              </motion.div>
              <motion.div whileInView="animate" variants={animateCards(0.6)} initial="initial" viewport={{once : true}}>
                <PricingCard title="Startup" description="All the basics for starting a new business" price="$32" btn_text="Buy Startup"></PricingCard>
              </motion.div>
              <motion.div whileInView="animate" variants={animateCards(0.9)} initial="initial" viewport={{once : true}}>
                <PricingCard title="Freelancer" description="All the basics for starting a new business" price="$24" btn_text="Buy Freelancer"></PricingCard>
              </motion.div>
            </div>
        </div>
    </div>
  )
}
