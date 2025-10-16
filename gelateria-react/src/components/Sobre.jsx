export default function Sobre(){
  return (
  <section id="sobre" className="min-h-[calc(100vh-64px)] py-14 sm:py-20 bg-white/65 backdrop-blur-sm snap-start scroll-mt-20">
      <div className="container-sweet grid md:grid-cols-[1.05fr_1.2fr] gap-12 items-center">
        <div>
          <h2 className="text-title text-4xl sm:text-5xl font-semibold tracking-tight">Sobre nós</h2>
          <p className="mt-4 text-lg sm:text-xl leading-8 sm:leading-9 text-text/90 max-w-3xl">
            Unimos o melhor da tradição artesanal com a alegria da inovação. Nossos gelatos
            são preparados em pequenos lotes, valorizando ingredientes frescos, tempo de
            maturação e equilíbrio perfeito entre doçura e cremosidade.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-8 sm:leading-9 text-text/90 max-w-3xl">
            A cada nova receita, buscamos cores vibrantes e combinações surpreendentes — sem
            abrir mão das técnicas clássicas que dão origem à textura macia e ao sabor marcante.
            Acreditamos que o prazer está nos detalhes (e em cada colherada).
          </p>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 max-w-3xl">
            Feitos com ingredientes selecionados, frutas da estação e um toque de carinho
            em todas as etapas.
          </p>
        </div>
        <div className="md:justify-self-end">
          <img src="/assets/sobre.jpg" alt="Casquinhas artesanais"
               className="w-full h-auto md:h-[460px] object-cover rounded-[22px] shadow-sweet ring-1 ring-black/5"/>
        </div>
      </div>
    </section>
  );
}
