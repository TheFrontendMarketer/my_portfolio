import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="bg-siteBgColor text-slate-300 font-poppins">
        <div className="siteContainer mb-20">
          <h1 className="text-6xl md:text-7xl pt-10 text-[#7691ff]">
            Projects
          </h1>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-center mt-20">
              <div className="w-72">
                <img src="/SiteImages/tfm_logo.png" alt="" />
              </div>
              <div className="bg-white w-72 md:w-96">
                <h2 className="text-siteOrange font-bold text-center mt-4 mb-2 text-2xl">
                  The Frontend Marketer
                </h2>
                <p className="text-black ml-6 mr-6 text-center">
                  A custom blog made with Astro, Tailwind CSS, and Markdown. The
                  site is hosted on Netlify and uses a custom domain.
                  <br />
                  <br />
                </p>
                <a
                  className="flex flex-row justify-center items-center border-2 border-[#7691ff] rounded ml-8 mr-8 mt-4"
                  href="https://thefrontendmarketer.com/"
                  target="_blank"
                >
                  <img
                    className="w-10 pt-1 pb-1"
                    src="/SiteImages/Untitled design (36).webp"
                    alt=""
                  />
                  <p className="text-[#7691ff] ml-3">View Site</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-center mt-20">
              <div className="w-72">
                <img src="/SiteImages/locals.webp" alt="" />
              </div>
              <div className="bg-white w-72 md:w-96">
                <h2 className="text-siteOrange font-bold text-center mt-4 mb-2 text-2xl">
                  Local Buzz Brewing
                </h2>
                <p className="text-black ml-6 mr-6 text-center">
                  A custom designed local brewery website built with Vite,
                  React, Tailwind CSS, and GSAP.
                </p>
                <a
                  className="flex flex-row justify-center items-center border-2 border-[#7691ff] rounded ml-8 mr-8 mt-4"
                  href="https://local-buzz-brewing.netlify.app/"
                  target="_blank"
                >
                  <img
                    className="w-10 pt-1 pb-1"
                    src="/SiteImages/Untitled design (36).webp"
                    alt=""
                  />
                  <p className="text-[#7691ff] ml-3">View Site</p>
                </a>
                <a
                  className="flex flex-row justify-center items-center border-2 border-[#7691ff] rounded ml-8 mr-8 mt-4 mb-4 md:mb-0"
                  href="https://github.com/mb8504/local_buzz_brewing"
                  target="_blank"
                >
                  <img
                    className="w-10 pt-1 pb-1"
                    src="/SiteImages/github-mark-purple.png"
                    alt=""
                  />
                  <p className="text-[#7691ff] ml-3">View Code</p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-center mt-20">
              <div className="w-72">
                <img src="/SiteImages/coffee_card.webp" alt="" />
              </div>
              <div className="bg-white w-72 md:w-96">
                <h2 className="text-siteOrange font-bold text-center mt-4 mb-2 text-2xl">
                  True Believers Coffee
                </h2>
                <p className="text-black ml-6 mr-6 text-center">
                  A local coffee shop site. The site was built with HTML, CSS,
                  and vanilla JavaScript.
                </p>
                <a
                  className="flex flex-row justify-center items-center border-2 border-[#7691ff] rounded ml-8 mr-8 mt-4"
                  href="https://TheFrontendMarketer.github.io/tb_coffee/"
                  target="_blank"
                >
                  <img
                    className="w-10 pt-1 pb-1"
                    src="/SiteImages/Untitled design (36).webp"
                    alt=""
                  />
                  <p className="text-[#7691ff] ml-3">View Site</p>
                </a>
                <a
                  className="flex flex-row justify-center items-center border-2 border-[#7691ff] rounded ml-8 mr-8 mt-4 mb-4 md:mb-0"
                  href="https://github.com/TheFrontendMarketer/tb_coffee"
                  target="_blank"
                >
                  <img
                    className="w-10 pt-1 pb-1"
                    src="/SiteImages/github-mark-purple.png"
                    alt=""
                  />
                  <p className="text-[#7691ff] ml-3">View Code</p>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-center mt-20">
              <div className="w-72">
                <img src="/SiteImages/ms_hero1 (1).webp" alt="" />
              </div>
              <div className="bg-white w-72 md:w-96">
                <h2 className="text-siteOrange font-bold text-center mt-4 mb-2 text-2xl">
                  The Marketing Spot
                </h2>
                <p className="text-black ml-6 mr-6 text-center">
                  A digital marketing agency custom built with HTML, CSS, and
                  vanilla JavaScript.
                </p>
                <a
                  className="flex flex-row justify-center items-center border-2 border-[#7691ff] rounded ml-8 mr-8 mt-4"
                  href="https://TheFrontendMarketer.github.io/digital_marketing_site/"
                  target="_blank"
                >
                  <img
                    className="w-10 pt-1 pb-1"
                    src="/SiteImages/Untitled design (36).webp"
                    alt=""
                  />
                  <p className="text-[#7691ff] ml-3">View Site</p>
                </a>
                <a
                  className="flex flex-row justify-center items-center border-2 border-[#7691ff] rounded ml-8 mr-8 mt-4 mb-4 md:mb-0"
                  href="https://github.com/TheFrontendMarketer/digital_marketing_site"
                  target="_blank"
                >
                  <img
                    className="w-10 pt-1 pb-1"
                    src="/SiteImages/github-mark-purple.png"
                    alt=""
                  />
                  <p className="text-[#7691ff] ml-3">View Code</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
