import TeamCard from "./TeamCard";
import team1 from '../assets/TeamImage/team1.jpg'
import team2 from '../assets/TeamImage/team2.jpg'
import team3 from '../assets/TeamImage/team3.jpg'

export default function Team() {
  return (
    <div className="bg-white" id="team">
        <div className="max-w-[1170px] m-auto text-center py-20">
            <h4 className="text-[16px] text-dpink font-semibold">PRICING</h4>    
            <h1 className="text-[35px] font-bold">Pricing Plan</h1>
            <p className="text-[15px] text-[#888888] py-5">There are many variations of passages of Lorem Ipsum available, but the<br></br> majority have suffered alteration in some form.</p>
            <div className="flex py-10 gap-8 md:flex-row flex-col mx-40 md:mx-8">
                <TeamCard image={team1}></TeamCard>
                <TeamCard image={team2}></TeamCard>
                <TeamCard image={team3}></TeamCard>
            </div>
        </div>
    </div>
  )
}
