import React from "react";

const whatsappLink =
  "https://wa.me/5545999999999?text=Olá! Tenho interesse na Creatina Ultra Pure PhysicLab.";

const kitNames = {
  "1": "Kit com 1 pote",
  "2": "Kit com 2 potes",
  "3": "Kit com 3 potes",
};

export default function CompraEmBreve({ kit }) {
  const selectedKit = kitNames[kit];

  React.useEffect(() => {
    document.title = "Compra em breve | PhysicLab";

    return () => {
      document.title = "PhysicLab";
    };
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070707] px-4 py-12 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#D7B46A]/10 blur-[150px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7B46A]/70 to-transparent" />
      </div>

      <section className="relative w-full max-w-[780px] rounded-[30px] border border-white/10 bg-[#0d0d0d] px-6 py-10 text-center shadow-[0_36px_120px_rgba(0,0,0,0.48)] sm:rounded-[38px] sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <a href="/" aria-label="Voltar para a página inicial" className="mx-auto block w-full max-w-[350px]">
          <img
            src="/physiclab-marca.png"
            alt="PhysicLab"
            className="w-full mix-blend-screen"
          />
        </a>

        <div className="mx-auto mt-2 flex w-fit items-center gap-2 rounded-full border border-[#D7B46A]/25 bg-[#D7B46A]/10 px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D7B46A]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#E4C77F] sm:text-[10px]">
            Checkout em atualização
          </span>
        </div>

        <h1 className="mx-auto mt-7 max-w-[650px] text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[3.8rem]">
          Estamos preparando uma
          <span className="block text-[#D7B46A]">experiência melhor.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[590px] text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Nossa página de compra está passando pelos últimos ajustes. Em breve,
          você poderá finalizar seu pedido por aqui com mais praticidade e
          segurança.
        </p>

        {selectedKit && (
          <div className="mx-auto mt-7 max-w-[420px] rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4">
            <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Sua escolha
            </span>
            <strong className="mt-1.5 block text-base font-semibold text-white sm:text-lg">
              {selectedKit} de Creatina Ultra Pure
            </strong>
          </div>
        )}

        <div className="mx-auto mt-9 grid max-w-[580px] gap-3 sm:grid-cols-2">
          <a
            href="/#ofertas"
            className="inline-flex min-h-13 items-center justify-center rounded-full bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-[#D7B46A] sm:text-[11px]"
          >
            Voltar para as ofertas
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.12em] text-white transition hover:border-white/30 hover:bg-white hover:text-black sm:text-[10px]"
          >
            Comprar pelo WhatsApp
          </a>
        </div>

        <p className="mt-8 text-[10px] leading-5 text-zinc-600 sm:text-[11px]">
          Obrigado pela compreensão. PhysicLab, sua evolução começa aqui.
        </p>
      </section>
    </main>
  );
}
