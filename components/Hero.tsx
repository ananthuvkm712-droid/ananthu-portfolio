"use client";
import {
 FaInstagram,
 FaBehance,
 FaYoutube
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";



export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center">
        <div className="absolute inset-0">

  <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[150px]" />

  <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[180px]" />

</div>

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Small Glow */}
      <div className="absolute w-[200px] h-[200px] bg-cyan-400/30 blur-[120px] rounded-full bottom-20 right-20" />

      <div className="container mx-auto px-10 md:px-20 grid lg:grid-cols-[0.9fr_1.4fr_0.9fr] items-center min-h-screen">

        {/* LEFT */}
        <motion.div
          className="z-10"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          >

          <p className="betterlett text-cyan-400 text-3xl md:text-4xl mb--5 mt-29">
              Hello, I'm
          </p>

          <h1 className="text-white font-black leading-none">
            <span className="block text-7xl md:text-7.5xl mt-1">
              ANANTHU
            </span>

             <span className="block text-xl md:text-2xl text-cyan-400 tracking-[0.5em] mt-2">
              SURENDRAN
             </span>
            <div className="goodtiming mt-8 space-y-2 text-xl text-gray-300">
              <p>Graphic Designer</p>
              <p>Video Editor</p>
              <p>AI Visual Storyteller</p>
            </div>
            <p className="mt-5 text-gray-600 text-sm font-extralight leading-5 max-w-sm">
                Crafting visual stories through graphic design, AI creativity, branding, wedding invitations, and video production for over 10 years.
            </p>
            <div className="mt-10">
              <a
                href="#portfolio"
                className="
                inline-block
                px-8
                py-4
                bg-cyan-500
                text-black
                font-semibold
                rounded-full
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]
                "
              >
                Explore Portfolio
              </a>
              
            </div>
            </h1>
              <div className="mt-10 flex items-center gap-6 text-gray-400">
                <a
                  href="https://www.instagram.com/ananthu_127/"
                  target="_blank"
                  className="
                  text-gray-400
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  hover:scale-110
                  "
                 >
                  <FaInstagram size={24} />
                </a>

                <a
                  href="https://behance.net/ananthus4"
                  target="_blank"
                  className="
                  text-gray-400
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  hover:scale-110
                  "
                  >
                 <FaBehance size={24} />
                </a>

                <a
                  href="https://www.youtube.com/@starletmedias1003"
                  target="_blank"
                  className="
                  text-gray-400
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  hover:scale-110
                  "
                  >
                  <FaYoutube size={24} />
                </a>
              </div>
           </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          className="flex justify-center relative z-10"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
          duration: 1.2,
          delay: 0.3
          }}
          >

          <div
              className="
              absolute
              w-[350px]
              h-[550px]
              mt-15
              rounded-[50px]
              bg-white/5
              border border-white/10
              shadow-[0_0_80px_rgba(0,212,255,0.15)]
              "
              />
              {/* Photoshop */}
              <div className="absolute top-40 left-10 soft-float-1 opacity-60 hover:opacity-100 transition-all duration-500">
                <Image
                  src="/icons/photoshop.png"
                  alt="Photoshop"
                  width={100}
                  height={100}
                />
              </div>

              {/* Illustrator */}
              <div className="absolute top-20 right-17 soft-float-2 opacity-60 hover:opacity-100 transition-all duration-500">
                <Image
                  src="/icons/illustrator.png"
                  alt="Illustrator"
                  width={78}
                  height={78}
                />
              </div>

              {/* Premiere */}
              <div className="absolute bottom-20 left-6 soft-float-3 opacity-60 hover:opacity-100 transition-all duration-500">
                <Image
                  src="/icons/premiere.png"
                  alt="Premiere"
                  width={78}
                  height={78}
                />
              </div>

              {/* After Effects */}
              <div className="absolute bottom-24 right-6 soft-float-4 opacity-60 hover:opacity-100 transition-all duration-500">
                <Image
                  src="/icons/aftereffects.png"
                  alt="After Effects"
                  width={60}
                  height={60}
                />
              </div>
              
              <div className="absolute top-60 right-10 soft-float-5 opacity-60 hover:opacity-100 transition-all duration-500">
                <Image
                  src="/icons/gpt.png"
                  alt="Chatgpt"
                  width={48}
                  height={48}
                />
              </div>
              <div className="absolute bottom-60 left-6 soft-float-6 opacity-60 hover:opacity-100 transition-all duration-500">
                <Image
                  src="/icons/gemini.png"
                  alt="Gemini"
                  width={48}
                  height={48}
                />
              </div>
              <div className="absolute top-20 left-12 soft-float-7 opacity-60 hover:opacity-100 transition-all duration-500">
                <Image
                  src="/icons/davinci.png"
                  alt="Davinci"
                  width={48}
                  height={48}
                />
              </div>
              <div className="absolute bottom-50 right-6 soft-float-8 opacity-60 hover:opacity-100 transition-all duration-500">
                <Image
                  src="/icons/luma.png"
                  alt="Luma"
                  width={60}
                  height={60}
                />
              </div>
              <Image
                src="/images/anu.png"
                alt="Ananthu"
                width={1200}
                height={1200}
                priority
                unoptimized
                className="
                h-[95vh]
                w-auto
                object-contain
                float-animation
                "
                />
            </motion.div>

              {/* RIGHT */}
            <motion.div
              className="z-10 flex flex-col gap-8"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.6
              }}
              >

              <div className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                transition-all
                duration-300
                hover:scale-105
                hover:border-cyan-400/20
                hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]
                ">
                <h3 className="text-6xl font-black text-cyan-400">
                  10+
                </h3>

                <p className="text-gray-400">
                  Years Experience
                </p>
              </div>

              <div className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                transition-all
                duration-300
                hover:scale-105
                hover:border-cyan-400/20
                hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]
                ">
    
                <h3 className="text-6xl font-black text-white">
                  1000+
                </h3>
                <p className="text-gray-400">
                  Designs Created
                </p>
              </div>

              <div className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                transition-all
                duration-300
                hover:scale-105
                hover:border-cyan-400/20
                hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]
                ">
                <h3 className="text-6xl font-black text-cyan-400">
                  500+
                </h3>

                <p className="text-gray-400">
                   Happy Clients
                </p>
              </div>
            </motion.div>
          </div>
    </section>
    
  );
}
