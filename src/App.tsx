import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Overview2 from "./components/OverviewP2";
import Users from "./components/Users";

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
      <Footer></Footer>
    </div>
  )
}