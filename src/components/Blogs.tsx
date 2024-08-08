import BlogCard from "./BlogCard";
import blog1 from '../assets/BlogsImage/blog-1.jpg'
import blog2 from '../assets/BlogsImage/blog-2.jpg'
import blog3 from '../assets/BlogsImage/blog-3.jpg'
import avatar1 from '../assets/BlogsImage/avatar1.jpg'
import avatar2 from '../assets/BlogsImage/avatar2.jpg'
import avatar3 from '../assets/BlogsImage/avatar3.jpg'

export default function Blogs() {
  return (
    <div className="bg-[#F9F9F9]" id="blog">
        <div className="max-w-[1170px] m-auto text-center py-20">
            <h4 className="text-[16px] text-dpink font-semibold">Blogs</h4>    
            <h1 className="text-[35px] font-bold">Our Latest News</h1>
            <p className="text-[15px] text-[#888888] py-5">There are many variations of passages of Lorem Ipsum available, but the <br></br>majority have suffered alteration in some form.</p>
            <div className="flex py-10 gap-8 md:flex-row flex-col mx-40 md:mx-0">
                <BlogCard img={blog1} type="Blog" title="Boost your conversion rate" description="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna." avatar={avatar1} AuthorName="Roel Aufderhar" date="Mar 15,2023" time="5 min read"></BlogCard>
                <BlogCard img={blog2} type="Video" title="How to use search engine" description="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna." avatar={avatar2} AuthorName="Jenifer Zuliya" date="Feb 10,2023" time="7 min read"></BlogCard>
                <BlogCard img={blog3} type="Marketing" title="Awesome ways to boost sales" description="Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna." avatar={avatar3} AuthorName="Roel Aufderhar" date="Jan 20,2023" time="6 min read"></BlogCard>
            </div>
        </div>
    </div>
  )
}
