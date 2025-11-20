export const Testimonials = () => {
  const videoIds = [
    "h971z5tomTU",
    "gBFK00ATjRg",
    "xiZ9QJW-xho",
    "Svwl3Ccq6Hc",
    "2E-B5ni8LWs",
    "DxlKVJ1qphQ",
    "ghlQf-IKqqs",
    "2km4pyYiIKU",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black px-4">
              <span className="text-primary">💬 DEPOIMENTOS</span>
              <span className="text-foreground"> DE TRANSFORMAÇÃO REAL</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {videoIds.map((videoId, index) => (
              <div 
                key={index}
                className="relative bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Depoimento ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
