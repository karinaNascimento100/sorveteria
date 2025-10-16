export default function Hero(){
  return (
    <section id="home"
      className="min-h-[calc(100vh-64px)] grid place-items-center relative snap-start scroll-mt-20"
      style={{ background:`url(/assets/hero-principal.jpg) center/cover no-repeat` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/25" />
      <div className="relative text-center text-white px-6">
        <h1 className="font-[Pacifico] text-[clamp(34px,6vw,64px)] drop-shadow">
          A doçura que derrete corações.
        </h1>
        <p className="text-[clamp(16px,2.5vw,22px)] mt-2 opacity-95">
          Sorvetes artesanais e momentos doces
        </p>
        <a href="#produtos" className="btn-primary mt-4">Conheça nossos Sabores</a>
      </div>
    </section>
  );
}
