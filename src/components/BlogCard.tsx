import { GoDotFill } from "react-icons/go";


interface BlogProps{
    img : string,
    type : string,
    title : string,
    description : string,
    avatar : string,
    AuthorName : string,
    date : string,
    time : string
}

export default function BlogCard({img,type,title,description,avatar,AuthorName,date,time} : BlogProps) {
  return (
    <div className="border-[1px] shadow-lg rounded-md overflow-hidden">
        <img src={img} className="rounded-md rounded-b-none cursor-pointer hover:scale-110 transition duration-500 ease-out" />
        <div className="flex px-7 flex-col items-start py-8">
            <h2 className="text-[15px] text-dpink font-semibold cursor-pointer">{type}</h2>
            <h4 className="text-[20px] font-semibold py-2 hover:text-dpink cursor-pointer">{title}</h4>
            <p className="text-[15px] text-[#888888] text-left py-2">{description}</p>
            <div className="flex  items-center gap-6 pt-6">
                <img src={avatar} className="w-12 rounded-full" />
                <div className="text-left">
                    <h1 className="text-[15px] font-semibold hover:text-dpink cursor-pointer">{AuthorName}</h1>
                    <div className="flex text-[14px] text-[#888888] py-1 items-center font-semibold gap-2">
                        <p className="hover:text-dpink cursor-pointer">{date}</p>
                        <div className="text-[#D2D2D2]">
                            <GoDotFill size={10}  />
                        </div>
                        <p className="hover:text-dpink cursor-pointer">{time}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
