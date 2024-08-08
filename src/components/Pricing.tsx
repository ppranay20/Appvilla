import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <div className="bg-[#F9F9F9]" id="pricing">
        <div className="max-w-[1170px] m-auto text-center py-20">
            <h4 className="text-[16px] text-dpink font-semibold">PRICING</h4>    
            <h1 className="text-[35px] font-bold">Pricing Plan</h1>
            <p className="text-[15px] text-[#888888] py-5">There are many variations of passages of Lorem Ipsum available, but the<br></br> majority have suffered alteration in some form.</p>
            <div className="flex py-10 gap-8 md:flex-row flex-col mx-40 md:mx-0">
                <PricingCard title="Hobby" description="All the basics for starting a new business" price="$12" btn_text="Buy Hobby"></PricingCard>
                <PricingCard title="Freelancer" description="All the basics for starting a new business" price="$24" btn_text="Buy Freelancer"></PricingCard>
                <PricingCard title="Startup" description="All the basics for starting a new business" price="$32" btn_text="Buy Startup"></PricingCard>
                <PricingCard title="Enterprise" description="All the basics for starting a new business" price="$48" btn_text="Buy Enterprice"></PricingCard>
            </div>
        </div>
    </div>
  )
}
