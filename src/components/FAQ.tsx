import Questions from "./Questions";

export default function FAQ() {
    return (
    <div className="bg-white">
        <div className="max-w-[1170px] m-auto text-center py-20">
            <h4 className="text-[16px] text-dpink font-semibold">FAQ</h4>    
            <h1 className="text-[35px] font-bold">Frequently Asked Questions</h1>
            <p className="text-[15px] text-[#888888] py-5">There are many variations of passages of Lorem Ipsum available, but the <br></br> majority have suffered alteration in some form.</p>
            <div className="flex py-10 gap-8 flex-col mx-40 md:mx-0">
                <Questions title={"How Do I Contact Customer Services?"} num="01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."></Questions>
                <Questions title={"How Do I Contact Customer Services?"} num="01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."></Questions>
            </div>
        </div>
    </div>
    )
}
