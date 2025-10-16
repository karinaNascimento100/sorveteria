const produtos = [
  { img: "/assets/prod-1.jpg", alt: "Milkshake de chocolate cremoso" },
  { img: "/assets/prod-2.jpg", alt: "Banana split com calda e confeitos" },
  { img: "/assets/prod-3.jpg", alt: "Soda gelato colorida" },
  { img: "/assets/prod-4.jpg", alt: "Taça com várias bolas de gelato e frutas" },
  { img: "/assets/prod-5.jpg", alt: "Casquinha dupla artesanal" },
  { img: "/assets/prod-6.jpg", alt: "Affogato com calda de chocolate" },
];

export default function Produtos() {
  return (
    <section
      id="produtos"
      className="relative min-h-[calc(100vh-64px)] py-12 sm:py-16 bg-white/50 snap-start scroll-mt-20"
    >
      <div className="container-sweet">
        <h2 className="font-semibold text-4xl sm:text-6xl leading-tight mb-2 text-black">
          Nossos Produtos:
        </h2>

        <p className="text-[#320303] text-[18px] sm:text-[20px] leading-8 mb-8 sm:mb-12">
          Descubra uma explosão de cores e sabores que transformam cada colherada em uma
          experiência única. Dos clássicos artesanais aos milkshakes criativos e sobremesas
          especiais, cada criação é feita com ingredientes selecionados e um toque de amor.
          Na Gelateria, tradição e inovação se misturam para trazer o melhor do mundo.
        </p>

  {/* grade 3x2 responsiva */}
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((p, i) => (
            <figure
              key={i}
              className="bg-white/70 rounded-[18px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,.08)] hover:shadow-[0_14px_32px_rgba(0,0,0,.12)] transition"
            >
              <img
                src={p.img}
                alt={p.alt}
                className="w-full h-[306px] object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
