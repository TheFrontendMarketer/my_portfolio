import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"


const Technologies = () => {
  return (
    <>
        <Navbar />
        <section className="bg-siteBgColor text-slate-300 font-poppins">
            <div className="siteContainer">
                <h1 className="text-4xl md:text-7xl pt-10 block bg-gradient-to-tr from-yellow-500 via-siteOrange to-yellow-500 bg-clip-text font-bold text-transparent opacity-100 pb-2">
                    Technologies
                </h1>

                <p className="text-xl mt-10">I've used these tools to build websites, emails, and implement digital marketing strategies that drive qualified traffic.</p>
                <div id="webTech" className="text-center">
                    <h2 className="text-3xl	mt-20">Web Development</h2>
                    <div>
                        <ul className="grid grid-cols-3 md:grid-cols-5 justify-items-center items-center">
                            <li><img className="w-14 mt-4" src="/WebDevIcons/html_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/css_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/js_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/tailwind_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/react_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/npm_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/vite_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/vscode_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/git_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/github-mark-white.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/python_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/django_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/wordpress_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/drupal_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/WebDevIcons/pandas_icon.png" alt="" /></li>
                        </ul>
                    </div>
                </div>

                <div id="MarTech" className="text-center">
                    <h2 className="text-3xl	mt-20">Digital Marketing</h2>
                    <div>
                        <ul className="grid grid-cols-3 md:grid-cols-5 justify-items-center items-center">
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/ga_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/gtm_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/google_ads_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/searchConsole_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/gbp_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/msa_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/callrail_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/looker_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/databox_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/fb_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/ig_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/meta_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/li_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/tiktok_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/x_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/youtube_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/photoshop_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/premierePro_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/screamingFrog_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/ahrefs_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/semrush_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/later_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/hootsuite_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/sendible_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/canva_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/unbounce_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/vwo_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/eoa_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/salesforce_icon.png" alt="" /></li>
                            <li><img className="w-14 mt-4" src="/DigiMarIcons/cookiebot_icon.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Technologies