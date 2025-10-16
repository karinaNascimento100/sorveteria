import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Produtos from "./components/Produtos";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";

export default function App(){
  return (
    <>
      <Header />
      <main className="pt-16 snap-y snap-mandatory">
        <Hero />
        <Sobre />
        <Produtos />
        <Localizacao />
      </main>
      <Footer />
    </>
  );
}
