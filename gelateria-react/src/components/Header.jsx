export default function Header(){
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-gradient-to-r from-[rgba(236,167,184,.6)] to-[rgba(250,212,192,.6)] border-b border-[#E48FAF]">
      <div className="container-sweet h-16 flex items-center justify-between">
        <div className="font-[Pacifico] text-2xl text-brand">Gelateria</div>
        <nav className="hidden sm:flex gap-3">
          {[
            ["Home","#home"],
            ["Sobre","#sobre"],
            ["Produtos","#produtos"],
            ["Localização","#localizacao"]
          ].map(([t,h])=> (
            <a key={t} href={h} className="bg-gray-200 rounded-xl px-4 py-2 font-medium hover:shadow-sweet hover:bg-gray-100 transition">
              {t}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
