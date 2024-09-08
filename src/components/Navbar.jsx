
const Navbar = () => {
  return (
    <section className="bg-slate-900 text-white">
        <div className="siteContainer flex flex-row justify-between">
            <a href=""><img className="w-32" src="public/mb_logo_transparent.png" alt="" /></a>
            <div>
                <ul className="flex flex-row">
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