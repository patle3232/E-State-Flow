import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom Premium Icons for High-Fidelity Rendering
const StarIcon = () => (
   <svg className="w-5 h-5 text-lime-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
   </svg>
);

const VerifiedIcon = () => (
   <svg className="w-3.5 h-3.5 text-emerald-400 fill-current" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708.523.75.75 0 01-.566.566.75.75 0 00-.523.708.75.75 0 01-.567.566.75.75 0 00-.522.708.75.75 0 01-.566.567.75.75 0 00-.523.708.75.75 0 01-.566.566.75.75 0 00-.523.708.75.75 0 01-.566.566.75.75 0 00-.523.708.75.75 0 01-.566.566.75.75 0 00-.523.708.75.75 0 01-.566.566.75.75 0 00-.523.708 1.5 1.5 0 001.5 1.5.75.75 0 01.708.523.75.75 0 00.566.566.75.75 0 01.708.523.75.75 0 00.566.566.75.75 0 01.708.523.75.75 0 00.566.566.75.75 0 01.708.523.75.75 0 00.566.566.75.75 0 01.708.523.75.75 0 00.566.566 1.5 1.5 0 001.5-1.5.75.75 0 01.523-.708.75.75 0 00.566-.566.75.75 0 01.523-.708.75.75 0 00.566-.566.75.75 0 01.523-.708.75.75 0 00.566-.566.75.75 0 01.523-.708.75.75 0 00.566-.566 1.5 1.5 0 00-1.5-1.5z" clipRule="evenodd" />
   </svg>
);

const testimonials = [
   {
      id: 1,
      name: "Rohit Sharma",
      profession: "Software Engineer",
      location: "Pune, MH",
      rating: 5,
      review: "E-State made my property buying journey smooth and hassle-free. Their digital verification systems and secure legal processing setups are highly recommended!",
      image: "https://i.pinimg.com/736x/ca/d7/8e/cad78eb43c7cb7a4e6f1c4fa392d8fa4.jpg",
   },
   {
      id: 2,
      name: "Priya Verma",
      profession: "Doctor",
      location: "Mumbai, MH",
      rating: 5,
      review: "Amazing concierge service and completely vetted properties. I discovered and secured my ideal premium penthouse in Worli in just one week.",
      image: "https://i.pinimg.com/736x/77/af/bd/77afbdea00b4f563d1ec1606bccc6f29.jpg",
   },
   {
      id: 3,
      name: "Amit Patel",
      profession: "Business Owner",
      location: "Nagpur, MH",
      rating: 5,
      review: "Professional advisory team with excellent asset protection metrics through the entire acquisition timeline. Pure excellence from step one.",
      image: "https://i.pinimg.com/236x/c0/ed/4a/c0ed4a2a9e1922ee4f06ef803b53ab2a.jpg",
   },
   {
      id: 4,
      name: "Sneha Kulkarni",
      profession: "Architect",
      location: "Bangalore, KA",
      rating: 5,
      review: "The system dashboard interface is beautiful. Finding properties by true solar orientation paths and micro-market data charts is incredibly clean.",
      image: "https://i.pinimg.com/736x/56/e1/b3/56e1b37c9c2e5d7b6d7de581ee653883.jpg",
   },
];

