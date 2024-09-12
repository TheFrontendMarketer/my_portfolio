import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false)

  function handleClick() {
      setNav(!nav);
  }

  return (
    <section className="bg-siteBgColor text-white font-poppins text-base font-bold">
        <div className="siteContainer flex flex-row justify-between">
            <a href="/ "><img className="w-20 mt-8 mb-8" src="/mb_logo_transparent.png" alt="" /></a>
            <div id='desktopNav' className='hidden md:contents'>
                <ul className="flex flex-row mt-8 mb-8">
                    <li><a href="/">Home</a></li>
                    <li className="ml-4 md:ml-16"><a href="projects">Projects</a></li>
                    <li className="ml-4 md:ml-16"><a href="about">My Story</a></li>
                    <li className="ml-4 md:ml-16"><a href="technologies">Technologies</a></li>
                </ul>
            </div>

            <a id='mobileNavButton' onClick={handleClick} className='md:hidden'>
                {!nav ? <TiThMenu size={40} className='text-white'/> : <IoClose size={40} className='text-white'/>}
            </a>

        </div>

        <div id='mobileNav' className={`${nav ? 'max-h-screen duration-700' : 'max-h-0 duration-300'} overflow-hidden transform transition-all ease-in-out`}>
            <ul className='text-white flex flex-col text-left transition-all divide-y divide-slate-700'>
                <li className='pl-4 pt-8'><a href="/">Home</a></li>
                <li className='pl-4 pt-8 border-b-2'><a href="projects">Projects</a></li>
                <li className='pl-4 pt-8 border-b-2'><a href="about">My Story</a></li>
                <li className='pl-4 pt-8 border-b-2 pb-8'><a href="technologies">Technologies</a></li>
            </ul>
        </div> 
    </section>
  )
}

export default Navbar