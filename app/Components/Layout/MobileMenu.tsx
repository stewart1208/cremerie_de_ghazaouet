"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navigationLinks } from "@/app/Data/navigation";

interface MobileNavBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavBar({
  isOpen,
  setIsOpen,
}: MobileNavBarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 text-white">
      <div className="flex justify-end p-6">
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu"
        >
          <X size={28} />
        </button>
      </div>

      <div className="mt-16 flex flex-col items-center gap-8">
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-xl font-medium transition hover:text-yellow-400"
          >
            {link.label}
          </Link>
        ))}

        <button className="mt-4 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black">
          Réserver
        </button>
      </div>
    </div>
  );
}