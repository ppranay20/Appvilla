import logo2 from '../assets/logo2.png'

export default function ScrollNav(){
    return(
        <div className="bg-white w-full shadow-sm">
            <nav className='flex justify-between px-32 py-6 text-black font-noto text-md font-roboto overflow-x-hidden'>
                <img src={logo2} className='md:w-[150px] w-[50px] cursor-pointer' />
                <ul className='flex gap-12 font-[400] items-center text-md'>
                    <a href='#' className='hover:text-dpink transition ease-in duration-400 focus:text-dpink'>Home</a>
                    <a href='#' className='hover:text-dpink transition ease-in duration-400 focus:text-dpink'>Features</a>
                    <a href='#' className='hover:text-dpink transition ease-in duration-400 focus:text-dpink'>Overview</a>
                    <a href='#' className='hover:text-dpink transition ease-in duration-400 focus:text-dpink'>Pricing</a>
                    <a href='#' className='hover:text-dpink transition ease-in duration-400 focus:text-dpink'>Blog</a>
                    <a href='#' className='hover:text-dpink transition ease-in duration-400 focus:text-dpink'>About Us</a>
                </ul>
                <button className='text-md bg-dpink font-semibold transition ease-in duration-400 md:block border-2 rounded-lg px-8 py-2 hover:bg-black text-white' >Get It Now</button>
            </nav>
        </div>
    )
}