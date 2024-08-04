import overviewimg from "../assets/overviewimg2.png"
import { CgCollage } from "react-icons/cg";


export default function Overview2() {
  return (
    <div className="md:max-w-[1050px] max-w-[520px] m-auto md:flex-row flex flex-col md:gap-40 gap-20 my-32">
        <img src={overviewimg} className="w-[400px]" />
        <div className="flex flex-col gap-6 md:pt-24">
            <div className="border bg-dpink px-3 py-3 w-12 rounded-lg">
                <CgCollage size={22} color="white" />
            </div>
            <h1 className="text-3xl font-semibold">Seamless Loyalty</h1>
            <p className="font-[15px] text-[#888888]">Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow page speeds drive our innovative platform empowers anyone to convert clicks ou'll publish your first landing page in minutes.</p>
            <button className='px-3 py-2 w-36 text-white border bg-dpink rounded-lg font-bold hover:bg-black transition duration-200'>Get Started</button>
        </div>
    </div>
  )
}
