export default function login() {
    return (
        <main className="w-full
          h-[640px]
          bg-[url('/page1.jpg')]
          bg-cover
          bg-center
          bg-no-repeat
          flex
          flex-col
          items-center
          justify-center
          ">
            <div className="flex
                flex-col
                justify-left
                gap-4
                p-9
                w-full max-w-md
                rounded-xl
                bg-white/50
                backdrop-blur-md">
                <h1 className="text-black font-bold">
                    Entrar
                </h1>
                <h1 className="text-black font-medium">
                    Abra as portas para um novo morar
                </h1>
                <input
                    type="nome"
                    placeholder="Nome"
                    className="
                        w-full
                        bg-transparent
                        border-b border-black-300
                        px-1 py-2
                        text-black
                        placeholder:text-black-400
                        outline-none
                        transition-colors
                    "
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="
                        w-full
                        bg-transparent
                        border-b border-black-300
                        px-1 py-2
                        text-black
                        placeholder:text-black-400
                        outline-none
                        transition-colors
                    "
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="
                        w-full
                        bg-transparent
                        border-b border-black-300
                        px-1 py-2
                        text-black
                        placeholder:text-black-400
                        outline-none
                        transition-colors
                    "
                />
            </div>
        </main>
    );
}