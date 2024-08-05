import { CiCircleCheck } from "react-icons/ci";

interface PricingProps{
    title : string,
    description : string,
    price : string,
    btn_text : string
}

export default function PricingCard({title,description,price,btn_text} : PricingProps) {
  return (
    <div className="border bg-white rounded-lg flex flex-col gap-5 text-left px-6 py-4 shadow-sm hover:-translate-y-2 cursor-pointer hover:shadow-lg transition ease-out duration-500">
        <h3 className="text-[18px] font-[610]">{title}</h3>
        <p className="text-[#888888] text-[14px]">{description}</p>
        <p className="text-[30px] font-bold">{price}<span className="text-[#888888] font-light text-[16px]">/mo</span></p>
        <button className="border bg-[#081828] py-3 text-center font-semibold text-[14px] px-1 rounded-md text-white my-2 hover:bg-dpink hover:text-white transition duration-200 ease-linear">{btn_text}</button>
        <hr className="-mx-6" />
        <div>
            <h3 className="py-2 text-[14px] font-semibold">WHAT'S INCLUDED</h3>
            <div className="flex gap-2 items-center py-2">
                <div className="text-dpink">
                    <CiCircleCheck size={18} />
                </div>
                <p className="text-[#888888] text-[14px]">Cras justo odio.</p>
            </div>
            <div className="flex gap-2 items-center py-2">
                <div className="text-dpink">
                    <CiCircleCheck size={18} />
                </div>
                <p className="text-[#888888] text-[14px]">Dapibus ac facilisis in.</p>
            </div>
            <div className="flex gap-2 items-center py-2">
                <div className="text-dpink">
                    <CiCircleCheck size={18} />
                </div>
                <p className="text-[#888888] text-[14px]">Morbi leo risus.</p>
            </div>
            <div className="flex gap-2 items-center py-2">
                <div className="text-dpink">
                    <CiCircleCheck size={18} />
                </div>
                <p className="text-[#888888] text-[14px]">Potenti felis, in cras ligula.</p>
            </div>
            
        </div>
    </div>
  )
}
