import { PiMicrophoneStage } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

interface FAQProps{
    title : string,
    num : number,
    description : string
    isOpen : boolean,
    handleClick : () => void
}

export default function Questions({title,num,description,isOpen,handleClick} : FAQProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height,setHeight] = useState<string>("0px");

    useEffect(() => {
        setHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : "0px");
    },[isOpen])

  return (
    <div>
        <div className={`border-[1px] rounded-md rounded-b-none flex max-w-[1170px] py-3.5 justify-between items-center px-3 cursor-pointer ${isOpen ? "text-white bg-dpink transition ease-out duration-300" : ""}`} onClick={handleClick}>
            <div className="flex items-center gap-4 px-3 text-[16px] font-semibold">
                <p className={`border-[1px] rounded-full px-3 py-2 text-[14px] ${isOpen ? "bg-white text-black" : ""} `}>0{num+1}</p>
                <h2>{title}</h2>
            </div>
            <div className={`text-[#888888] cursor-pointer ${isOpen ? "text-white" : ""}`}>
                {
                    isOpen ? <PiMicrophoneStage size={18} /> : <FiPlus size={18} />
                } 
            </div>
        </div>
        <div className="transition-all duration-500 ease-out overflow-hidden" style={{height : height}} ref={contentRef}>
            <div className="bg-[#F9F9F9] px-10 py-8 border-[1px] border-t-0 rounded-b-lg">
                {
                    description.split('\n').map((text,index) => (
                        <div><p key={index} className="text-[#777777] text-[16px] text-left">{text}</p>{(description.split("\n").length !== (index+1) ? <br></br> : <></>)}</div>
                    ))
                }
            </div> 
        </div>
    </div>
  )
}
