import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function TeamCard({image} : any) {
  return (
    <div className="border-[1px] rounded-xl hover:-translate-y-2 cursor-pointer hover:shadow-lg transition ease-out duration-500">
        <img src={image} className="rounded-t-xl" />
        <div className="flex justify-between px-4 py-6 items-center">
            <div className="pt-2">
                <h2 className="text-[18px] pb-1 font-semibold">Leonard Krasner</h2>
                <h5 className="text-[14px] text-dpink font-semibold text-left">Senior Designer</h5>
            </div>
            <div className="flex text-[#5e5e5e] gap-3">
                <FaXTwitter />
                <FaLinkedin />
            </div>
        </div>
    </div>
  )
}
