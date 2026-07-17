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
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

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
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-8
              text-center
              transition-all
              duration-500
              hover:-translate-y-4
              hover:border-cyan-400/50
              hover:shadow-[0_5px_60px_rgba(34,211,238,0.25)]
              hover:cursor-pointer 
              "
            >

              {/* Hover Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Icon */}

              <div className="relative z-10 text-6xl mb-5 transition-transform duration-500 group-hover:scale-125">

                {item.icon}

              </div>

              {/* Number */}

              <h2 className="text-5xl font-extrabold text-white tracking-wide">
  {item.number}
</h2>

              {/* Title */}

              <p className="relative z-10 mt-4 text-slate-300 text-lg">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;