import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";



function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center mt-50">

        {/* Left Content */}
        <div>
        <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.02 }}
  className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white"
>
  Find your space{" "}
  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
  Live your dream
  </span>
</motion.h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl leading-8 text-slate-200">
  Find your dream property with verified listings, intelligent search, and a
  seamless real estate experience designed for modern home buyers.
</p>


          <div className="w-full max-w-2xl mx-auto mt-8 px-4">
  <form className="flex items-center gap-2 p-2 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl focus-within:border-cyan-500 focus-within:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300">
    
    {/* Map Icon & Input Field */}
    <div className="flex items-center gap-3 flex-1 pl-3">
      <span className="text-cyan-400 text-xl flex-shrink-0 animate-pulse">📍</span>
      <input 
        type="text" 
        placeholder="Enter city, neighborhood, or district..." 
        className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-base py-2"
      />
    </div>

    {/* Integrated Star-Effect Action Button */}
    <button 
      type="submit" 
      className="group relative bg-amber-400 text-black font-bold px-6 py-3 rounded-xl overflow-visible flex-shrink-0 transition-all duration-200 hover:bg-amber-300 hover:scale-[1.02] active:scale-98"
    >
      <span className="relative z-10 flex items-center gap-2">
        <span>Search</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>

      {/* Hover Star Burst Effects */}
      <span className="absolute opacity-0 scale-0 -top-2 -left-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-x-1 group-hover:-translate-y-1 text-amber-500 text-sm">✦</span>
      <span className="absolute opacity-0 scale-0 -bottom-2 -right-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-110 group-hover:translate-x-1 group-hover:translate-y-1 text-amber-500 text-sm">✦</span>
    </button>


    
  </form>

 

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="mt-8 flex flex-wrap items-center gap-4"
>
  {/* Primary Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-7 py-3 rounded-xl
    bg-gradient-to-r from-blue-600 to-cyan-500
    text-white font-semibold
    shadow-lg shadow-blue-500/30
    hover:shadow-blue-500/50
    transition-all duration-300"
  >

             <NavLink to="/Properties">Explore Properties →</NavLink>
    
  </motion.button>

  {/* Secondary Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-7 py-3 rounded-xl
    border border-white/30
    bg-white/10
    backdrop-blur-md
    text-white font-semibold
    hover:bg-white hover:text-slate-900
    transition-all duration-300"
  >
    Learn More
  </motion.button>
</motion.div>
</div>

        </div>

        {/* Right Image */}
        <div className="hidden lg:flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury House"
            className="w-[550px] rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;