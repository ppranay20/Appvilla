import overviewimg from '../assets/overviewimg.png'
import { GoDownload } from "react-icons/go";

export default function overview() {
  return (
    <div className='max-w-[520px] m-auto flex flex-col gap-20 items-center my-24 md:flex-row md:max-w-[1000px]'>
        <div className='flex flex-col gap-8'>
            <div className='bg-dpink rounded-lg px-3 py-3 border-[1px] w-12'>
                <GoDownload color='white' size={22} />
            </div>
            <h1 className='font-semibold text-3xl'>1,25,000 Customers Using The Application!</h1>
            <p className='text-[#888888]'>Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow page speeds drive our innovative platform empowers anyone to convert clicks you'll publish your first landing page in minutes</p>
            <button className='px-3 py-2 w-36 text-white border bg-dpink rounded-lg font-bold hover:bg-black transition duration-200'>Get Started</button>
        </div>
        <img src={overviewimg} className='w-[400px]' />
    </div>
  )
}
