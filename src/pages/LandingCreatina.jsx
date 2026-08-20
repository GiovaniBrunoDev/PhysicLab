import React from "react";

const whatsappLink =
  "https://wa.me/5545999999999?text=Olá! Tenho interesse na Creatina Ultra Pure PhysicLab.";

const benefits = [
  {
    title: "Mais força nos treinos",
    text: "Ajuda você a evoluir carga e manter melhor desempenho nas séries pesadas.",
    image: "/Beneficio1.png",
  },
  {
    title: "Mais volume muscular",
    text: "A Creatina Ultra Pure PhysicLab contribui para músculos com aparência mais cheia e densa. Com treino e alimentação adequados, ela apoia o desenvolvimento muscular ao longo do tempo.",
    image: "/Beneficio2.png",
  },
  {
    title: "Mais rendimento",
    text: "Ajuda no rendimento em atividades que exigem força, explosão e esforços repetidos. Ideal para musculação, futebol e exercícios de alta intensidade, contribui para sustentar a performance por mais tempo.",
    image: "/Beneficio3.png",
  },
  {
    title: "Melhor recuperação entre séries",
    text: "Auxilia o corpo a manter energia disponível durante treinos intensos, ajudando você a continuar forte entre uma série e outra e a preservar a qualidade do esforço.",
    image: "/Beneficio4.png",
  },
];

const offers = [
  {
    quantity: 1,
    title: "1 pote",
    price: "69,90",
    perUnit: null,
    badge: "Para experimentar",
    savings: null,
    description:
      "Uma escolha simples para conhecer a PhysicLab e experimentar a Ultra Pure no dia a dia.",
    highlights: [
      "Ideal para a primeira compra",
      "300 g em uma única unidade",
    ],
    image: "/kit-1-pote.png",
    imageAlt: "Kit com 1 pote de Creatina Ultra Pure PhysicLab",
  },
  {
    quantity: 2,
    title: "2 potes",
    price: "119,90",
    perUnit: "R$ 59,95 por pote",
    badge: "Mais escolhido",
    savings: "Economize R$ 19,90",
    description:
      "O melhor equilíbrio entre quantidade e valor para levar duas unidades.",
    highlights: [
      "Preço melhor por pote",
      "Uma unidade extra para ter em casa",
    ],
    featured: true,
    image: "/kit-2-potes.png",
    imageAlt: "Kit com 2 potes de Creatina Ultra Pure PhysicLab",
  },
  {
    quantity: 3,
    title: "3 potes",
    price: "169,90",
    perUnit: "R$ 56,63 por pote",
    badge: "Maior economia",
    savings: "Economize R$ 39,80",
    description:
      "Mais produto em uma única compra com o menor valor por unidade.",
    highlights: [
      "O menor preço por pote",
      "Economia de R$ 39,80 no kit",
    ],
    image: "/kit-3-potes.png",
    imageAlt: "Kit com 3 potes de Creatina Ultra Pure PhysicLab",
  },
];

function purchasePageLink(quantity) {
  return `/?compra=em-breve&kit=${quantity}`;
}

const trustItems = [
  "Creatina monohidratada",
  "Fórmula objetiva",
  "Suplemento em pó",
  "Fácil de usar diariamente",
];

const specs = [
  ["Produto", "Creatina Ultra Pure"],
  ["Tipo", "Creatina monohidratada"],
  ["Conteúdo", "300g"],
  ["Formato", "Suplemento alimentar em pó"],
  ["Marca", "PhysicLab"],
];

const faqs = [
  {
    question: "Creatina engorda?",
    answer:
      "A creatina pode aumentar um pouco o peso por causa da retenção de água nos músculos. Isso não significa ganho de gordura corporal.",
  },
  {
    question: "Preciso treinar para sentir os benefícios?",
    answer:
      "Sim. Para melhorar força e desempenho, a creatina deve ser combinada com treino, alimentação adequada e descanso.",
  },
  {
    question: "Posso tomar todos os dias?",
    answer:
      "Sim, adultos saudáveis podem usar creatina diariamente. Respeite a quantidade indicada no rótulo ou a orientação de um profissional. Se você tem alguma condição de saúde ou usa medicamentos, procure orientação antes de consumir.",
  },
  {
    question: "Serve para iniciantes?",
    answer:
      "Sim. Adultos saudáveis que estão começando a treinar também podem usar creatina. O importante é seguir as recomendações do rótulo e manter treino e alimentação adequados.",
  },
  {
    question: "Como comprar?",
    answer:
      "Escolha um kit na seção de ofertas e clique em “Comprar pelo WhatsApp”. Nossa equipe continuará o atendimento por lá enquanto o checkout está sendo atualizado.",
  },
];

