import React, { useState, useEffect } from 'react';
import { Moon, Star, Heart, DollarSign, Shield, Clock, ShieldCheck, Lock, FileText, Sparkles, Italic as Crystal, Flower } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-[#1C1C1C] text-[#F8F6F2] min-h-screen">
      {/* Sticky Timer */}
      <div className="fixed top-0 w-full bg-gradient-to-r from-[#6B4C9A] to-[#1C1C1C] text-[#F8F6F2] py-3 z-50 text-center shadow-lg">
        <div className="flex items-center justify-center gap-2">
          <Clock className="animate-pulse text-[#D4AF37] w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-['Cinzel_Decorative'] text-base sm:text-lg">
            ⚡ Oferta Mágica Expira em: {minutes}:{seconds.toString().padStart(2, '0')} ⚡
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <header className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 text-center bg-gradient-to-b from-[#1C1C1C] via-[#6B4C9A]/20 to-[#1C1C1C]">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8 relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#E8A9B7] rounded-full flex items-center justify-center transform rotate-45">
              <Moon className="w-12 h-12 sm:w-16 sm:h-16 text-[#1C1C1C] transform -rotate-45" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 text-[#D4AF37]">
              <Star className="w-full h-full animate-pulse" />
            </div>
          </div>
          <h1 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6 text-[#D4AF37] leading-tight px-2">
            Jardim da Lua:<br/>
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#E8A9B7]">Segredos Antigos para Mulheres Sábias</span>
          </h1>
          <img 
            src="https://vitacursos.online/wp-content/uploads/2025/04/ChatGPT-Image-11-de-abr.-de-2025-14_03_16.webp"
            alt="Jardim da Lua"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl mb-6 sm:mb-8 border-4 border-[#D4AF37]/30"
          />
          <p className="text-xl sm:text-2xl mb-6 sm:mb-8 font-['Cormorant_Garamond'] text-[#F8F6F2] italic max-w-2xl mx-auto px-2">
            Desperte seu poder interior com 500 feitiços e simpatias ancestrais para transformar amor, prosperidade e destino
          </p>
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-base sm:text-lg font-['Cormorant_Garamond'] px-2">
            <p>Você sente que algo está faltando na sua vida amorosa ou financeira?</p>
            <p>Você ama o universo místico, simpatias, rituais e a força do sagrado feminino?</p>
            <p className="text-[#E8A9B7] font-semibold">Então você está prestes a descobrir os segredos mais poderosos já revelados em um único grimório sagrado!</p>
          </div>
          <a 
            href="#offer"
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#E8A9B7] text-[#1C1C1C] px-6 sm:px-10 py-4 sm:py-5 rounded-full text-xl sm:text-2xl font-bold hover:from-[#E8A9B7] hover:to-[#D4AF37] transition-all duration-500 animate-pulse hover:animate-none shadow-lg hover:shadow-xl transform hover:scale-105 mx-2"
          >
            ✨ Desperte Sua Magia Interior Agora! ✨
          </a>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-[#1C1C1C] via-[#6B4C9A]/10 to-[#1C1C1C]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl text-center mb-12 sm:mb-16 text-[#D4AF37] px-2">
            🌹✨ Poder Ancestral em Suas Mãos ✨🌹
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                icon: Heart, 
                title: "Amor & Relacionamentos",
                text: "Simpatias infalíveis para reconquistar, fortalecer laços e atrair sua alma gêmea" 
              },
              { 
                icon: DollarSign, 
                title: "Prosperidade & Abundância",
                text: "Rituais poderosos para multiplicar sua renda e atrair oportunidades douradas" 
              },
              { 
                icon: Star, 
                title: "Proteção & Energia",
                text: "Escudos místicos e limpezas energéticas para afastar toda negatividade" 
              },
              { 
                icon: Moon, 
                title: "Poder Lunar",
                text: "Encantamentos alinhados com as fases da lua para potencializar seus desejos" 
              },
              { 
                icon: Shield, 
                title: "Sabedoria Ancestral",
                text: "Segredos guardados por gerações de bruxas sábias, revelados para você" 
              },
              { 
                icon: FileText, 
                title: "Grimório Completo",
                text: "500 rituais organizados e explicados em detalhes para resultados reais" 
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1C1C1C] to-[#6B4C9A]/30 p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 group">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#E8A9B7] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1C1C1C]" />
                </div>
                <h3 className="text-[#D4AF37] text-lg sm:text-xl font-['Cinzel_Decorative'] mb-3 sm:mb-4 text-center">{item.title}</h3>
                <p className="font-['Cormorant_Garamond'] text-base sm:text-lg text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Facebook Style */}
      <section className="py-16 sm:py-20 px-4 bg-[#1C1C1C]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl text-center mb-12 sm:mb-16 text-[#D4AF37]">
            🧿 Histórias de Transformação Real ✨
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { 
                name: "Maria Silva", 
                location: "Rio de Janeiro, RJ",
                photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604",
                text: "Meninas, preciso compartilhar! ❤️ Fiz o ritual do amor próprio que aprendi no Jardim da Lua e em 21 dias minha vida mudou completamente! Conheci o amor da minha vida de uma forma totalmente inesperada... As simpatias realmente funcionam! 🌙✨",
                likes: "1.2k",
                time: "2 horas atrás"
              },
              { 
                name: "Ana Paula Santos", 
                location: "São Paulo, SP",
                photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                text: "GRATIDÃO!!! 🙏✨ Fiz a simpatia da prosperidade na lua crescente e consegui dobrar meu salário em 2 meses! Tudo que o grimório promete realmente acontece. Mudou minha vida! #JardimDaLua #Gratidão",
                likes: "897",
                time: "5 horas atrás"
              },
              { 
                name: "Fernanda Oliveira", 
                location: "Belo Horizonte, MG",
                photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                text: "Gente, que presente divino! 🎁✨ Os rituais de proteção são MUITO poderosos. Sinto uma energia totalmente diferente em casa e no trabalho. Vale cada centavo! Já indiquei pra todas as minhas amigas! 💫",
                likes: "2.3k",
                time: "1 dia atrás"
              },
              { 
                name: "Juliana Costa", 
                location: "Recife, PE",
                photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
                text: "Simplesmente INCRÍVEL! 🌟 Fiz o ritual para harmonia no trabalho e as mudanças começaram no dia seguinte! Ambiente mais leve, promoção chegando... Tudo fluindo! Gratidão imensa! ✨🙏",
                likes: "1.5k",
                time: "3 dias atrás"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-[#D4AF37]"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-[#1C1C1C]">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    <p className="text-gray-400 text-xs">{testimonial.time}</p>
                  </div>
                </div>
                <p className="mt-3 sm:mt-4 text-[#1C1C1C] text-base sm:text-lg">{testimonial.text}</p>
                <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
                    {testimonial.likes}
                  </span>
                  <span>💬 Comentários</span>
                  <span>↗️ Compartilhar</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Offer Section */}
      <section id="offer" className="py-16 sm:py-20 px-4 bg-gradient-to-b from-[#6B4C9A]/20 to-[#1C1C1C]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1C1C1C] to-[#6B4C9A]/20 p-6 sm:p-12 rounded-3xl border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <div className="animate-pulse">
              <h2 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#D4AF37]">
                ✨ Oferta Exclusiva e Limitada ✨
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 font-['Cormorant_Garamond'] italic text-[#E8A9B7]">
                Transforme sua vida com o poder da magia ancestral
              </p>
            </div>

            <div className="bg-[#1C1C1C]/60 p-4 sm:p-8 rounded-2xl mb-6 sm:mb-8 border border-[#D4AF37]/30">
              <h3 className="text-xl sm:text-2xl font-['Cinzel_Decorative'] text-[#D4AF37] mb-4 sm:mb-6">🌟 O Que Você Vai Receber:</h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                {[
                  "💕 Ritual do Amor Verdadeiro - Para atrair sua alma gêmea em 21 dias",
                  "💫 Simpatia da Harmonia Profissional - Transforme seu ambiente de trabalho",
                  "🌙 Feitiço da Lua Nova - Multiplique sua renda em 7 dias",
                  "✨ Ritual da Proteção Dourada - Escudo energético poderoso",
                  "💝 Simpatia do Amor Leve - Para relacionamentos harmoniosos",
                  "🧠 Ritual da Concentração Plena - Aumente seu foco e produtividade",
                  "💰 Simpatia da Prosperidade Abundante - Atraia riqueza e sucesso",
                  "🌺 Ritual da Beleza Interior - Desperte sua luz natural"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-[#F8F6F2] text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8 sm:mb-12">
              <div className="relative inline-block">
                <p className="text-2xl sm:text-3xl line-through text-gray-400 mb-2">De R$ 79,90</p>
                <p className="text-4xl sm:text-6xl font-bold text-[#E8A9B7] mb-2">Por R$ 19,90</p>
                <div className="absolute -right-16 sm:-right-20 top-0 transform rotate-12 bg-[#D4AF37] text-[#1C1C1C] px-3 sm:px-4 py-1 rounded-lg font-bold text-sm sm:text-base">
                  83% OFF
                </div>
              </div>
              <p className="text-[#D4AF37] animate-pulse">⚡ Oferta válida apenas hoje! ⚡</p>
            </div>

            <a 
              href="https://go.pepper.com.br/mr1ud"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#E8A9B7] text-[#1C1C1C] px-8 sm:px-16 py-4 sm:py-6 rounded-full text-xl sm:text-2xl font-bold hover:from-[#E8A9B7] hover:to-[#D4AF37] transition-all duration-500 animate-pulse hover:animate-none mb-6 sm:mb-8 transform hover:scale-105 shadow-[0_0_30px_rgba(232,169,183,0.5)] mx-auto"
            >
              QUERO TRANSFORMAR MINHA VIDA AGORA! 🌙✨
            </a>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#F8F6F2]/80">
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                <span>Pagamento 100% Seguro</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                <span>Satisfação Garantida</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 text-center bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#F8F6F2]/80 text-sm">Site Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#F8F6F2]/80 text-sm">Privacidade Protegida</span>
            </div>
          </div>
          <p className="mb-4 sm:mb-6 text-[#F8F6F2]/60 text-sm">© 2024 Jardim da Lua - Todos os direitos reservados</p>
          <div className="flex justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
            <a href="#" className="text-[#E8A9B7] hover:text-[#D4AF37] transition-colors">Política de Privacidade</a>
            <a href="#" className="text-[#E8A9B7] hover:text-[#D4AF37] transition-colors">Termos de Uso</a>
            <a href="#" className="text-[#E8A9B7] hover:text-[#D4AF37] transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;