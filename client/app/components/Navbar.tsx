"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Navbar() {

  const router = useRouter();

  const [menu, toggleMenu] = useState<boolean>(true);

  return (
    <>
    <AnimatePresence mode="wait">
      {menu ? 
        <motion.header 
        key="desktop"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -150, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="glass-navbar relative bg-gray-700/10 flex z-20 items-center justify-between urbanist mx-[8vw] my-8 px-4 py-1 border border-gray-700 rounded-3xl">
          <nav className="hidden md:flex gap-8 text-sm text-zinc-300 items-center justify-center">
            <div className="text-xl font-bold text-brand-orange">
              <Image src="/assets/images/apexed-logo.webp" width={70} height={70} alt="apexed-logo" />
            </div>
            <Link href="/"><span>Home</span></Link>
            <span>Services</span>
            <span>About</span>
          </nav>
            <section className="flex justify-between items-center gap-8 text-sm">
              <Image className="md:hidden" src="/assets/images/apexed-logo.webp" width={70} height={70} alt="apexed-logo" />
              <button className="hidden md:flex glass-button rounded-lg px-6 py-3 text-white
              hover-bg-brand-orange transition ms-[3em] cursor-pointer" onClick={() => router.push("../contact")}>
              Contact Us
              </button>
              <button className="md:hidden ms-[8em]" onClick={() => toggleMenu(!menu)}>
                <Image src="/assets/menu-icon.svg" alt="menu-icon" width={50} height={50} />
              </button>
            </section>
        </motion.header>
        :
        <motion.header 
        key="mobile"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -150, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative z-30 glass-navbar w-fill bg-gray-700/10 items-center urbanist p-5
        border border-gray-700">
          <nav className="flex flex-col gap-y-5">
            <span className="flex flex-row justify-between">
                <Image src="/assets/images/apexed-logo.webp" width={70} height={70} alt="apexed-logo" />
                <button className="md:hidden ms-[8em]" onClick={() => toggleMenu(!menu)}>
                  <Image src="/assets/close-icon.svg" alt="menu-icon" width={50} height={50} />
                </button>
            </span>
            <div className="flex flex-col gap-y-3">
              <a className="text-sm text-white no-underline" href="#">Home</a>
              <a className="text-sm text-white no-underline" href="#">Services</a>
              <a className="text-sm text-white no-underline" href="#">About</a>
              <a className="text-sm text-white no-underline" href="#">Contact Us</a>
            </div>
          </nav>
        </motion.header>
      }
      </AnimatePresence>
    </>
  );
}

export default Navbar;