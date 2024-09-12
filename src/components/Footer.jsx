const Footer = () => {
  return (
    <section className='bg-siteBgColor text-[#CEC8F4] pt-16 pb-8 font-poppins'>
        <div className='siteContainer flex flex-col md:flex-row justify-between'>
            <div className="flex flex-col">
                <ul className="flex flex-col text-xl font-extrabold items-center">
                    <li className="mb-4"><a href="/">Home</a></li>
                    <li className="mb-4"><a href="/projects">Projects</a></li>
                    <li className="mb-4"><a href="about">My Story</a></li>
                    <li><a href="technologies">Technologies</a></li>
                </ul>
            </div>
            <div className="flex flex-col mt-8 md:mt-0">
                <a href="https://github.com/mb8504" target="_blank">
                    <img className="w-9" src="/WebDevIcons/github-mark-white.png" alt="" />
                </a>
                <a href="mailto:mbergprogramming@gmail.com">
                    <img className="w-9 mt-8" src="/SiteImages/email_white.png" alt="mbergprogramming@gmail.com"/>
                </a>
            </div>
            <div className="flex flex-row items-center mt-8 md:mt-0">
                <a href="/" className="text-xl font-extrabold w-32">
                    <img src="/mb_logo_transparent.png" alt="" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Footer