export default function Navbar() {
  return (
    <header
  className="
  fixed
  top-0
  left-0
  w-full
  z-50
  px-10
  md:px-20
  py-3
  flex
  justify-between
  items-center
  backdrop-blur-xl
  bg-black/10
  border-b
  border-white/5
  "
>

      <h2 className="text-white text-2xl font-bold tracking-wider">
        ANANTHU S
      </h2>

      <nav className="hidden md:flex gap-12 text-white font-medium">
        <a href="#about" className="hover:text-cyan-400 duration-300">
          About
        </a>

        <a href="#portfolio" className="hover:text-cyan-400 duration-300">
          Portfolio
        </a>

        <a href="#contact" className="hover:text-cyan-400 duration-300">
          Contact
        </a>
    
      </nav>
    </header>
  );
}