import { useState } from "react";
import Team2 from "./Team2";
import { GoDash } from "react-icons/go";
import avatar1 from '../assets/Team2/avatar1.jpg'
import avatar2 from '../assets/Team2/avatar2.jpg'
import avatar3 from '../assets/Team2/avatar3.jpg'
import logo1 from '../assets/Team2/brand1.svg'
import logo2 from '../assets/Team2/brand2.svg'
import logo3 from '../assets/Team2/brand3.svg'


export default function Slider() {
  const [index,setIndex] = useState(0);
  
  return (
    <div className="bg-[#F9F9F9] py-20">
        <div className="max-w-[600px] m-auto overflow-hidden">
          <div className="flex transition-transform duration-500" style={{transform : `translateX(-${index*100}%)`}}>
            <div className="flex-shrink-0 w-full">
              <Team2 logo={logo1} avatar = {avatar1} name={"Musharof Chowdhury"} position={"CEO - Ayro UI"}></Team2>
            </div>
            <div className="flex-shrink-0 w-full">
              <Team2 logo={logo2} avatar = {avatar2} name={"Musharof Chowdhury"} position={"CEO - GrayGrids"}></Team2>
            </div>
            <div className="flex-shrink-0 w-full">
              <Team2 logo={logo3} avatar = {avatar3} name={"Naimur Rahman"} position={"CEO - WpthemesGrid"}></Team2>
            </div>
          </div>
          <div className="flex gap-3 justify-center pt-12">
              <button className="hover:text-dpink focus:text-dpink" onClick={() => setIndex(0)}><GoDash size={40} /></button>
              <button className="hover:text-dpink focus:text-dpink" onClick={() => setIndex(1)}><GoDash size={40} /></button>
              <button className="hover:text-dpink focus:text-dpink" onClick={() => setIndex(2)}><GoDash size={40} /></button>
          </div>
        </div>
    </div>
  )
}
