export default function Localizacao() {
  // (Opcional) handler simples só pra evitar reload
  const onSubmit = (e) => {
    e.preventDefault();
    // 👉 Troque por integração real (Formspree, backend, etc.)
    alert("Mensagem enviada! ✨ (simulação)");
  };

  return (
    <section
      id="localizacao"
      className="min-h-[calc(100vh-64px)] py-12 sm:py-16 bg-white/60 text-[#083f42] snap-start scroll-mt-20"
    >
      <div className="container-sweet grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
        {/* Coluna 1 — Mapa + Info */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold">Onde estamos</h2>
          <p>Rua Doce 123, Bairro Pastel — Aberto todos os dias, das 13h às 22h</p>

          <div className="rounded-[18px] overflow-hidden shadow-sweet ring-1 ring-black/5">
            {/* 🔁 Substitua o src abaixo pelo embed do seu endereço no Google Maps */}
            <iframe
              title="Mapa"
              width="100%"
              height="380"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.146886099662!2d-46.656571!3d-23.561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9c66b05ab%3A0xb6a3d9f2d7e9a8b!2sAv.%20Paulista!5e0!3m2!1spt-BR!2sBR!4v1700000000000"
              }
            />
          </div>

          {/* Redes sociais */}
          <div className="bg-white/70 rounded-[18px] p-4 sm:p-5 shadow-sweet">
            <p className="font-semibold mb-3">Siga a Gelateria</p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-full bg-rose/70 hover:bg-rose text-[#7c1f1f] hover:text-[#4e0e0e] transition shadow-sweet"
                href="https://instagram.com/sualoja" target="_blank" rel="noopener"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                </svg>
                <span>@sualoja</span>
              </a>

              {/* WhatsApp */}
              <a
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-full bg-mint/80 hover:bg-aqua text-[#053a3d] transition shadow-sweet"
                href="https://wa.me/5599999999999?text=Ol%C3%A1%20Gelateria!%20Quero%20saber%20sobre%20os%20sabores%20do%20dia."
                target="_blank" rel="noopener"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 3.9A10 10 0 0 0 4.6 18.7L3 22l3.4-1.6A10 10 0 1 0 20 3.9ZM12 20a8 8 0 0 1-4.2-1.2l-.3-.2-2.5 1.2.9-2.6-.2-.3A8 8 0 1 1 12 20Zm3.6-5.1c-.2 0-.4 0-.6-.1s-.9-.3-1-.3-.3 0-.5.3-.6.7-.7.8-.3.2-.6.1-1.1-.4-2.2-1.4-1.4-1.9-1.6-2.2 0-.5.1-.6.3-.3.4-.5.2-.3.3-.5.1-.3 0-.5c0-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3s-.9.9-.9 2.2 1 2.6 1.1 2.8 2 3.1 4.8 4.2c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.8-1.3s.2-1.2.2-1.3-.1-.1-.3-.2Z"/>
                </svg>
                <span>Fale no Whats</span>
              </a>

              {/* TikTok */}
              <a
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white hover:bg-gray-100 text-black transition shadow-sweet"
                href="https://www.tiktok.com/@sualoja" target="_blank" rel="noopener"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 8.5c-2.3 0-4.4-1.2-5.6-3.1V17a5 5 0 1 1-5-5c.3 0 .6 0 .9.1V9.1A7 7 0 1 0 16.9 21H18a7 7 0 0 0 3-12.5Z"/>
                </svg>
                <span>@sualoja</span>
              </a>
            </div>
          </div>
        </div>

        {/* Coluna 2 — Contato */}
        <div className="bg-white/80 rounded-[18px] p-5 sm:p-6 shadow-sweet">
          <h3 className="text-2xl font-semibold mb-4 text-title">Fale com a gente</h3>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text" required
                className="w-full rounded-xl border border-gray-300/70 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-aqua"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email" required
                className="w-full rounded-xl border border-gray-300/70 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-aqua"
                placeholder="voce@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Assunto</label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-300/70 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-aqua"
                placeholder="Reserva, encomenda, dúvida…"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea
                rows="5" required
                className="w-full rounded-xl border border-gray-300/70 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-aqua resize-y"
                placeholder="Como podemos adoçar seu dia?"
              />
            </div>

            {/* Botões */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* 👉 Troque action por Formspree ou backend quando tiver */}
              <button type="submit" className="btn-primary">Enviar mensagem</button>

              {/* Alternativa por e-mail direto */}
              <a
                className="btn-outline"
                href="mailto:contato@sualoja.com?subject=Contato%20Gelateria"
              >
                Enviar por e-mail
              </a>
            </div>

            {/* Observação */}
            <p className="text-xs text-neutral-600">
              Ao enviar, você concorda em ser contatado pela Gelateria. Nunca compartilhamos seus dados com terceiros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
