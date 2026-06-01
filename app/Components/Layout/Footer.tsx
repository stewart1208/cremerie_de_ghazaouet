import Link from "next/link";
import { navigationLinks } from "@/app/Data/navigation";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              DELICIA
            </h3>

            <p className="text-gray-400">
              Restaurant • Crèmerie • Cafétéria •
              Pâtisserie
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Navigation
            </h4>

            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Contact
            </h4>

            <div className="space-y-2 text-gray-400">
              <p>📍 Ghazaouet, Tlemcen, Algérie</p>
              <p>📞 +213 778 15 48 49</p>
              <p>✉️ contact@delicia.dz</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cremerie De Ghazaouet || Devlopper par Bezzeghoud.M 
          Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}