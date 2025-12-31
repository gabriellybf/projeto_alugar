"use client";

import { User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ButtonH() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <button
                onClick={() => setOpen(true)}
                className="
                    flex items-center gap-1.5
                    rounded-full
                    bg-[#f0f0f2]
                    px-4 py-2
                    font-semibold
                    text-black
                    hover:bg-[#e3e3e7]
                    cursor-pointer
                    transition-colors
                "
            >
                <User className="h-4.5 w-4.5" />
                Entrar
            </button>
            <div
                className={`
                    flex flex-col
                    absolute right-0 top-full mt-2 w-56
                    rounded-xl bg-white px-4 py-3
                    text-sm text-gray-700 shadow-lg
                    transition-all duration-200 ease-out
                    ${open ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"}
                `}
            >
                Entre para salvar imóveis, criar alertas e
                acompanhar visitas.
                <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="
                        cursor-pointer
                        rounded-full
                        bg-[#473623]
                        px-4 py-2
                        text-white
                        transition-transform
                        active:scale-95
                    "
                >
                    Entrar
                </button>
            </div>
        </div>
    );
}