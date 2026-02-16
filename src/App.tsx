import React from 'react';
import { 
  Scissors, MapPin, Phone, Instagram, Clock, Star, 
  CheckCircle2, Quote, ArrowRight, ShieldCheck, 
  Music, Heart, Users, ExternalLink 
} from 'lucide-react';
import Navbar from './components/Navbar';
import { BUSINESS_INFO, SERVICES, REVIEWS, IMAGES } from './constants';

// Link de imagem genérica para o mapa (enquanto você não tem o print)
const MAP_SOURCE = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200&sat=-100";

const App: React.FC = () => {
  return (
    // TEMA: Rose (Vinho/Vermelho Escuro) para estilo Vintage 1985
    <div className="min-h-screen flex flex-col selection:bg-rose-600/30 selection:text-rose-200">
      <Navbar />

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Fundo com a primeira imagem do interior */}
          <img 
            src={IMAGES.interior[0].url} 
            alt="Interior 1985" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/90 to-stone-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-rose-600/10 border border-rose-600/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Star className="text-rose-500 fill-rose-500" size={14} />
              <span className="text-rose-500 text-xs font-bold uppercase tracking-[0.2em]">Cortes de Precisão no Areeiro</span>
              <div className="hidden md:block w-1 h-1 bg-rose-600/30 rounded-full mx-1"></div>
              <span className="text-stone-400 text-xs font-medium uppercase tracking-widest hidden md:inline">5.0 Estrelas</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-8xl font-bold mb-8 leading-[1.1] text-white">
              Estilo Clássico <br />
              desde <span className="text-rose-600 italic">1985</span>.
            </h2>
            
            <p className="text-stone-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light">
              O mestre Alessandro traz a perfeição da barbearia tradicional para o homem moderno.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center px-4">
              <a 
                href={BUSINESS_INFO.bookingUrl} 
                target="_blank" 
                rel="noreferrer"
                className="bg-rose-700 hover:bg-rose-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-2xl shadow-rose-900/20 group"
              >
                Reservar Online <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos" 
                className="bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-5 rounded-full text-lg font-bold text-white text-center transition-all"
              >
                Ver Serviços
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-3 text-stone-500/80">
              <Heart size={16} className="text-rose-500/50" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Espaço LGBTQ+ Friendly no Coração de Lisboa</span>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS (Recolocado) */}
      <section className="py-16 md:py-24 bg-stone-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: ShieldCheck, title: "Mestre Alessandro", text: "Anos de experiência e técnica apurada para um corte impecável." },
              { icon: Users, title: "Ambiente Amigável", text: "Um espaço onde se sente em casa, com boa conversa e tratamento VIP." },
              { icon: Music, title: "Estilo Vintage", text: "Decoração e ambiente que remetem aos clássicos, com o conforto moderno." }
            ].map((item, index) => (
              <div key={index} className="relative group p-4 md:p-0 rounded-2xl md:rounded-none bg-stone-900/20 md:bg-transparent border md:border-none border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-600/10 rounded-2xl flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif italic text-white">{item.title}</h3>
                </div>
                <p className="text-stone-500 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 md:py-32 bg-stone-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-rose-500 text-sm font-bold uppercase tracking-[0.4em] mb-4">Tabela de Preços</h4>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white">Serviços de Mestre</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-6xl mx-auto">
            {SERVICES.map((s) => (
              <div key={s.id} className="group flex justify-between items-start border-b border-white/5 pb-8 hover:border-rose-600/30 transition-all">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-rose-500 transition-colors font-serif text-white">{s.name}</h3>
                  <p className="text-stone-500 text-sm">{s.description}</p>
                </div>
                <div className="text-rose-600 font-bold text-2xl pl-6 whitespace-nowrap">{s.price}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <a href={BUSINESS_INFO.bookingUrl} target="_blank" className="inline-flex items-center gap-2 text-stone-400 hover:text-rose-500 transition-colors">
                Ver todos os serviços e agendar <ExternalLink size={16}/>
             </a>
          </div>
        </div>
      </section>

      {/* SOBRE (Recolocado) */}
      <section id="sobre" className="py-20 md:py-32 bg-stone-950 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-stone-900 shadow-2xl aspect-square">
                {/* Usando a segunda foto do interior */}
                <img src={IMAGES.interior[1].url} alt="Espaço Alessandro" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-rose-700 p-6 rounded-2xl max-w-xs shadow-2xl z-20">
                <Quote className="text-white/30 mb-2" size={24} />
                <p className="text-white font-bold text-sm">"O melhor barbeiro de Lisboa, amigável e confiável!"</p>
                <p className="text-white/70 text-xs mt-2 uppercase font-black">Cliente Google</p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
                Alessandro <br /><span className="text-rose-500 italic">O Profissional</span>
              </h2>
              <div className="space-y-6 text-stone-400 font-light">
                <p>Com um histórico impecável de 5 estrelas, a 1985 Barbershop é o refúgio para quem busca qualidade no Areeiro.</p>
                <p>O Alessandro não oferece apenas um corte, mas um tratamento capilar completo e uma experiência de confiança que fideliza clientes há anos.</p>
              </div>
            </div>
        </div>
      </section>

      {/* CRÍTICAS (Recolocado) */}
      <section id="criticas" className="py-20 bg-stone-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">Clientes Satisfeitos</h2>
            <div className="flex justify-center gap-2 text-rose-500">
               {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {REVIEWS.map((r) => (
              <div key={r.id} className="bg-stone-900/40 p-8 rounded-3xl border border-white/5">
                <p className="text-stone-300 italic mb-6">"{r.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={r.avatar} alt={r.author} className="w-10 h-10 rounded-full border border-rose-600/50" />
                  <div>
                    <h4 className="text-white font-bold text-sm">{r.author}</h4>
                    <p className="text-stone-600 text-xs">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA (Recolocado) */}
      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4">
           <h2 className="text-center text-white font-serif text-3xl mb-10">Portfólio</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {IMAGES.cortes.map((img) => (
                <div key={img.id} className="aspect-square rounded-2xl overflow-hidden group">
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CONTATO E MAPA */}
      <section id="contacto" className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl font-bold mb-10 text-white">Visite-nos</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <MapPin className="text-rose-500" size={28} />
                <div><h4 className="text-white font-bold text-lg">Localização</h4><p className="text-stone-500">{BUSINESS_INFO.address}, {BUSINESS_INFO.city}</p></div>
              </div>
              <div className="flex gap-6">
                <Clock className="text-rose-500" size={28} />
                <div><h4 className="text-white font-bold text-lg">Horário</h4><p className="text-stone-500">{BUSINESS_INFO.openingHours}</p></div>
              </div>
              <div className="flex gap-6">
                <Phone className="text-rose-500" size={28} />
                <div><h4 className="text-white font-bold text-lg">Telemóvel</h4><p className="text-stone-300 text-2xl font-bold">{BUSINESS_INFO.phone}</p></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 h-[500px] rounded-[3rem] overflow-hidden border-8 border-stone-900 shadow-2xl relative">
            <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noreferrer" className="block w-full h-full relative cursor-pointer">
              <img src={MAP_SOURCE} alt="Mapa 1985" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-rose-700 text-white px-8 py-4 rounded-full font-bold shadow-xl animate-bounce-slow">Abrir no Google Maps</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-stone-950 border-t border-white/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-rose-700 rounded-2xl flex items-center justify-center text-white"><Scissors size={24} /></div>
            <div className="text-left">
              <h1 className="font-serif text-2xl font-bold text-white leading-none">1985</h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-rose-500 font-bold">Barbershop</p>
            </div>
          </div>
          <p className="text-stone-600 text-xs uppercase tracking-widest">© 2025 1985 Barbershop - Areeiro, Lisboa</p>
        </div>
      </footer>
      
      {/* Botão Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href={BUSINESS_INFO.bookingUrl} target="_blank" className="w-14 h-14 bg-rose-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
          <Scissors size={24} />
        </a>
      </div>
    </div>
  );
};

export default App;