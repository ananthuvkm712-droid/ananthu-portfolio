export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#020617] py-8 px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <div>
          <h3 className="text-white font-semibold text-lg">
            Ananthu Surendran
          </h3>
          <p className="text-slate-400 text-sm">
            Graphic Designer & Video Editor
          </p>
        </div>

        <p className="text-slate-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Designed by Ananthu Surendran. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}