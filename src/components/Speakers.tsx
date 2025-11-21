import djImage from "@/assets/Dj.png";
import santiagoImage from "@/assets/santiago-vecina.png";
import pabloImage from "@/assets/pablo-marcal.png";
import hewertonImage from "@/assets/hewerton.png"

export const Speakers = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-4">
              <span className="text-primary">QUEM CONDUZ</span>
              <span className="text-foreground"> SUA TRANSFORMAÇÃO</span>
            </h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {/* Dj*/}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card/30 rounded-3xl overflow-hidden p-6 md:p-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    <span className="text-foreground">DJ</span>
                    <br />
                    <span className="text-muted-foreground">Belieny</span>
                  </h3>
                </div>

                <div className="space-y-4 md:space-y-5 text-foreground/80 leading-relaxed text-sm md:text-base">
                  <p>
                    Estrategista de negócios e especialista em <span className="text-primary font-bold ">implementação de inteligência artificial</span>, com habilidade para transformar desafios complexos em estratégias simples e acionáveis. Ao longo da carreira, ajudou empresas de diversos setores a acelerar o crescimento, otimizar processos e adotar tecnologia sem perder o toque humano.
                  </p>

                  <p>
                    Antes de se destacar no mundo dos negócios e da IA, <span className="text-foreground font-bold">DJ trabalhou nas Nações Unidas </span>, colaborando em iniciativas voltadas para o desenvolvimento global e a integração cultural. Essa experiência moldou sua capacidade de atuar em ambientes diversos, alinhar interesses e entregar soluções eficazes em contextos locais e internacionais
                  </p>

                  <p className="text-foreground font-medium">
                   Hoje, DJ combina sua visão global com profundo conhecimento em aceleração de vendas e inovação orientada por IA. Seja palestrando, assessorando executivos ou desenvolvendo frameworks como o MOTIVAR, sua missão é clara: ajudar pessoas e organizações a pensar grande, agir rápido e gerar impacto duradouro.
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <img 
                  src={djImage} 
                  alt="Dj" 
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl bg-black"
                />
              </div>
            </div>

            {/*Hewerton*/}

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card/30 rounded-3xl overflow-hidden p-6 md:p-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    <span className="text-foreground">Hewerton</span>
                    <br />
                    <span className="text-muted-foreground">Scheidegger</span>
                  </h3>
                </div>

                <div className="space-y-4 md:space-y-5 text-foreground/80 leading-relaxed text-sm md:text-base">
                  <p>
                    Empresário multifacetado, <span className="text-primary font-bold ">mentor em finanças</span>, negócios e espiritualidade, com trajetória como advogado, contador e consultor financeiro. Dedica-se a transformar vidas por meio de treinamentos, atuação pastoral e produção intelectual, incluindo o livro “1000 Códigos de Sabedoria”. <span className="text-primary font-bold ">Criou o Método REI</span>, o master mind Reinantes e o <span className="text-primary font-bold ">movimento REIGN</span>, impactando milhões.
                  </p>

                  <p>
                    Em missões na África, fundou projetos sociais que auxiliam milhares de crianças. Também foi cofundador do <span className="text-foreground font-bold"> Ministério Palavra da Fé</span>, onde atuou como vice-presidente por 14 anos. Especialista em planejamento tributário, atuou como perito contábil, consultor jurídico, professor universitário e consultor do Sebrae por mais de dez anos. Hoje <span className="text-foreground font-bold">administra mais de doze empresas</span> em diferentes setores.
                  </p>

                  <p className="text-foreground font-medium">
                  Casado com Luciana há 28 anos e pai de João, Lucas e Israel, já participou de provas como Ironman e Ultraman. Seu propósito é ajudar pessoas a viverem com plenitude
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <img 
                  src={hewertonImage} 
                  alt="Hewerton" 
                  className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-2xl bg-black"
                />
              </div>
            </div>

            {/* Dr. Santiago Vecina */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card/30 rounded-3xl overflow-hidden p-6 md:p-12 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
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
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-card/30 rounded-3xl overflow-hidden p-6 md:p-12 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
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
