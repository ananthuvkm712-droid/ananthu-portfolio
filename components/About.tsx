"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#020617] py-32 px-10 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        >
          <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm">
            About Me
          </p>

          <h2 className="goodtiming text-5xl font-black text-white mt-4 mb-8">
            Creative Designer &
            <br />
            Video Editor
          </h2>

          <p className="text-gray-400 leading-8">
            I am Ananthu Surendran, a Graphic Designer and Video Editor
            with over 10 years of experience in branding, wedding
            invitations, print design, motion graphics and creative
            visual storytelling.
          </p>

          <p className="text-gray-400 leading-8 mt-6">
            I specialize in logo design, wedding invitations,
            posters, customized print products, AI-assisted visual
            creation and professional video editing.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">

            <motion.a
              href="/resume/Ananthu-Surendran-Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
              px-8
              py-4
              rounded-full
              bg-cyan-500
              text-black
              font-semibold
              transition-all
              duration-300
              hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]
              "
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
              px-8
              py-4
              rounded-full
              border
              border-cyan-500
              text-cyan-400
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:text-black
              "
            >
              Hire Me
            </motion.a>

          </div>

          <div className="flex gap-10 mt-12">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-cyan-400 text-5xl font-black">
                10+
              </h3>
              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-cyan-400 text-5xl font-black">
                1000+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <h3 className="goodtiming text-white text-2xl font-bold mb-6">
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-2 gap-4">

            {[
              "/icons/photoshop.png",
              "/icons/premiere.png",
              "/icons/illustrator.png",
              "/icons/aftereffects.png",
              "/icons/gemini.png",
              "/icons/gpt.png",
            ].map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-6
                flex
                justify-center
                items-center
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]
                "
              >
                <Image
                  src={icon}
                  alt="Tool"
                  width={60}
                  height={60}
                />
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}