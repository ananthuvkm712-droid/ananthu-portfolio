"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";``
import { toast } from "sonner";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      "service_8hgbv5l",
      "template_yu2xzmt",
      form.current,
      "pESHz7qwRigH99WhR"
    )
    .then(() => {
      toast.success("Message sent successfully!", {
      description: "Thank you for contacting me. I'll get back to you soon.",
    });
      form.current?.reset();
    })
    .catch((error) => {
      console.error(error);
      toast.error("Failed to send message", {
      description: "Please try again later.",
});
    });
};
  return (
    <section
      id="contact"
      className="bg-[#020617] py-32 px-10 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white mb-16"
        >
          Let's Work Together
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left */}

          <div className="space-y-8">

            <p className="text-gray-400 leading-8">
              Have a project in mind? Whether it's graphic design,
              wedding invitations, print design or video editing,
              I'd love to hear from you.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span className="text-white">
                  ananthuvkm712@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <span className="text-white">
                  +91 90488 42580
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span className="text-white">
                  Kayamkulam, Kerala
                </span>
              </div>

            </div>

            <div className="flex gap-5 pt-6">

              <a href="https://instagram.com/ananthu_127" target="_blank">
                <FaInstagram className="text-white hover:text-cyan-400 transition" />
              </a>

              <a href="https://youtube.com/@starletmedias1003" target="_blank">
                <FaYoutube className="text-white hover:text-cyan-400 transition" />
              </a>

              <a href="https://facebook.com/ananthu.in" target="_blank">
                <FaFacebook className="text-white hover:text-cyan-400 transition" />
              </a>

            </div>

          </div>

          {/* Right */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
            >

            <input
                type="name"
                placeholder="Name"
                className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input           
               type="email"
               name="from_email"
               placeholder="Email Address"
               className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
                rows={6}
                placeholder="Message"
              className="w-full bg-[#0f172a] border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <button
              className="bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold px-8 py-4 rounded-xl"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}