"use client";
import Image from "next/image";

function Navbar() {
  return (
    <header className="glass-navbar relative bg-gray-700/10 flex z-20 items-center justify-between urbanist mx-[8vw] my-8 px-4 py-1 border border-gray-700 rounded-3xl">
      <nav className="hidden md:flex gap-8 text-sm text-zinc-300 items-center justify-center">
        <div className="text-xl font-bold text-brand-orange">
          <Image src="/assets/images/apexed-logo.webp" width={70} height={70} alt="apexed-logo" />
        </div>
        <span>Home</span>
        <span>Services</span>
        <span>About</span>
      </nav>
        <section className="flex justify-between items-center gap-8 text-sm">
          <Image className="md:hidden" src="/assets/images/apexed-logo.webp" width={70} height={70} alt="apexed-logo" />
          <button className="glass-button rounded-lg px-6 py-3 text-white
          hover-bg-brand-orange transition ms-[3em]">
          Contact Us
          </button>
        </section>
    </header>
  );
}

export default Navbar;