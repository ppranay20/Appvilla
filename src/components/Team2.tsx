
interface teamProps{
  logo : string,
  avatar : string,
  name : string,
  position : string
}

export default function Team2({logo,avatar,name,position} : teamProps) {
  return (
    <div className='flex items-center flex-col gap-6'>
        <img src={logo} className='w-44 h-20' />
        <p className='text-[18px] text-center font-medium'>"It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point of <br /> using Lorem Ipsum is that it has"</p>
        <div className='flex flex-col items-center'>
          <img src={avatar} className='w-16 rounded-full my-2'  />
          <h2 className='text-[19px] font-medium py-1'>{name}</h2>
          <p className='text-[12px] font-medium text-[#888888]'>{position}</p>
        </div>
    </div>
  )
}
