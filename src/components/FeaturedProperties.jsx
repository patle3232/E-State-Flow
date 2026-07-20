
import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
function FeaturedProperties() {

   const properties = [
     
  {
    "id": "1",
    "title": "Luxury Villa",
    "location": "Gondia, Maharashtra",
    "price": "₹1.25 Cr",
    "image": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    "bedrooms": "4",
    "bathrooms": "3",
    "area": "2500 sqft",
    "rating": "4.9",
    "type": "Villa",
    "featured": true
  },
  {
    "id": "2",
    "title": "Modern Apartment",
    "location": "Pune, Maharashtra",
    "price": "₹85 Lakh",
    "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    "bedrooms": "3",
    "bathrooms": "2",
    "area": "1650 sqft",
    "rating": "4.8",
    "type": "Apartment",
    "featured": true
  },
  {
    "id": "3",
    "title": "Family House",
    "location": "Nagpur, Maharashtra",
    "price": "₹65 Lakh",
    "image": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    "bedrooms": "3",
    "bathrooms": "2",
    "area": "1800 sqft",
    "rating": "4.7",
    "type": "House",
    "featured": true
  },
  {
    "id": "4",
    "title": "Farm House",
    "location": "Nashik, Maharashtra",
    "price": "₹2.10 Cr",
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "bedrooms": "5",
    "bathrooms": "4",
    "area": "4200 sqft",
    "rating": "5.0",
    "type": "Farm House",
    "featured": true
  },
  {
    "id": "5",
    "title": "Luxury Penthouse",
    "location": "Mumbai, Maharashtra",
    "price": "₹3.50 Cr",
    "image": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    "bedrooms": "4",
    "bathrooms": "4",
    "area": "3500 sqft",
    "rating": "4.9",
    "type": "Penthouse",
    "featured": true
  },
  {
    "id": "6",
    "title": "Office Space",
    "location": "Pune, Maharashtra",
    "price": "₹95 Lakh",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "bedrooms": "2",
    "bathrooms": "2",
    "area": "2200 sqft",
    "rating": "4.6",
    "type": "Office",
    "featured": true
  }

   ];
   // Framer Motion configuration variants for parent container (Staggered Load Entry)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Loads cards one after another cleanly
      }
    }
  };

  // Card initial entry animations
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

    return (
    <>
      <section className="py-24 bg-cyan-950 text-white antialiased min-h-screen relative overflow-hidden selection:bg-cyan-400 selection:text-cyan-950">
        <div className="absolute inset-0 overflow-hidden">
  <img
    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
    alt="Luxury Property Background"
    className="
      w-full
      h-full
      object-cover
      object-center
      scale-105
      opacity-40
      brightness-75
      contrast-110
      pointer-events-none
      transition-transform
      duration-[8000ms]
      hover:scale-110
    "
  />
</div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-extrabold bg-cyan-400/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 shadow-inner">
              Premium Handpicked Selection
            </span>
            <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-tight">
  <span className="text-white">Featured</span>{" "}
  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
    Properties
  </span>
</h2>
            <p className="mt-4 text-slate-300 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
              Explore our handpicked premium properties designed to match every lifestyle and budget.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 [perspective:1200px]"
          >
            {properties.map((property) => {
              const mouseX = useMotionValue(0);
              const mouseY = useMotionValue(0);
              const rotateX = useMotionValue(0);
              const rotateY = useMotionValue(0);

              function handleMouseMove({ currentTarget, clientX, clientY }) {
                const { left, top, width, height } = currentTarget.getBoundingClientRect();
                const x = clientX - left;
                const y = clientY - top;
                mouseX.set(x);
                mouseY.set(y);

                const rX = ((y - height / 2) / (height / 2)) * -8;
                const rY = ((x - width / 2) / (width / 2)) * 8;
                rotateX.set(rX);
                rotateY.set(rY);
              }

              function handleMouseLeave() {
                rotateX.set(0);
                rotateY.set(0);
              }

              return (
                <motion.div 
                  key={property.id} 
                  variants={cardVariants}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    translateZ: 15
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative bg-cyan-950/30 backdrop-blur-2xl border border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.08)] rounded-[32px] p-4 overflow-hidden cursor-pointer transition-colors duration-300 hover:bg-cyan-900/20"
                >
                  <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-300 z-30"
                    style={{
                      background: useMotionTemplate`
                        radial-gradient(
                          350px circle at ${mouseX}px ${mouseY}px,
                          rgba(34, 211, 238, 0.25),
                          transparent 80%
                        )
                      `,
                    }}
                  />

                  <div 
                    className="w-full h-60 rounded-[24px] overflow-hidden bg-cyan-950/60 relative shadow-inner"
                    style={{ transform: "translateZ(35px)" }}
                  >
                    <motion.img 
                      src={property.image} 
                      alt={property.title} 
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                      className="w-full h-full object-cover filter brightness-[0.95] group-hover:brightness-100 transition-all duration-300" 
                    />
                    <span className="absolute top-4 left-4 bg-cyan-950/90 backdrop-blur-xl text-cyan-300 text-[10px] font-extrabold px-3 py-1.5 rounded-xl border border-white/10 tracking-widest uppercase shadow-lg">
                      {property.type}
                    </span>
                  </div>

                  <div 
                    className="mt-5 px-1 flex justify-between items-start gap-3"
                    style={{ transform: "translateZ(25px)" }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300"> 
                        {property.title} 
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-300 font-medium flex items-center gap-1.5"> 
                        <span className="text-cyan-400 text-sm">📍</span> {property.location} 
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 bg-cyan-950/60 text-yellow-400 px-2.5 py-1 rounded-xl text-xs font-black border border-white/5 shadow-md backdrop-blur-md"> 
                      ⭐ <span className="text-slate-200 font-bold">{property.rating}</span> 
                    </div>
                  </div>
                  
                  <div 
                    className="grid grid-cols-3 gap-2 mt-6 p-2 rounded-2xl bg-cyan-950/60 border border-white/5 shadow-inner text-xs font-semibold text-center backdrop-blur-md"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <div className="py-1.5 rounded-xl bg-cyan-400/5 border border-cyan-400/10">
                      <span className="block text-[10px] text-cyan-400/70 uppercase tracking-wider mb-0.5">Beds</span>
                      <strong className="text-cyan-400 font-bold">🛏 {property.bedrooms}</strong>
                    </div>
                    <div className="py-1.5 rounded-xl bg-emerald-400/5 border border-emerald-400/10">
                      <span className="block text-[10px] text-emerald-400/70 uppercase tracking-wider mb-0.5">Baths</span>
                      <strong className="text-emerald-400 font-bold">🚿 {property.bathrooms}</strong>
                    </div>
                    <div className="py-1.5 rounded-xl bg-purple-400/5 border border-purple-400/10">
                      <span className="block text-[10px] text-purple-400/70 uppercase tracking-wider mb-0.5">Area</span>
                      <strong className="text-purple-400 font-bold block truncate px-1">📐 {property.area}</strong>
                    </div>
                  </div>

                  <div 
                    className="flex justify-between items-center mt-6 pt-2 px-1 relative z-20"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div>
                      <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-black">Valuation</span>
                      <h4 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-all duration-300 tracking-tight"> 
                        {property.price} 
                      </h4>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group/btn bg-gradient-to-r from-cyan-400 to-teal-400 text-cyan-950 text-xs font-extrabold px-4 py-3 rounded-2xl shadow-xl shadow-cyan-400/10 hover:shadow-cyan-400/20 transition-all duration-300 flex items-center gap-1.5"
                    >
                      <span>View Mansion</span>
                      <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );

}

export default FeaturedProperties;