export default function LandingCreatina() {
  const [showFloatingOffer, setShowFloatingOffer] = React.useState(false);

  React.useEffect(() => {
    const hero = document.getElementById("inicio");

    if (!hero || !("IntersectionObserver" in window)) {
      setShowFloatingOffer(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatingOffer(!entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F3EA] text-[#121212] antialiased">
      <style>{`
          @keyframes revealUp {
            from {
              opacity: 0;
              transform: translateY(22px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .reveal-up {
            opacity: 0;
            animation: revealUp 0.8s ease forwards;
          }

          .reveal-delay-1 {
            animation-delay: 0.12s;
          }

          .reveal-delay-2 {
            animation-delay: 0.22s;
          }

          .reveal-delay-3 {
            animation-delay: 0.32s;
          }

          @media (prefers-reduced-motion: reduce) {
            .reveal-up {
              opacity: 1;
              animation: none;
              transform: none;
            }
          }
        `}</style>
      <Header />

      {/* HERO FULLSCREEN */}
      <section
        id="inicio"
        className="relative min-h-[1080px] overflow-hidden bg-[#050505] pt-0 text-white md:min-h-[88vh] md:pt-20"
      >
        <picture className="absolute inset-x-0 bottom-44 top-12 md:inset-0">
          <source
            media="(max-width: 767px)"
            srcSet="/hero-creatina-mobile-v2.png"
          />
          <img
          src="/hero-creatina-desktop-v10.png"
            alt="Creatina Ultra Pure PhysicLab"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[88%_center] md:object-center"
          />
        </picture>

        {/* Sombra suave apenas no lado esquerdo para melhorar a leitura do texto */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 via-[38%] to-transparent md:bg-gradient-to-r md:from-black/92 md:via-black/58 md:via-[46%] md:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-44 h-24 bg-gradient-to-b from-transparent to-[#050505]/80 md:hidden" />

        <div className="relative z-10 mx-auto flex min-h-[1000px] max-w-[1540px] items-start px-4 pb-10 pt-24 sm:px-5 md:min-h-[calc(88vh-80px)] md:items-center md:py-16 lg:px-14 xl:px-20">
          <div className="flex min-h-[920px] w-full max-w-[640px] flex-col md:block md:min-h-0">
            <div>
              <div className="reveal-up flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D7B46A]/35 bg-[#D7B46A]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E4C77F] backdrop-blur-md md:text-[12px]">
                  Creatina PhysicLab Ultra Pure
                </span>
              </div>

              <h1 className="reveal-up mt-5 max-w-[620px] text-[3.15rem] font-semibold leading-[0.94] tracking-[-0.065em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)] md:mt-7 md:text-[5.4rem] md:leading-[0.9] md:tracking-[-0.075em] lg:text-[6rem]">
                Mais força.
                <span className="block bg-gradient-to-r from-[#F3D891] via-[#D7B46A] to-[#9A7635] bg-clip-text text-transparent">
                  Mais desempenho.
                </span>
              </h1>

              <p className="reveal-up reveal-delay-1 mx-auto mt-5 max-w-[340px] text-center text-[15px] leading-7 text-zinc-200 drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] md:mx-0 md:mt-6 md:max-w-[520px] md:text-left md:text-lg md:leading-8">
                Creatina monohidratada de alta pureza, fácil de usar e feita para
                quem quer elevar o nível do treino.
              </p>
            </div>

            <div className="mt-auto translate-y-4 pb-1 md:mt-7 md:translate-y-0 md:pb-0">
              <div className="reveal-up reveal-delay-2 flex justify-center md:justify-start">
                <a
                  href="#ofertas"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#D7B46A] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-[0_18px_50px_rgba(215,180,106,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E8CA84] md:w-auto"
                >
                  Quero minha creatina
                </a>
              </div>

              <ul className="reveal-up reveal-delay-3 mt-4 flex max-w-xl flex-wrap justify-center gap-x-5 gap-y-2 text-center text-[10px] font-bold uppercase tracking-[0.13em] text-zinc-300 sm:text-[11px] md:mt-7 md:justify-start md:text-left">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D7B46A]" />
                  100% monohidratada
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D7B46A]" />
                  Zero açúcar
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D7B46A]" />
                  Fácil de usar
                </li>
              </ul>

              <p className="mx-auto mt-3 max-w-[350px] text-center text-[10px] leading-5 text-zinc-400 sm:max-w-lg sm:text-[11px] md:mx-0 md:mt-5 md:text-left">
                Suplemento alimentar. Use conforme a recomendação do rótulo. Em
                caso de dúvidas, consulte um profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROMESSA FORTE COM BANNER */}
      <section className="relative left-1/2 min-h-[820px] w-screen -translate-x-1/2 overflow-hidden bg-[#F7F3EA] px-4 py-14 sm:px-5 sm:py-20 md:min-h-[600px] md:py-0 lg:px-14 xl:px-20">
        <picture className="absolute inset-0">
          <source
            media="(max-width: 767px)"
            srcSet="/promessa-creatina-banner-mobile.png"
          />
          <img
            src="/promessa-creatina-banner.png"
            alt="Creatina Ultra Pure PhysicLab"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-bottom md:object-contain md:object-right"
          />
        </picture>

        {/* Transição suave: texto limpo à esquerda e imagem mais visível à direita */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F7F3EA] from-[0%] via-[#F7F3EA]/95 via-[42%] to-[#F7F3EA]/0 to-[68%] md:bg-gradient-to-r md:via-[36%] md:to-[68%]" />

        {/* Leve clareamento no centro para suavizar a passagem */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-gradient-to-r from-[#F7F3EA] via-[#F7F3EA]/70 to-transparent md:block" />

        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1540px] items-start md:min-h-[600px] md:items-center">
          <div className="max-w-[710px]">
            <h2 className="reveal-up reveal-delay-1 mt-2 max-w-[680px] text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#111111] sm:mt-5 sm:text-[3.2rem] md:text-[4rem] lg:text-[4.65rem]">
              O suplemento que entrega resultado de verdade
            </h2>

            <p className="reveal-up reveal-delay-2 mt-5 max-w-[650px] text-[0.95rem] leading-7 text-[#4F4F4F] sm:mt-7 sm:text-xl sm:leading-9 lg:text-[1.22rem] lg:leading-9">
              A creatina Ultra Pure PhysicLab é uma das escolhas mais inteligentes
              para quem treina e quer melhorar força, explosão, volume muscular e
              desempenho. Com uso simples e fórmula eficiente, ela acompanha seus
              treinos todos os dias.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section
        id="beneficios"
        className="relative bg-[#F7F3EA] px-4 pb-20 pt-14 sm:px-5 sm:pb-24 sm:pt-16 lg:mx-auto lg:my-10 lg:w-[calc(100%-4rem)] lg:max-w-[1280px] lg:rounded-[36px] lg:px-12 lg:pb-20 lg:pt-14 xl:px-16"
      >
        <div className="absolute left-0 top-0 h-20 w-full bg-gradient-to-b from-white to-[#F7F3EA]" />

        <div className="relative mx-auto max-w-[1540px]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-5 text-[2.35rem] font-semibold leading-[1] tracking-[-0.06em] text-[#111111] sm:text-6xl md:text-[4.4rem] lg:text-[4.9rem]">
              O que você sente na prática
            </h2>

          </div>

          <div className="mt-16 space-y-16 lg:mt-14 lg:space-y-16">
            {benefits.map((benefit, index) => (
              <RevealOnScroll key={benefit.title} delay={index * 120}>
                <BenefitSplit
                  reverse={index % 2 === 1}
                  {...benefit}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="relative left-1/2 min-h-[760px] w-screen -translate-x-1/2 overflow-hidden bg-[#050505] px-4 py-14 text-white sm:px-5 md:min-h-0 md:py-32 lg:px-14 lg:py-40 xl:px-20">
        <picture className="absolute inset-0">
          <source
            media="(max-width: 767px)"
            srcSet="/energia-treino-banner-mobile.png"
          />
          <img
            src="/energia-treino-banner.png"
            alt="Energia para treino intenso"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </picture>

        {/* Gradiente para leitura à esquerda */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505] from-[0%] via-[#050505]/94 via-[42%] to-[#050505]/10 to-[72%] md:bg-gradient-to-r md:via-[43%] md:to-[#050505]/35 md:to-[76%]" />

        {/* Sombra inferior suave */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505]/90 to-transparent" />

        <div className="relative z-10 mx-auto min-h-[650px] max-w-[1540px] md:min-h-0">
          <div className="max-w-[760px]">
            <h2 className="reveal-up reveal-delay-1 mt-2 max-w-[720px] text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:mt-5 sm:text-[3.45rem] md:text-[4.25rem] lg:text-[4.65rem]">
              Feita para quem leva
              <br />
              treino a sério.
            </h2>

            <p className="reveal-up reveal-delay-2 mt-6 max-w-[660px] text-[1rem] leading-8 text-zinc-300 sm:text-lg sm:leading-8 lg:text-[1.08rem]">
              A Creatina Ultra Pure PhysicLab foi pensada para quem treina com foco,
              disciplina e propósito. Fácil de incluir no dia a dia, ela apoia
              treinos de força, explosão e alta intensidade quando combinada com
              alimentação adequada e descanso.
            </p>

            
          </div>
        </div>
      </section>


      {/* POR QUE COMPRAR */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-5 sm:py-24 lg:px-14 lg:py-32 xl:px-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#D7B46A]/10 blur-[130px]" />
          <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[#F7F3EA] blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-[1540px]">
          {/* TÍTULO CENTRAL */}
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="reveal-up reveal-delay-1 mt-5 text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[5.1rem]">
              Por que escolher a
              <br />
              Creatina PhysicLab?
            </h2>
          </div>

          {/* IMAGEM FULL + TABELA */}
          <RevealOnScroll delay={120}>
            <div className="relative mt-12 overflow-hidden rounded-[28px] bg-[#F7F3EA] shadow-[0_30px_100px_rgba(0,0,0,0.08)] sm:rounded-[44px] lg:mt-20">
              <img
                src="/creatina-por-que-comprar.png"
                alt="Creatina Ultra Pure PhysicLab"
                loading="lazy"
                decoding="async"
                className="absolute inset-x-0 top-0 h-[320px] w-full object-cover object-left sm:h-[400px] lg:inset-0 lg:h-full"
              />

              {/* Sombra branca no lado da tabela super suave */}
              <div className="pointer-events-none absolute inset-x-0 top-[170px] h-[170px] bg-gradient-to-b from-transparent to-[#F7F3EA] sm:top-[230px] sm:h-[190px] lg:hidden" />
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[66%] bg-[linear-gradient(to_left,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.82)_36%,rgba(255,255,255,0.5)_60%,rgba(255,255,255,0.18)_80%,rgba(255,255,255,0)_100%)] lg:block" />

              <div className="relative z-10 grid items-center gap-10 p-4 pt-[275px] sm:p-8 sm:pt-[355px] lg:min-h-[620px] lg:grid-cols-[1fr_0.9fr] lg:p-12 xl:p-16">
                {/* Espaço esquerdo para destacar os elementos da imagem */}
                <div className="hidden lg:block" />

                {/* TABELA */}
                <div className="ml-auto w-full max-w-[650px]">
                  <div className="rounded-[24px] border border-[#E9E4DA] bg-white/95 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.09)] backdrop-blur-xl sm:rounded-[40px] sm:p-9 lg:p-11 xl:p-12">
                    <div className="mb-6 flex items-center justify-between gap-6 sm:mb-9">
                      <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#111111] sm:text-4xl">
                        Diferenciais da fórmula
                      </h3>


                    </div>

                    <div className="space-y-1">
                      <MinimalReasonItem text="100% creatina monohidratada" />
                      <MinimalReasonItem text="Alta pureza" />
                      <MinimalReasonItem text="Excelente solubilidade" />
                      <MinimalReasonItem text="Zero carbo" />
                      <MinimalReasonItem text="Sem açúcar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* TEXTO ABAIXO */}
          <div className="mx-auto mt-14 max-w-4xl text-center">
            <p className="reveal-up reveal-delay-2 text-[1rem] leading-8 text-[#5F5F5F] sm:text-lg sm:leading-8">
              A Ultra Pure PhysicLab foi criada para quem quer uma creatina
              simples, direta e eficiente. Uma escolha inteligente para melhorar o
              desempenho sem pagar por fórmulas desnecessárias.
            </p>

            <div className="mt-9 flex justify-center">
              <PrimaryButton href="#ofertas">Comprar agora</PrimaryButton>
            </div>
          </div>

          {/* CARDS MAIORES */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <RevealOnScroll delay={240}>
              <CleanValueBlock
                title="Custo-benefício real"
                text="Um dos suplementos mais inteligentes para quem busca eficiência sem investir em produtos desnecessários."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={360}>
              <CleanValueBlock
                title="Para todos os níveis"
                text="Serve para iniciantes, intermediários e avançados que querem progredir no treino com confiança."
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>
      {/* PROVA SOCIAL */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-5 sm:py-24 lg:px-14 lg:py-32 xl:px-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#F7F3EA] blur-[120px]" />
          <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D7B46A]/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-[1540px]">
          {/* TOPO */}
          <div className="mx-auto max-w-4xl text-center">

            <h2 className="reveal-up reveal-delay-1 mt-5 text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[5.1rem]">
              Resultados construídos
              <br />
              treino após treino.
            </h2>

            <p className="reveal-up reveal-delay-2 mx-auto mt-7 max-w-2xl text-[1rem] leading-8 text-[#5F5F5F] sm:text-lg sm:leading-8">
              Relatos de quem incluiu a Creatina Ultra Pure PhysicLab no dia a dia e
              percebeu avanços com uso contínuo, alimentação e descanso.
            </p>
          </div>

          {/* DEPOIMENTOS */}
          <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
            <RevealOnScroll delay={120}>
              <SocialProofCard
                name="Lucas F."
                detail="Hipertrofia"
                text="Comecei a perceber mais volume e mais força com o uso contínuo. Não foi de um dia para o outro, mas com treino e alimentação, fez diferença na minha evolução."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={240}>
              <SocialProofCard
                name="Amanda S."
                detail="Treino intenso"
                text="Senti que passei a sustentar melhor o ritmo das séries e manter a intensidade sem perder tanto rendimento no final."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={360}>
              <SocialProofCard
                name="João P."
                detail="Academia 5x semana"
                text="Para mim, o principal foi a performance. Percebi mais carga nos exercícios básicos e uma sensação melhor de recuperação entre um treino e outro."
              />
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* BLOCO EMOCIONAL DE VENDA */}
      <section className="relative overflow-hidden bg-[#050505] text-white">
        <div className="relative min-h-[1120px] overflow-hidden px-4 py-16 sm:px-5 sm:py-24 md:min-h-[720px] lg:px-14 lg:py-32 xl:px-20">
          <picture className="absolute inset-0">
            <source
              media="(max-width: 767px)"
              srcSet="/bloco-creatina-treino-mobile.png"
            />
            <img
              src="/bloco-creatina-treino.png"
              alt="Creatina Ultra Pure PhysicLab em ambiente de treino"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </picture>

          {/* Contraste para leitura */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030303] from-[0%] via-[#050505]/95 via-[62%] to-[#050505]/15 to-[82%] md:bg-gradient-to-r md:via-[43%] md:to-[#050505]/20" />

          {/* Profundidade e atmosfera premium */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
          <div className="pointer-events-none absolute left-[10%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#D7B46A]/[0.06] blur-[130px]" />

          <div className="relative z-10 mx-auto flex min-h-[940px] max-w-[1540px] items-start md:min-h-[520px] md:items-center">
            <div className="max-w-[900px]">
              



              <h2 className="reveal-up reveal-delay-1 mt-5 max-w-5xl text-[2.35rem] font-semibold leading-[0.97] tracking-[-0.055em] text-white sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.35rem]">
                Mais força para treinar.
                <span className="mt-2 block text-[#D7B46A]">
                  Mais capacidade para evoluir.
                </span>
              </h2>

              <p className="reveal-up reveal-delay-2 mt-8 max-w-2xl text-[1rem] leading-8 text-zinc-300 sm:text-lg sm:leading-8">
                A Creatina Ultra Pure PhysicLab auxilia no aumento do desempenho
                durante exercícios de alta intensidade. Na prática, você ganha mais
                capacidade para treinar forte e continuar avançando em seus objetivos.
              </p>

              {/* BENEFÍCIOS */}
              <div className="reveal-up reveal-delay-2 mt-9 grid max-w-3xl gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
                  <span className="block text-sm font-semibold text-white">
                    Potência
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-zinc-400">
                    Para aumentar a intensidade dos seus treinos.
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
                  <span className="block text-sm font-semibold text-white">
                    Rendimento
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-zinc-400">
                    Melhor rendimento em exercícios de alta intensidade.
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
                  <span className="block text-sm font-semibold text-white">
                    Progresso contínuo
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-zinc-400">
                    Suporte diário para continuar avançando.
                  </span>
                </div>
              </div>

              <div className="reveal-up reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="#ofertas">
                  Quero treinar melhor
                </PrimaryButton>

                <a
                  href="#ofertas"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#D7B46A] hover:text-[#D7B46A]"
                >
                  Ver ofertas
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* TRANSIÇÃO ENTRE O DESEJO E A OFERTA */}
      <section
        id="produto"
        className="relative overflow-hidden bg-[#F7F3EA] px-4 py-20 sm:px-5 sm:py-24 lg:px-14 lg:py-32 xl:px-20"
      >
        {/* Contraste claro e detalhes discretos da identidade PhysicLab */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-white blur-[100px]" />
          <div className="absolute -right-32 bottom-0 h-[440px] w-[440px] rounded-full bg-[#D7B46A]/15 blur-[130px]" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7B46A] to-transparent" />

        <div className="relative mx-auto grid max-w-[1480px] gap-10 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          {/* Mensagem que prepara a escolha */}
          <RevealOnScroll delay={80}>
            <div className="max-w-[620px]">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#B99348]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9A7635] sm:text-[11px]">
                  O próximo passo é simples
                </span>
              </div>

              <h2 className="mt-6 text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111] sm:text-[3.7rem] sm:leading-[0.96] sm:tracking-[-0.07em] md:text-[4.5rem] lg:text-[5rem]">
                Garanta sua creatina.
                <span className="block text-[#B99348]">
                  Economize na escolha.
                </span>
              </h2>

              <p className="mt-7 max-w-[570px] text-base leading-8 text-[#5F5F5F] sm:text-lg">
                Para aproveitar os benefícios por mais tempo, a PhysicLab preparou
                opções para quem quer começar e para quem prefere levar mais potes
                pagando menos por unidade.
              </p>

              <a
                href="#ofertas"
                className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#111111] px-8 py-4 text-xs font-bold uppercase tracking-[0.17em] text-white shadow-[0_18px_50px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D7B46A] hover:text-black sm:w-auto"
              >
                Ver kits e preços
                <span aria-hidden="true" className="text-base leading-none">
                  ↓
                </span>
              </a>
            </div>
          </RevealOnScroll>

          {/* Resumo das opções antes dos cards de oferta */}
          <RevealOnScroll delay={180}>
            <div className="overflow-hidden rounded-[28px] border border-[#E4D8BE] bg-white shadow-[0_28px_90px_rgba(0,0,0,0.07)] sm:rounded-[38px]">
              <div className="flex flex-col items-start gap-3 border-b border-[#E9E4DA] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8A8A8A]">
                  Escolha de acordo com seu objetivo
                </span>

                <span className="rounded-full bg-[#F7F3EA] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#9A7635]">
                  Ultra Pure
                </span>
              </div>

              <SalesDecisionLine
                number="01"
                title="1 pote para começar"
                text="Uma opção simples para conhecer a Creatina Ultra Pure PhysicLab."
              />

              <SalesDecisionLine
                number="02"
                title="2 potes com melhor equilíbrio"
                text="A escolha mais popular para usar por mais tempo e reduzir o valor por pote."
              />

              <SalesDecisionLine
                number="03"
                title="3 potes com maior economia"
                text="O menor valor por unidade para quem não quer interromper a suplementação."
              />

              <div className="flex flex-col gap-3 bg-[#111111] px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">
                <p className="text-sm font-semibold tracking-[-0.02em]">
                  Quanto mais potes, menor o valor por unidade.
                </p>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D7B46A]">
                  A partir de R$ 56,63 por pote
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>


      {/* OFERTAS */}
      <section
        id="ofertas"
        className="relative isolate scroll-mt-0 overflow-hidden bg-[#050505] px-4 py-20 text-white sm:px-5 sm:py-24 md:scroll-mt-20 lg:px-14 lg:py-32 xl:px-20"
      >
        {/* Iluminação decorativa */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#D7B46A]/[0.05] blur-[160px]" />

        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#D7B46A]/35 to-transparent" />

        <div className="mx-auto max-w-[1600px]">
          {/* Cabeçalho */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D7B46A]/30 bg-[#D7B46A]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E4C77F] sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D7B46A]" />
              Oferta especial
            </span>

            <h2 className="mt-6 text-[2.4rem] font-semibold leading-[0.97] tracking-[-0.055em] sm:text-6xl sm:leading-[0.95] sm:tracking-[-0.065em] md:text-7xl lg:text-[5.2rem]">
              Escolha seu kit
              <span className="block bg-gradient-to-r from-[#F4D98F] via-[#D7B46A] to-[#A77A2C] bg-clip-text text-transparent">
                e economize mais.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Garanta sua Creatina Ultra Pure e tenha seu suplemento sempre à mão.
              Cada pote contém 300 g.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3 lg:mt-20 lg:gap-7">
            {offers.map((offer) => (
              <OfferCard key={offer.quantity} {...offer} />
            ))}
          </div>

          {/* Informações inferiores */}
          <div className="mx-auto mt-12 max-w-4xl border-t border-white/10 pt-8 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400 sm:text-[11px]">
            <p>
              <span className="text-[#D7B46A]">Compra segura.</span>{" "}
              Atendimento direto para escolher seu kit com tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* COMO USAR + FAQ */}
      <section className="bg-[#F7F3EA] px-4 py-20 sm:px-5 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[28px] border border-[#E4D8BE] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:rounded-[38px] sm:p-8 md:p-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#B99348]">
              Como usar
            </span>

            <h2 className="mt-6 text-[2.1rem] font-semibold leading-[1] tracking-[-0.055em] text-[#111111] sm:text-4xl md:text-6xl">
              Simples de usar todos os dias.
            </h2>

            <p className="mt-7 text-base leading-8 text-[#5F5F5F] sm:text-lg">
              Misture conforme a recomendação do rótulo ou orientação de um
              profissional. Pode ser consumida com água, suco ou junto da sua
              refeição, de acordo com sua preferência.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#777777]">
              Suplementos não substituem uma alimentação equilibrada. Para aproveitar
              melhor o produto, mantenha treino, alimentação e descanso adequados.
            </p>
          </div>

          <div id="faq" className="rounded-[28px] border border-[#E4D8BE] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:rounded-[38px] sm:p-8 md:p-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#B99348]">
              Dúvidas frequentes
            </span>

            <h2 className="mt-6 text-[2.1rem] font-semibold leading-[1] tracking-[-0.055em] text-[#111111] sm:text-4xl md:text-6xl">
              Perguntas comuns
            </h2>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE A MARCA */}
      <section
        id="marca"
        className="relative scroll-mt-20 overflow-hidden border-y border-white/10 bg-[#080808] px-4 py-20 text-white sm:px-5 sm:py-24 lg:px-14 lg:py-28 xl:px-20"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/[0.025] to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-24">
          <RevealOnScroll>
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#D7B46A]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#D7B46A] sm:text-[11px]">
                  Sobre a PhysicLab
                </span>
              </div>

              <h2 className="mt-6 max-w-[760px] text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-[3.65rem] lg:text-[4.35rem]">
                Criada para quem busca
                <span className="block text-[#D7B46A]">
                  o próximo nível.
                </span>
              </h2>

              <p className="mt-7 max-w-[680px] text-base leading-8 text-zinc-400 sm:text-lg">
                A PhysicLab nasceu para acompanhar pessoas que transformam esforço
                em evolução. Unimos qualidade, praticidade e desempenho em produtos
                pensados para acompanhar uma vida ativa.
              </p>

              <p className="mt-5 max-w-[680px] text-base leading-8 text-zinc-400 sm:text-lg">
                A Creatina Ultra Pure traduz o nosso propósito: oferecer uma
                suplementação que valoriza cada treino e acompanha você na
                construção dos seus objetivos.
              </p>

              <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="h-px w-9 shrink-0 bg-[#D7B46A]" />
                <p className="text-sm font-semibold tracking-[0.01em] text-zinc-200 sm:text-base">
                  PhysicLab. Sua evolução começa aqui.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="mx-auto w-full max-w-[680px]">
              <div className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-[26px] border border-white/10 bg-[#0c0c0c] px-6 py-10 sm:min-h-[340px] sm:rounded-[32px] sm:px-10">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#D7B46A]/60 to-transparent" />
                <img
                  src="/physiclab-marca-v2.png"
                  alt="PhysicLab Supplements"
                  loading="lazy"
                  decoding="async"
                  className="relative w-full max-w-[570px] mix-blend-screen"
                />

                
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />


      <a
        href="#ofertas"
        aria-hidden={!showFloatingOffer}
        tabIndex={showFloatingOffer ? 0 : -1}
        className={`fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-[#D7B46A] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_18px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8CA84] md:hidden ${showFloatingOffer
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
          }`}
      >
        Comprar agora
      </a>

    </main>
  );
}

function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#050505] px-4 pb-28 pt-12 text-white sm:px-5 md:pb-10 lg:px-14 lg:pt-14 xl:px-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7B46A]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1540px]">
        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400 sm:gap-x-9">
            <li>
              <a href="#inicio" className="transition hover:text-white">
                Início
              </a>
            </li>
            <li>
              <a href="#beneficios" className="transition hover:text-white">
                Benefícios
              </a>
            </li>
            <li>
              <a href="#produto" className="transition hover:text-white">
                Produto
              </a>
            </li>
            <li>
              <a href="#ofertas" className="transition hover:text-white">
                Ofertas
              </a>
            </li>
            <li>
              <a href="#marca" className="transition hover:text-white">
                Marca
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-white">
                Dúvidas
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-10 border-t border-white/10 pt-7 text-center text-xs leading-6 text-zinc-500">
          <p>
            © {new Date().getFullYear()} PhysicLab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1540px] items-center justify-center px-4 sm:px-5 md:h-20 md:justify-between lg:px-14 xl:px-20">
        <a
          href="#inicio"
          aria-label="Voltar ao início"
          className="inline-flex items-center"
        >
          <img
            src="/physiclab-logo-menu.png"
            alt="PhysicLab"
            className="h-7 w-auto object-contain md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
          <a href="#beneficios" className="transition hover:text-white">
            Benefícios
          </a>
          <a href="#produto" className="transition hover:text-white">
            Produto
          </a>
          <a href="#marca" className="transition hover:text-white">
            Marca
          </a>
          <a href="#faq" className="transition hover:text-white">
            Dúvidas
          </a>
        </nav>
      </div>
    </header>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex w-full items-center justify-center rounded-full bg-[#D7B46A] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-[0_18px_50px_rgba(215,180,106,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E8CA84] sm:w-auto"
    >
      {children}
    </a>
  );
}

function SectionHeader({ label, title, text }) {
  return (
    <div className="sticky top-28 max-w-3xl">
      <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#B99348]">
        {label}
      </span>

      <h2 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-[#111111] md:text-7xl">
        {title}
      </h2>

      <p className="mt-7 text-base leading-8 text-[#5F5F5F] sm:text-lg">
        {text}
      </p>
    </div>
  );
}


function RevealOnScroll({ children, delay = 0 }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
    >
      {children}
    </div>
  );
}

function BenefitSplit({ title, text, image, reverse }) {
  return (
    <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <div className="group relative overflow-hidden rounded-[34px] bg-[#111111] shadow-[0_24px_80px_rgba(0,0,0,0.1)]">
          <BenefitImage
            image={image}
            title={title}
            className="h-[320px] sm:h-[400px] lg:h-[420px]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>
      </div>

      <div
        className={
          reverse
            ? "lg:order-1 lg:pr-6"
            : "lg:order-2 lg:pl-6"
        }
      >
        <h3 className="max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.06em] text-[#111111] md:text-6xl">
          {title}
        </h3>

        <p className="mt-6 max-w-xl text-base leading-8 text-[#5F5F5F] sm:text-lg">
          {text}
        </p>

        <div className="mt-9 h-px w-full max-w-xl bg-gradient-to-r from-[#B99348] via-[#E9E4DA] to-transparent" />
      </div>
    </article>
  );
}


function BenefitCard({ number, title, text, image }) {
  return (
    <article className="group overflow-hidden rounded-[34px] border border-[#E9E4DA] bg-white shadow-[0_22px_70px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.1)]">
      <div className="relative overflow-hidden bg-[#111111]">
        <BenefitImage
          image={image}
          title={title}
          className="h-64 sm:h-72 lg:h-80"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 backdrop-blur-md">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D7B46A]">
            {number}
          </span>
        </div>
      </div>

      <div className="p-7 md:p-8">
        <h3 className="text-3xl font-semibold leading-[1] tracking-[-0.055em] text-[#111111] md:text-4xl">
          {title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-[#5F5F5F] sm:text-base">
          {text}
        </p>
      </div>
    </article>
  );
}

function BenefitFeature({ number, title, text, image, reverse }) {
  return (
    <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <div className="group relative overflow-hidden rounded-[38px] bg-[#111111] shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
          <BenefitImage image={image} title={title} />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D7B46A]">
              {number}
            </span>
          </div>
        </div>
      </div>

      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <div className={reverse ? "max-w-xl" : "max-w-xl lg:ml-auto"}>
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#B99348]">
            Benefício {number}
          </span>

          <h3 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.06em] text-[#111111] md:text-6xl">
            {title}
          </h3>

          <p className="mt-6 text-base leading-8 text-[#5F5F5F] sm:text-lg">
            {text}
          </p>

          <div className="mt-9 h-px w-full bg-gradient-to-r from-[#B99348] via-[#E9E4DA] to-transparent" />
        </div>
      </div>
    </article>
  );
}

function BenefitImage({ image, title, className }) {
  const extensions = ["", ".png", ".jpg", ".jpeg", ".webp"];

  function handleImageError(event) {
    const img = event.currentTarget;
    const currentIndex = Number(img.dataset.fallbackIndex || 0);
    const nextIndex = currentIndex + 1;

    if (nextIndex < extensions.length) {
      img.dataset.fallbackIndex = String(nextIndex);
      img.src = `${image}${extensions[nextIndex]}`;
    }
  }

  return (
    <img
      src={image}
      alt={`Imagem do benefício ${title}`}
      data-fallback-index="0"
      onError={handleImageError}
      loading="lazy"
      decoding="async"
      className={`${className || "h-[360px] sm:h-[440px] lg:h-[520px]"} w-full object-cover transition duration-700 group-hover:scale-[1.035]`}
    />
  );
}


function CleanCheckItem({ title, text }) {
  return (
    <div className="group">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_14px_35px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-300 group-hover:border-[#D7B46A]/60 group-hover:bg-[#D7B46A]/15">
        <span className="text-3xl font-bold leading-none">✓</span>
      </div>

      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-[240px] text-sm leading-6 text-zinc-400 sm:text-[15px]">
        {text}
      </p>
    </div>
  );
}


function ProductReasonItem({ title, text }) {
  return (
    <div className="group rounded-[30px] border border-[#E9E4DA] bg-[#FAF8F3] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#D7B46A]/50 hover:bg-white hover:shadow-[0_26px_80px_rgba(0,0,0,0.07)]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-white transition duration-300 group-hover:bg-[#D7B46A] group-hover:text-black">
        <span className="text-xl font-bold leading-none">✓</span>
      </div>

      <h3 className="text-xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#5F5F5F]">
        {text}
      </p>
    </div>
  );
}

function ProductValueBlock({ label, title, text }) {
  return (
    <div className="rounded-[34px] border border-[#1A1A1A] bg-[#111111] p-7 text-white shadow-[0_24px_80px_rgba(0,0,0,0.13)]">
      <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#D7B46A]">
        {label}
      </span>

      <h3 className="mt-5 text-3xl font-semibold leading-[1] tracking-[-0.055em] text-white">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-zinc-400">
        {text}
      </p>
    </div>
  );
}

function InfoStep({ number, title, text }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
      <div className="flex gap-5">
        <span className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#D7B46A]">
          {number}
        </span>

        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">{text}</p>
        </div>
      </div>
    </div>
  );
}

function InfoLine({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-[#E9E4DA] px-6 py-5 last:border-b-0">
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8A8A8A]">
        {label}
      </span>

      <span className="text-right text-sm font-bold text-[#111111]">
        {value}
      </span>
    </div>
  );
}

function BrandCard({ title, text }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-zinc-400">{text}</p>
    </div>
  );
}

function FaqItem({ question, answer }) {
  return (
    <details className="group rounded-[24px] border border-[#E9E4DA] bg-[#FAF8F3] p-5 open:border-[#B99348] open:bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-bold tracking-[-0.01em] text-[#111111]">
        {question}

        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#E9E4DA] bg-white text-sm text-[#B99348] transition group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5F5F5F]">
        {answer}
      </p>
    </details>
  );
}
function MinimalReasonItem({ text }) {
  return (
    <div className="flex items-center gap-5 border-b border-[#E6DDCA] py-5 last:border-b-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white">
        <span className="text-xl font-bold leading-none">✓</span>
      </div>

      <p className="text-lg font-semibold tracking-[-0.03em] text-[#111111] sm:text-xl">
        {text}
      </p>
    </div>
  );
}

function CleanValueBlock({ title, text }) {
  return (
    <div className="rounded-[38px] border border-[#E9E4DA] bg-[#FAF8F3] p-8 shadow-[0_22px_70px_rgba(0,0,0,0.045)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_rgba(0,0,0,0.075)] sm:p-10 lg:p-12">
      <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#111111] sm:text-4xl">
        {title}
      </h3>

      <p className="mt-5 max-w-xl text-base leading-8 text-[#5F5F5F] sm:text-lg">
        {text}
      </p>
    </div>
  );
}
function SocialProofCard({ name, detail, text }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="group flex h-full min-h-[330px] flex-col justify-between rounded-[36px] border border-[#E9E4DA] bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#D7B46A]/50 hover:shadow-[0_28px_85px_rgba(0,0,0,0.065)] sm:p-8">
      <div>
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#111111] text-sm font-bold text-white">
            {initials}
          </div>

          <div>
            <h3 className="text-base font-bold tracking-[-0.025em] text-[#111111]">
              {name}
            </h3>

            <p className="mt-1 text-xs font-medium text-[#8A8A8A]">
              {detail}
            </p>
          </div>
        </div>

        <p className="text-[15px] leading-8 text-[#4F4F4F]">
          “{text}”
        </p>
      </div>

      <div className="mt-8 border-t border-[#E9E4DA] pt-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B99348]">
          Cliente PhysicLab
        </span>
      </div>
    </article>
  );
}
function ProofMiniBlock({ title, text }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white">
        <span className="text-xl font-bold leading-none">✓</span>
      </div>

      <div>
        <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#111111]">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-[#5F5F5F]">
          {text}
        </p>
      </div>
    </div>
  );
}

function EmotionalLine({ title, text }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D7B46A]" />

      <div>
        <h4 className="text-lg font-semibold tracking-[-0.035em] text-white">
          {title}
        </h4>

        <p className="mt-2 text-sm leading-7 text-zinc-400">
          {text}
        </p>
      </div>
    </div>
  );
}

function SalesDecisionLine({ number, title, text }) {
  return (
    <div className="group grid gap-5 border-b border-[#E9E4DA] p-6 transition duration-300 last:border-b-0 hover:bg-[#FAF8F3] sm:grid-cols-[90px_1fr] sm:p-7">
      <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99348]">
        {number}
      </span>

      <div>
        <h4 className="text-2xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#111111]">
          {title}
        </h4>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#5F5F5F] sm:text-[15px]">
          {text}
        </p>
      </div>
    </div>
  );
}

function OfferCard({
  quantity,
  title,
  price,
  perUnit,
  description,
  highlights,
  badge,
  savings,
  image,
  imageAlt,
  featured = false,
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border transition duration-300 hover:-translate-y-1 lg:rounded-[34px] ${featured
          ? "border-[#D7B46A]/35 bg-[#141414] shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
          : "border-white/10 bg-[#101010] shadow-[0_20px_60px_rgba(0,0,0,0.18)] hover:border-white/20"
        }`}
    >
      {/* Imagem exclusiva de cada kit */}
      <div className="relative aspect-[5/4] overflow-hidden bg-[#080808] lg:aspect-square">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
        />

        {/* Integra a imagem com o card */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#101010] to-transparent" />

        <span
          className={`absolute left-4 top-4 rounded-full px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.16em] backdrop-blur-md ${featured
              ? "bg-[#D7B46A] text-black"
              : "border border-white/10 bg-black/50 text-zinc-200"
            }`}
        >
          {badge}
        </span>

        {savings && (
          <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-zinc-200 backdrop-blur-md">
            {savings}
          </span>
        )}
      </div>

      {/* Informações */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-6 sm:px-7 sm:pb-7 lg:px-9 lg:pb-9 lg:pt-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BFA268]">
            Kit PhysicLab
          </p>

          <h3 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.045em] text-white lg:text-[2rem]">
            {title}
          </h3>
        </div>

        <div className="mt-6 flex items-end gap-2 lg:mt-7">
          <span className="mb-1.5 text-sm font-medium text-zinc-400">
            R$
          </span>

          <span className="text-[3.15rem] font-semibold leading-none tracking-[-0.065em] text-white lg:text-[3.75rem]">
            {price}
          </span>
        </div>

        {perUnit && (
          <p className="mt-2.5 text-sm text-zinc-500 lg:text-[15px]">
            {perUnit}
          </p>
        )}

        <p className="mt-5 text-sm leading-7 text-zinc-400 lg:text-[15px]">
          {description}
        </p>

        <div className="mt-6 h-px bg-white/10 lg:mt-7" />

        <ul className="mt-5 space-y-3 text-sm text-zinc-300 lg:mt-6 lg:text-[15px]">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D7B46A]" />
              <span className="leading-6">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 grid gap-3 lg:mt-8 xl:grid-cols-2">
          <a
            href={purchasePageLink(quantity)}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-black transition duration-300 hover:bg-[#D7B46A] lg:text-[11px]"
          >
            Comprar agora
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-center text-[9px] font-bold uppercase tracking-[0.11em] text-white transition duration-300 hover:border-white/30 hover:bg-white hover:text-black lg:text-[10px]"
          >
            Comprar pelo WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
