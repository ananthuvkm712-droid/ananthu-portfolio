"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#020617] py-32 px-10 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4"
        >
          Featured Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-black text-white mb-16"
        >
          Selected Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >

         <motion.a
                href="https://ananthu127.wordpress.com/logos/"
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ y: -10 }}
                className="portfolio-card overflow-hidden block"
                >
            <img
              src="/portfolio/project1.png"
              alt="Logo Design"
              className="
                w-full
                h-[350px]
                object-cover
                transition-all
                duration-700
                hover:scale-110
              "
            />

            <div className="p-6">
              <h3 className="text-white text-2xl font-bold">
                Logo Design
              </h3>
            </div>
          </motion.a>

          <motion.a
            href="https://ananthu127.wordpress.com/invitations/"
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ y: -10 }}
                className="portfolio-card overflow-hidden block"
                >
            <img
              src="/portfolio/project2.jpg"
              alt="Wedding Invitations"
              className="
                w-full
                h-[350px]
                object-cover
                transition-all
                duration-700
                hover:scale-110
              "
            />

            <div className="p-6">
              <h3 className="text-white text-2xl font-bold">
                Wedding Invitations
              </h3>
            </div>
          </motion.a>

          <motion.a
                href="https://ananthu127.wordpress.com/poster-designs/"
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ y: -10 }}
                className="portfolio-card overflow-hidden block"
                >
                <img
                    src="/portfolio/project3.jpg"
                    alt="Poster Design"
                    className="
                    w-full
                    h-[350px]
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-110
                    "
                />

                <div className="p-6">
                    <h3 className="text-white text-2xl font-bold">
                    Poster Design
                    </h3>
                </div>
                </motion.a>

            <motion.a
                href="https://ananthu127.wordpress.com/video-works/"
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ y: -10 }}
                className="portfolio-card overflow-hidden block"
                
                >
            <img
              src="/portfolio/project4.png"
              alt="Video Editing"
              className="
                w-full
                h-[350px]
                object-cover
                transition-all
                duration-700
                hover:scale-110
              "
            />

            <div className="p-6">
              <h3 className="text-white text-2xl font-bold">
                Video Editing
              </h3>
            </div>
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}