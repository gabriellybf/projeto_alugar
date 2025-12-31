import { ChevronDown } from "lucide-react";
import { User } from "lucide-react";
import ButtonH from "../components/ButtonH";

export default function Header() {
  return (
    <header className="w-full bg-white px-8 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-xl font-semibold text-black">
            QuintoAndar
          </h1>
          <nav className="flex items-center gap-8">
            <a href="/" className="group text-black flex items-center gap-1.5 rounded-full px-4 py-2 bg-white hover:bg-[#ccbf9b] transition-colors">
              Alugar
              <ChevronDown
                className="w-4 h-4
                  transition-transform
                  duration-450
                  ease-out
                  group-hover:rotate-180
                "
              />
            </a>
            <a href="/" className="group text-black flex items-center gap-1.5 rounded-full px-4 py-2 bg-white hover:bg-[#ccbf9b] transition-colors">
              Comprar
              <ChevronDown
                className="w-4 h-4
                  transition-transform
                  duration-450
                  ease-out
                  group-hover:rotate-180
                "
              />
            </a>
            <a href="/" className="group text-black flex items-center gap-1.5 rounded-full px-4 py-2 bg-white hover:bg-[#ccbf9b] transition-colors">
              Anunciar
              <ChevronDown
                className="w-4 h-4
                  transition-transform
                  duration-450
                  ease-out
                  group-hover:rotate-180
                "
              />
            </a>
            <a href="/" className="group text-black flex items-center gap-1.5 rounded-full px-4 py-2 bg-white hover:bg-[#ccbf9b] transition-colors">
              Ajuda
              <ChevronDown
                className="w-4 h-4
                  transition-transform
                  duration-450
                  ease-out
                  group-hover:rotate-180
                "
              />
            </a>
          </nav>
          <ButtonH />
        </div>
    </header>
  );
}
