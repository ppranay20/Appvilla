import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Overview2 from "./components/OverviewP2";
import Users from "./components/Users";
import Pricing from './components/Pricing'
import Team from "./components/Team";
import InstallSection from "./components/InstallSection";
import FAQ from "./components/FAQ";
import Blogs from "./components/Blogs";
import Slider from "./components/Slider";

export default function App(){
  return(
    <div>
      <div className="sticky z-50 top-0">
        <Navbar></Navbar>
      </div>
      <Home></Home>
      <Features></Features>
      <Overview></Overview>
      <Overview2></Overview2>
      <Users></Users>
      <Pricing></Pricing>
      <Team></Team>
      <Slider></Slider>
      <InstallSection></InstallSection>
      <FAQ></FAQ>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  )
}