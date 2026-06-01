"use client";

import {
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#111111] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Venez nous rendre visite
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Adresse */}
          <div>
            <MapPin
              className="text-yellow-500 mb-4"
              size={28}
            />

            <h3 className="font-semibold text-xl mb-3">
              Adresse
            </h3>

            <p className="text-gray-400">
              Ghazaouet, Sidi Amar
              <br />
              Tlemcen, Algérie
            </p>

            <a
              href="https://maps.app.goo.gl/2TvGVptWDKPwXUJx5"
              target="_blank"
              className="inline-block mt-4 text-yellow-500 hover:text-yellow-400"
            >
              Voir sur Google Maps →
            </a>
          </div>

          {/* Téléphone */}
          <div>
            <Phone
              className="text-yellow-500 mb-4"
              size={28}
            />

            <h3 className="font-semibold text-xl mb-3">
              Téléphone
            </h3>

            <a
              href="tel:0778154849"
              className="text-gray-400 hover:text-white"
            >
              0778 15 48 49
            </a>

            <div className="mt-4">
              <a
                href="https://wa.me/213778154849"
                target="_blank"
                className="text-green-500 hover:text-green-400"
              >
                WhatsApp →
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <Clock
              className="text-yellow-500 mb-4"
              size={28}
            />

            <h3 className="font-semibold text-xl mb-3">
              Horaires
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>Lun - Dim</p>
              <p>09:00 - 00:00</p>
            </div>
          </div>

          {/* Réseaux */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Réseaux sociaux
            </h3>

            <div className="flex gap-4">

              <a
                href="https://www.instagram.com/cremerie_ghazaouet/"
                target="_blank"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100095414114350"
                target="_blank"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
              >
                <FaFacebookF size={22} />
              </a>

            </div>
          </div>

        </div>

        {/* MAP */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-white/10">
          <iframe
            src="https://maps.google.com/maps?q=Ghazaouet&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}