export default function Testimonials() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [direction, setDirection] = useState(1); // 1 = Next, -1 = Prev
   const [isPaused, setIsPaused] = useState(false);
   const autoPlayTimerRef = useRef(null);

   // Auto-play interval tracking logic
   useEffect(() => {
      if (!isPaused) {
         autoPlayTimerRef.current = setInterval(() => {
            handleNext();
         }, 4000);
      }
      return () => {
         if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      };
   }, [currentIndex, isPaused]);

   const handlePrev = () => {
      setDirection(-1);
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
   };

   const handleNext = () => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
   };

   const handleDotClick = (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
   };

   // Modern Slide Animations Vectors Configuration
   const slideVariants = {
      enter: (dir) => ({
         x: dir > 0 ? 240 : -240,
         opacity: 0,
         scale: 0.95
      }),
      center: {
         x: 0,
         opacity: 1,
         scale: 1,
         transition: {
            x: { type: "spring", stiffness: 240, damping: 25 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 }
         }
      },
      exit: (dir) => ({
         x: dir > 0 ? -240 : 240,
         opacity: 0,
         scale: 0.95,
         transition: {
            x: { type: "spring", stiffness: 240, damping: 25 },
            opacity: { duration: 0.3 }
         }
      })
   };

   // FIX: Properly extract the single active object index reference pointer
   const activeClient = testimonials[currentIndex];

   return (
      <section className="py-24 md:py-32 bg-slate-950 text-slate-100 antialiased overflow-hidden select-none relative">

           <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/1200x/da/4d/a0/da4da0ff7bbb376adf38c68cc08becb2.jpg')",
    }}
  />

    <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

         {/* Premium Ambient Aesthetic Background Glow Vectors */}
         {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" /> */}
         <motion.div
            animate={{
               scale: [1, 1.05, 1],
               opacity: [0.02, 0.04, 0.02],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[140px] pointer-events-none"
         />

         <div className="max-w-5xl mx-auto px-6 relative z-10">

            {/* Header Layout Module Section */}
            {/* <div className="text-center mb-16 md:mb-24 space-y-4">
               <motion.h4
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-lime-400 uppercase tracking-[0.4em] text-xs font-bold bg-slate-900/60 border border-slate-900 inline-block px-4 py-1.5 rounded-full shadow-inner"
               >
                  Testimonials
               </motion.h4>
               <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight"
               >
                  What Our <span className="font-serif italic font-normal bg-gradient-to-b from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent">Clients</span> Say
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed"
               >
                  Trusted by thousands of happy customers who found their dream premium properties through E-State.
               </motion.p>
            </div> */}









<div className="text-center mb-24 relative">

  {/* Background Text */}
  <h1 className="absolute inset-0 flex justify-center items-center text-[90px] md:text-[180px] font-black uppercase text-white/[0.03] tracking-[20px] select-none">
    TRUST
  </h1>

  {/* Small Label */}
  <div className="inline-flex items-center gap-3 mb-5">

    <div className="w-12 h-[2px] bg-lime-400"></div>

    <span className="uppercase tracking-[6px] text-lime-400 text-xs font-semibold">
      Testimonials
    </span>

    <div className="w-12 h-[2px] bg-lime-400"></div>

  </div>

  {/* Main Heading */}
  <h2 className="relative text-5xl md:text-7xl font-bold text-white leading-tight">

    Trusted By

    <br />

    <span className="bg-gradient-to-r from-lime-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
      Happy Clients
    </span>

  </h2>

  {/* Description */}
  <p className="mt-8 max-w-2xl mx-auto text-slate-400 leading-8">

    Every review reflects our commitment to transparency,
    trust, and delivering premium real estate experiences.

  </p>

</div>




















            {/* Dynamic Display Presentation Slider Matrix */}
            <div className="relative min-h-[460px] md:min-h-[360px] flex items-center justify-center">
               <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                     key={activeClient.id}
                     custom={direction}
                     variants={slideVariants}
                     initial="enter"
                     animate="center"
                     exit="exit"
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                     className="w-full bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-950/90 border border-slate-900 rounded-3xl p-6 md:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start group"
                     style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.03)" }}
                  >
                     {/* Premium Subtle Border Highlighting Mesh Mask */}
                     <div className="absolute inset-0 border border-transparent rounded-3xl [mask-image:linear-gradient(to_bottom,black,transparent)] group-hover:border-slate-800/30 transition-colors duration-500 pointer-events-none" />

                     {/* Giant Ambient Design Watermark Accent Quote */}
                     <div className="absolute top-4 right-8 text-slate-900/30 pointer-events-none font-serif text-[150px] font-black leading-none select-none">
                        “
                     </div>

                     {/* Left Column Profile Frame Layout */}
                     <div className="relative shrink-0">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-800 p-1 bg-slate-950/60 shadow-xl group-hover:border-emerald-500/20 transition-all duration-500 relative">
                           <img
                              src={activeClient.image}
                              alt={activeClient.name}
                              className="w-full h-full object-cover rounded-xl grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                           />
                        </div>
                     </div>

                     {/* Right Column Profile Copy Text Configuration Layout */}
                     <div className="flex-1 space-y-4 text-center md:text-left relative z-10 w-full">

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                           <div className="space-y-0.5">
                              <h3 className="text-xl md:text-2xl font-serif text-white font-medium tracking-wide">
                                 {activeClient.name}
                              </h3>
                              <p className="text-slate-400 text-sm">
                                 {activeClient.profession}
                              </p>

                              <div className="flex items-center gap-2 justify-center md:justify-start mt-2">
                                 <VerifiedIcon />
                                 <span className="text-emerald-400 text-xs uppercase tracking-wider">
                                    Verified Buyer
                                 </span>
                              </div>
                           </div>

                           {/* Rating */}
                           <div className="flex justify-center md:justify-end gap-1">
                              {[...Array(activeClient.rating)].map((_, index) => (
                                 <StarIcon key={index} />
                              ))}
                           </div>
                        </div>

                        {/* Review */}
                        <p className="text-slate-300 leading-8 text-base md:text-lg italic">
                           "{activeClient.review}"
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between border-t border-slate-800 pt-5">

                           <span className="text-slate-500 text-sm">
                              📍 {activeClient.location}
                           </span>

                           <button className="px-5 py-2 rounded-full bg-lime-400 text-slate-950 font-semibold hover:bg-lime-300 transition-all duration-300">
                              View Property
                           </button>

                        </div>

                     </div>
                  </motion.div>
               </AnimatePresence>

               {/* Previous Button */}
               <button
                  onClick={handlePrev}
                  className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 hover:border-lime-400 transition"
               >
                  ←
               </button>

               {/* Next Button */}
               <button
                  onClick={handleNext}
                  className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 hover:border-lime-400 transition"
               >
                  →
               </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
               {testimonials.map((_, index) => (
                  <button
                     key={index}
                     onClick={() => handleDotClick(index)}
                     className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                           ? "w-8 bg-lime-400"
                           : "w-2 bg-slate-700 hover:bg-slate-500"
                        }`}
                  />
               ))}
            </div>

         </div>
      </section>
   );
}