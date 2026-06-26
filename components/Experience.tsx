"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2013",
    title: "Freelance Graphic Designer & Video Editor",
    description:
      "Started my career as a freelance graphic designer and video editor, creating flex board designs, posters, notices, invitation cards and video edits for local clients.",
  },
  {
    year: "2018",
    title: "Professional Graphic Design Experience",
    description:
      "Entered the professional design & print industry and gained hands-on experience in commercial graphic design, client projects, print production and creative workflows.",
  },
  {
    year: "2020",
    title: "Wedding Card Design & Creative Media",
    description:
      "Specialized in customized wedding invitation design while expanding expertise in branding, logo design, ID cards, tags and professional video editing.",
  },
  {
    year: "2022",
    title: "Print Production & Custom Products",
    description:
      "Worked on mementos, T-shirts, mugs, keychains, acrylic products, UV print items and a wide range of customized printing solutions.",
  },
  {
    year: "2025+",
    title: "AI-Assisted Creative Design",
    description:
      "Combining traditional design skills with AI tools including ChatGPT, Gemini, Flow, Luma AI, Runway and other creative technologies for visual storytelling and content creation.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#020617] py-32 px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Experience
        </p>

        <h2 className="text-5xl font-black text-white mb-20">
          My Professional Journey
        </h2>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-cyan-500/20" />

          <div className="space-y-16">

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex gap-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-cyan-500
                    shadow-[0_0_25px_rgba(0,212,255,0.5)]
                    "
                  />
                </div>

                {/* Content Card */}
                <div
                  className="
                  flex-1
                  bg-white/5
                  backdrop-blur-md
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]
                  "
                >
                  <span className="text-cyan-400 font-bold text-lg">
                    {item.year}
                  </span>

                  <h3 className="text-white text-2xl font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}