import { Search } from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        className="
          w-full
          h-[900px]
          bg-[url('/page2.jpg')]
          bg-cover
          bg-center
          bg-no-repeat
          flex
          items-center
          justify-center
          py-10
        "
      >
        <button className="text-black font-medium flex items-center gap-1.5 rounded-full px-7 py-2 bg-white">
          Alugue um lar para chamar de seu
          <div className="bg-[#ccbf9b]">
            <Search className="w-4.5 h-4.5" />
          </div>
        </button>
      </section>
    </>
  );
}
