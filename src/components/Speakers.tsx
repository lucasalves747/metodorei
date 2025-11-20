import nezioImage from "@/assets/nezio-monteiro.png";
import santiagoImage from "@/assets/santiago-vecina.png";
import pabloImage from "@/assets/pablo-marcal.png";

export const Speakers = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-4">
              <span className="text-primary">QUEM CONDUZ</span>
              <span className="text-foreground"> SUA TRANSFORMAÇÃO</span>
            </h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {/* Nézio Monteiro */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card/30 rounded-3xl overflow-hidden p-6 md:p-12">
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    <span className="text-foreground">Nézio</span>
                    <br />
                    <span className="text-muted-foreground">Monteiro</span>
                  </h3>
                </div>

                <div className="space-y-4 md:space-y-5 text-foreground/80 leading-relaxed text-sm md:text-base">
                  <p>
                    Empreendedor serial com <span className="text-primary font-bold">24 empresas</span> em diversos
                    segmentos, mentor de mais de <span className="text-primary font-bold">20 mil pessoas</span> em cursos,
                    eventos e treinamentos de alta performance.
                  </p>

                  <p>
                    Criador do <span className="font-bold text-foreground">GSR – Gestão Simplificada de Resultados</span>,
                    um modelo prático e poderoso que elimina a burocracia e gera crescimento real.
                  </p>

                  <p className="text-foreground font-medium">
                    Seu propósito é destravar pessoas e empresários que têm valores sólidos, visão de impacto e mensagens
                    fortes no coração.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <img 
                  src={nezioImage} 
                  alt="Nézio Monteiro" 
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Dr. Santiago Vecina */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card/30 rounded-3xl overflow-hidden p-6 md:p-12">
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    <span className="text-foreground">Dr. Santiago</span>
                    <br />
                    <span className="text-muted-foreground">Vecina</span>
                  </h3>
                </div>

                <div className="space-y-4 md:space-y-5 text-foreground/80 leading-relaxed text-sm md:text-base">
                  <p>
                    Médico, empresário, triatleta e palestrante internacional, Santiago Vecina é especialista em nutrologia esportiva e
                    otimização da saúde. Ele já transformou vidas de atletas e profissionais de alta performance, levando equipes como o Esporte Clube
                    São Bento e os Vipers ao topo de competições nacionais.
                  </p>

                  <p>
                    Triatleta e criador do método SAAMS, que combina estratégias de saúde, nutrição e propósito, Santiago ajuda
                    pessoas a perder até <span className="text-primary font-bold">20 kg em dois meses</span> e a conquistar
                    feitos como completar o Ironman.
                  </p>

                  <p className="text-foreground font-medium">
                    Autor do livro <span className="italic">"Médico do Corpo e da Alma"</span>, ele inspira uma
                    nova forma de viver: com energia, foco e resultados extraordinários.
                  </p>

                  <p className="text-foreground font-medium">
                    Se você busca o próximo nível na vida ou nos negócios, Santiago é o mentor certo para te guiar.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <img 
                  src={santiagoImage} 
                  alt="Dr. Santiago Vecina" 
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Pablo Marçal */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card/30 rounded-3xl overflow-hidden p-6 md:p-12">
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    <span className="text-foreground">Pablo</span>
                    <br />
                    <span className="text-muted-foreground">Marçal</span>
                  </h3>
                </div>

                <div className="space-y-4 md:space-y-5 text-foreground/80 leading-relaxed text-sm md:text-base">
                  <p>
                    Cristão, casado com Carol Marçal, pai do Lorenzo, Benjamin, Miguel e Isabela. Aos 36 anos, se tornou
                    um dos <span className="text-primary font-bold">patriarcas mais prósperos do Brasil</span>.
                  </p>

                  <p>
                    Nas redes sociais é assistido por mais de{" "}
                    <span className="text-primary font-bold">20 milhões de pessoas por mês</span>.
                  </p>

                  <p>
                    Multiempreendedor, mentor, escritor, piloto de corrida e investidor. Lidera como CVO um grupo
                    multibilionário nos ramos imobiliário, digital, ensino, seguros, vendas, automobilístico, aviação,
                    tecnologia, hotelaria e outros.
                  </p>

                  <p className="text-foreground font-medium">
                    Seu propósito é ativar a identidade e clarificar o propósito das pessoas que se conectem a ele. Seu
                    maior desafio é transformar a mentalidade do povo brasileiro.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <img 
                  src={pabloImage} 
                  alt="Pablo Marçal" 
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
