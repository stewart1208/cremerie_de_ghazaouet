"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import MobileNavBar from "./MobileMenu";
import { navigationLinks } from "@/app/Data/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="#hero">
              <Image
                src="/Logo/logo.jpg"
                alt="Logo Delicia"
                width={35}
                height={35}
                priority/>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white transition hover:text-yellow-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              className="hidden rounded-full bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:scale-105 lg:block"
            >
              Réserver
            </button>

            <button
              className="text-white lg:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileNavBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}