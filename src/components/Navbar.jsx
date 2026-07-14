import { nav } from "framer-motion/client";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav  className="
  fixed top-5 left-1/2 -translate-x-1/2
  w-[92%] max-w-7xl
  z-50

  bg-white/5
  backdrop-blur-md

  border border-white/10
  rounded-2xl

  px-8 py-4

  shadow-[0_8px_30px_rgba(0,0,0,0.15)]
  ">

  



      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        {/* <div className="text-2xl font-bold text-amber-400">
          🏡 EstateFlow
        </div> */}


<div className="flex flex-col items-center justify-center text-center font-serif">
  {/* Floating Minimalist Icon */}
  <span className="text-xl mb-1 opacity-90">🏡</span>

  {/* Roman Luxury Gradient Typography */}
  <h1 className="text-2xl font-bold tracking-[0.15em] uppercase bg-gradient-to-b from-yellow-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
    Estate
  </h1>
  
  {/* Balanced Divider Line & Subtext */}
  <div className="w-12 h-[1px] bg-amber-500/40 my-1"></div>
  <span className="text-[8px] font-sans font-light tracking-[0.4em] uppercase text-amber-200/70">
    Luxury Realty
  </span>
</div>





        {/* Links */}
        <div className="flex items-center gap-6">
        <NavLink 
  to="/" 
  className="border border-transparent text-gray-300 rounded-lg p-2 px-4 transition-all duration-300 ease-out hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
>
  Home
</NavLink>

          <NavLink to="/about"  className="border border-transparent text-gray-300 rounded-lg p-2 px-4 transition-all duration-300 ease-out hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">About</NavLink>


          <NavLink to="/Buy"  className="border border-transparent text-gray-300 rounded-lg p-2 px-4 transition-all duration-300 ease-out hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">Buy</NavLink>

          <NavLink to="/sell" className="border border-transparent text-gray-300 rounded-lg p-2 px-4 transition-all duration-300 ease-out hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">Sell</NavLink>

          <NavLink to="/Properties"  className="border border-transparent text-gray-300 rounded-lg p-2 px-4 transition-all duration-300 ease-out hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">Properties</NavLink>

          <NavLink to="/PropertyDetails"  className="border border-transparent text-gray-300 rounded-lg p-2 px-4 transition-all duration-300 ease-out hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">PropertyDetails</NavLink>

          <NavLink to="/contact" className="border border-transparent text-gray-300 rounded-lg p-2 px-4 transition-all duration-300 ease-out hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">Contact</NavLink>
        </div>

        {/* Button */}
        <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold px-6 py-2.5 rounded-lg shadow-md
                   transition-all duration-300 ease-in-out transform
                   hover:from-amber-300 hover:to-amber-400 hover:scale-105 hover:shadow-lg
                   active:scale-95  hover: border border-cyan-500  border-transparent">
  Get Started
</button>


      </div>
    </nav>
  );
}

export default Navbar;
