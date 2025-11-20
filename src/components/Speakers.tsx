import nezioImage from "@/assets/nezio-monteiro.png";
import santiagoImage from "@/assets/santiago-vecina.png";
import pabloImage from "@/assets/pablo-marcal.png";

export const Speakers = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black">
              <span className="text-primary">QUEM CONDUZ</span>
              <span className="text-foreground"> SUA TRANSFORMAÇÃO</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Nézio Monteiro */}
            <div className="space-y-6 p-6 bg-card border border-border rounded-2xl">
              <div className="flex flex-col items-center gap-4">
                <img src={nezioImage} alt="Nézio Monteiro" className="w-48 h-48 object-cover rounded-xl" />
                <h3 className="text-2xl font-black text-primary text-center">Nézio Monteiro</h3>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed text-sm">
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

            {/* Dr. Santiago Vecina */}
            <div className="space-y-6 p-6 bg-card border border-border rounded-2xl">
              <div className="flex flex-col items-center gap-4">
                <img src={santiagoImage} alt="Dr. Santiago Vecina" className="w-48 h-48 object-cover rounded-xl" />
                <h3 className="text-2xl font-black text-primary text-center">Dr. Santiago Vecina</h3>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed text-sm">
                <p>
                  Médico, empresário, triatleta e palestrante internacional, é especialista em nutrologia esportiva e
                  otimização de performance.
                </p>

                <p>
                  Criador do <span className="font-bold text-foreground">Método SAAMS</span>, que integra saúde,
                  nutrição e propósito, Dr. Santiago ajuda seus pacientes a perder até{" "}
                  <span className="text-primary font-bold">20kg em dois meses</span>, restaurar energia, foco e
                  conquistar feitos como completar o Ironman.
                </p>

                <p className="text-foreground font-medium">
                  Autor do livro <span className="italic">"Médico do Corpo e da Alma"</span>, inspira uma nova forma de
                  viver com mais vitalidade, clareza e disciplina.
                </p>
              </div>
            </div>

            {/* Pablo Marçal */}
            <div className="space-y-6 p-6 bg-card border border-border rounded-2xl">
              <div className="flex flex-col items-center gap-4">
                <img src={pabloImage} alt="Pablo Marçal" className="w-48 h-48 object-cover rounded-xl" />
                <h3 className="text-2xl font-black text-primary text-center">Pablo Marçal</h3>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed text-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
};
