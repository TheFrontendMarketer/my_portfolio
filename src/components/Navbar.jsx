
const Navbar = () => {

  return (
    <section className="bg-siteBgColor text-white">
        <div className="siteContainer flex flex-row justify-between">
            <a href=""><img className="w-20 mt-8 mb-8" src="/mb_logo_transparent.png" alt="" /></a>
            <div>
                <ul className="flex flex-row mt-8 mb-8">
                    <li><a href="">Home</a></li>
                    <li className="ml-16"><a href="">Projects</a></li>
                    <li className="ml-16"><a href="">About</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Navbar