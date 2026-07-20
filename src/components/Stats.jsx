import axios from "axios";
import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

function Stats() {

  const [stats, setStats] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://6a585dd1914a025dcff3dc84.mockapi.io/Stats"
      );

      console.log(response.data);

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    getData();


  }, []);


  return (

    
    <section   className="relative py-28 min-h-[700px] bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1669173360523-927075e2feab?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDNkJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
  }}

  
  >

     {/* ✅ Overlay */}
  <div className="absolute inset-0 bg-slate-950/10"></div>

  {/* Glow 1 */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

  {/* Glow 2 */}
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">

     <div className="w-28 h-1 mx-auto mb-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>




      {/* <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6"> */}

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Our{" "}
            <span className="text-cyan-400">
              Achievements
            </span>
          </h2>

          <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">
            Trusted by thousands of home buyers with verified properties,
            premium services, and seamless real estate experiences.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.id}
              className="
  group
  relative
  overflow-hidden
  rounded-3xl
  bg-white/3
  backdrop-blur-xl
  border border-white/10
  p-8
  text-center
  transition-all
  duration-500
  hover:-translate-y-4
  hover:border-cyan-400/60
  hover:shadow-[0_20px_70px_rgba(34,211,238,0.30)]
  cursor-pointer
  "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Premium Badge */}
              <div className="absolute top-5 right-5 z-20">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                  PREMIUM
                </span>
              </div>

              {/* Floating Star */}
              <div className="absolute top-4 left-5 text-yellow-400 animate-pulse">
                ✨
              </div>

              {/* Icon */}
              <div className="relative z-10 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 flex items-center justify-center text-5xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {item.icon}
                </div>
              </div>

              {/* Number */}
              <h2 className="relative z-10 mt-6 text-5xl font-black text-white">
                {item.number}
              </h2>

              {/* Gradient Line */}
              <div className="w-14 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

              {/* Title */}
              <h3 className="relative z-10 mt-5 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-3 text-slate-400 text-sm leading-6">
                Delivering trusted real estate services with verified listings and seamless property experiences.
              </p>

              {/* Button */}
              <button className="relative z-10 mt-7 w-full py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 font-semibold transition-all duration-300 hover:bg-cyan-500 hover:text-white">
                Explore →
              </button>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"></div>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;