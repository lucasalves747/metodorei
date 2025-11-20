export const Speakers = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black">
              <span className="text-primary">🎤 QUEM CONDUZ</span>
              <span className="text-foreground"> SUA TRANSFORMAÇÃO</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Nézio Monteiro */}
            <div className="space-y-6 p-8 bg-card border border-border rounded-2xl">
              <div>
                <h3 className="text-3xl font-black text-primary mb-2">Nézio Monteiro</h3>
              </div>
              
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Empreendedor serial com <span className="text-primary font-bold">24 empresas</span> em diversos segmentos, 
                  mentor de mais de <span className="text-primary font-bold">20 mil pessoas</span> em cursos, eventos e treinamentos de alta performance.
                </p>
                
                <p>
                  Criador do <span className="font-bold text-foreground">GSR – Gestão Simplificada de Resultados</span>, 
                  um modelo prático e poderoso que elimina a burocracia e gera crescimento real, aplicável tanto para empresas quanto para a vida pessoal.
                </p>
                
                <p>
                  Nézio é cristão, casado com Jessyca Monteiro, pai da Ana Liz, Ultra Man, palestrante e escritor.
                </p>
                
                <p className="text-foreground font-medium">
                  Seu propósito é destravar pessoas e empresários que têm valores sólidos, visão de impacto e mensagens fortes no coração — 
                  mas que estão presos, travados ou andando em círculos.
                </p>
              </div>
            </div>
            
            {/* Dr. Santiago Vecina */}
            <div className="space-y-6 p-8 bg-card border border-border rounded-2xl">
              <div>
                <h3 className="text-3xl font-black text-primary mb-2">Dr. Santiago Vecina</h3>
              </div>
              
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Médico, empresário, triatleta e palestrante internacional, é especialista em nutrologia esportiva e otimização de performance.
                </p>
                
                <p>
                  Já transformou a saúde de milhares de pessoas — incluindo atletas de alta performance, 
                  como os jogadores do Esporte Clube São Bento, e equipes como os Vipers, levando-os ao topo de competições nacionais.
                </p>
                
                <p>
                  Criador do <span className="font-bold text-foreground">Método SAAMS</span>, que integra saúde, nutrição e propósito, 
                  Dr. Santiago ajuda seus pacientes a perder até <span className="text-primary font-bold">20kg em dois meses</span>, 
                  restaurar energia, foco e conquistar feitos como completar o Ironman.
                </p>
                
                <p className="text-foreground font-medium">
                  Autor do livro <span className="italic">"Médico do Corpo e da Alma"</span>, 
                  inspira uma nova forma de viver — com mais vitalidade, clareza, disciplina e resultados extraordinários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
