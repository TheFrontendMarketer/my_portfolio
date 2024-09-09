import { useEffect, useRef } from "react";
import gsap from "gsap"
import Shapes from "./Shapes"

const Hero = () => {

    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
          const tl = gsap.timeline()
          tl.fromTo(".name-animation",
            {x: -100, opacity:0, rotate: -10}, 
            {x:0,opacity: 1,rotate:0, ease: "elastic.out(1,0.3)", duration: 1, transformOrigin: "left top", stagger: {each: 0.1, from: "random"}, delay:0.5}
          )
    
          tl.fromTo(".job-title", {y:20, opacity: 0, scale: 1.2}, {opacity:1, y:0, duration:0.3, scale:1, ease: "power2.out"})
          
        }, component)
        return () => ctx.revert(); //cleanup
      }, []); // dependency array so it doesn't re-run on every render

    const renderLetters = (name) => {
        if (!name) return;
        return name.split("").map((letter, index) => (
            <span key={index} className={`name-animation inline-block opacity-0`}>
                {letter}
            </span>
        ))
      }

  return (
    <>
        
        <section className="bg-siteBgColor text-white" ref={component}>
            <div className="siteContainer grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
                <div className="col-start-1 md:row-start-1">
                    <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter" aria-label="Mike Berg">
                        <span id="firstName" className="block text-slate-300">
                            {renderLetters("Mike")}
                        </span>
                        <span id="lastName" className="-mt-[.2em] block text-slate-500">
                        {renderLetters("Berg")}
                        </span>
                    </h1>
                    <span id="tagline" className="job-title block bg-gradient-to-tr from-yellow-500 via-siteOrange to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-100 md:text-4xl">Front-End Developer</span>
                </div>
                <div className="order-2 md:order-2 shapes-container">
                    <Shapes />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero