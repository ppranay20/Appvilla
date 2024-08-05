import { PiMicrophoneStage } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

interface FAQProps{
    title : string,
    num : string,
    description : string
}

export default function Questions({title,num,description} : FAQProps) {
    const [isOpen,setIsOpen] = useState<boolean>(false);

  return (
    <div>
        <div className="border-[1px] rounded-md flex w-[1170px] py-3.5 justify-between items-center px-3 cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
            <div className="flex items-center gap-4 px-3 text-[16px] font-semibold">
                <p className="border-[1px] rounded-full px-3 py-2">{num}</p>
                <h2>{title}</h2>
            </div>
            <div className="text-[#888888] cursor-pointer">
                {
                    isOpen ? <PiMicrophoneStage size={18} /> : <FiPlus size={18} />
                } 
            </div>
        </div>
        {
            isOpen ?
             <div className="bg-[#F9F9F9] px-3 py-3 border-[1px] border-t-0">
                <p className="text-[#777777] text-[15px]">{description}</p>
             </div> 
            : <></>
        }
    </div>
  )
}
