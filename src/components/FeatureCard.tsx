import motion from 'framer-motion'

interface Card{
    icon : React.ReactNode,
    title : string,
    description : string
}


export default function FeatureCard({icon,title,description} : Card){
    const animateCards = (delay : number) => {
        return {
            initial : {
                y : -20,
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

    return(
        <div className="max-w-[400px] border-[1px] rounded-md px-5 py-5 bg-white hover:shadow-lg hover:-translate-y-1.5 cursor-pointer transition ease-out duration-300">
            <div className="border w-14 bg-dpink py-4 px-4 my-2 rounded-md shadow-lg">
                {icon}
            </div>
            <h1 className="text-[18px] font-inter py-3 font-medium">{title}</h1>
            <p className="font-[15px] text-[#888888] pb-6">{description}</p>
        </div>
    )
}