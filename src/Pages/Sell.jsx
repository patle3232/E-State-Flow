import React from 'react';
// 1. Top Core Imports Layer (Packs specify paths via lowercase extension name prefixes)
import { FaGraduationCap, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import { LuWallet, LuShieldCheck } from 'react-icons/lu';

export default function Sell() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
      
      {/* Dynamic Background Glow Setup Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[30%] w-72 h-72 rounded-full bg-blue-600 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        
        {/* Top Header Section featuring FaGraduationCap */}
        <div className="p-4 bg-blue-950/60 border border-blue-800 rounded-2xl text-4xl text-blue-400 mb-6 animate-pulse">
          <FaGraduationCap />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
          Launch Your Expert Component Marketplace 💰
        </h1>

        <p className="text-base text-gray-400 mt-4 max-w-md leading-relaxed">
          Upload custom React blocks, Framer configurations, and full technical course workflows to scale global dev networks.
        </p>

        {/* Technical Grid Elements featuring multi-pack icons (Fa + Lu) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-10 text-left">
          
          {/* Card 1: Revenue Tracking Layout */}
          <div className="p-5 bg-slate-900 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition-all duration-300">
            <div className="text-2xl text-emerald-400 mb-2">
              <LuWallet /> {/* Lucide pack wallet node */}
            </div>
            <h3 className="font-bold text-white text-base">Direct Revenue</h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Keep 95% of your platform course metrics sales with zero conversion bounds layers.</p>
          </div>

          {/* Card 2: Technical Jobs Verification */}
          <div className="p-5 bg-slate-900 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition-all duration-300">
            <div className="text-2xl text-purple-400 mb-2">
              <FaBriefcase /> {/* FontAwesome pack business model node */}
            </div>
            <h3 className="font-bold text-white text-base">Developer Ecosystem</h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Attract strict enterprise developers matching specific nested router structures.</p>
          </div>

          {/* Card 3: Enterprise Cloud Shield */}
          <div className="p-5 bg-slate-900 border border-slate-800/80 rounded-2xl hover:border-slate-700 transition-all duration-300">
            <div className="text-2xl text-cyan-400 mb-2">
              <LuShieldCheck /> {/* Lucide pack protection badge */}
            </div>
            <h3 className="font-bold text-white text-base">Secure Pipeline</h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">Encrypted asset storage prevents structural code leaks and source asset misuse.</p>
          </div>

        </div>

        {/* Call to Action Layer with FaArrowRight linkage */}
        <button className="flex items-center gap-2 mt-10 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg shadow-blue-900/30 hover:scale-105 transition-all duration-300 cursor-pointer group">
          <span>Start Selling Today</span>
          <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
}
