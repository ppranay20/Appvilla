import {motion} from 'framer-motion'

export default function Users() {
    const vairant = (delay : number) => {
        return {
            initial : {
                y : 40,
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
    <div className="bg-dpink">
        <div className="md:max-w-[780px] max-w-[480px] m-auto text-white flex flex-col items-center gap-4 py-20">
            <h1 className="text-[35px] font-bold">Trusted by developers from over 80 planets</h1>
            <p className="text-md">There are many variations of passages of Lorem Ipsum available, but the majority.</p>
            <div className="flex md:flex-row w-full md:justify-between gap-y-10 items-center px-24 md:my-6 my-2 flex-col">
                <motion.div variants={vairant(0)} whileInView="animate" initial="initial" viewport={{once : true}}>
                    <h1 className="text-[35px] font-bold">100%</h1>
                    <p className="text-lg">Satisfaction</p>
                </motion.div>
                <motion.div variants={vairant(0.4)} whileInView="animate" initial="initial" viewport={{once : true}}>
                    <h1 className="text-[35px] font-bold">120K</h1>
                    <p className="text-lg">Happy Users</p>
                </motion.div >
                <motion.div variants={vairant(0.8)} whileInView="animate" initial="initial" viewport={{once : true}}>
                    <h1 className="text-[35px] font-bold">125k+</h1>
                    <p className="text-lg">Downloads</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}
