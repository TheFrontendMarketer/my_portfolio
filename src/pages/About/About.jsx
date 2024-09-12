import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

const About = () => {
  return (
    <>
        <Navbar />
        <section className="bg-siteBgColor text-slate-300">
            <div className="siteContainer">
                <h1 className="text-6xl md:text-7xl pt-10 text-siteOrange">From Marketer to Developer</h1>
                <div className="flex flex-col-reverse md:flex-row md:items-center">
                    <p className="text-xl mt-10 md:w-[40rem] leading-8">
                        My adventure into web development began while I was working as a digital marketer. One day, I learned our company was using Python and was immediately intrigued. What was it? How was it being used? Where can I learn Python? As I started exploring the world of programming, I discovered its incredible power for crafting websites. It was like finding the thing I was meant to do all along! I dove headfirst into Python/Django and soon found myself building a small web project. It started my journey of discovery and creation.
                    </p>
                    <div className="flex justify-center">
                        <img className="w-[10rem] md:ml-20 mt-8 md:mt-0" src="/SiteImages/python_logo.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-20 items-center">
                    <img className="w-64 md:mr-20 mb-8 md:mb-0" src="/SiteImages/closed_sign.png" alt="" />
                    <p className="text-xl leading-8">
                        Just as I was starting to feel confident in my coding skills, the world turned upside down with the COVID-19 pandemic. It was a whirlwind of events, including a job change and an unexpected company closure. But I knew I had to keep moving forward. So, I put coding on hold and focused on finding a new marketing opportunity. I found a great fit with a local agency, but ultimately, my heart led me to stay home with my little one. Those 10 months as a stay-at-home parent were an incredible gift, a precious time I'll cherish forever.
                    </p>
                </div>
                <div className="flex flex-col-reverse md:flex-row mt-20 items-center">
                    <p className="text-xl leading-8">
                        I was incredibly lucky to find a fantastic job with my current company, and I'm so grateful for the amazing team I work with. In 2023, I decided it was time to dive back into coding. I wanted to focus all my free time to learning about front-end web devlopment. Since then, I've been on a journey, building personal projects, freelancing, and sharing my passion for front-end web development with the world through content creation. 
                    </p>
                    <img className="w-64 md:ml-20 mb-8 md:mb0" src="/SiteImages/white_dev_icon.png" alt="" />
                </div>
                <p className="text-xl leading-8 mt-20">
                    Every day, I'm excited to continue my journey, honing my skills and bringing my unique perspective/skills as a digital marketer to the world of web development. The future is bright, and I can't wait to see where this adventure takes me!
                </p>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default About