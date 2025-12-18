export default function Values() {
  const values = [
    {
      number: "01",
      title: "지속가능성",
      description: "환경을 생각하는 윤리적인 소재 선택과 생산 방식을 통해 지속 가능한 패션을 만들어갑니다",
    },
    {
      number: "02",
      title: "장인정신",
      description: "디테일에 대한 집착과 완벽을 향한 끊임없는 노력으로 최상의 품질을 보장합니다",
    },
    {
      number: "03",
      title: "혁신",
      description: "전통적인 기법과 현대적인 디자인의 융합으로 새로운 패션의 가능성을 탐구합니다",
    },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-tight">우리의 가치</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            ATELIER가 추구하는 핵심 가치는 우리의 모든 작업에 반영됩니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value) => (
            <div key={value.number} className="group">
              <div className="mb-6">
                <span className="font-serif text-6xl font-light text-muted-foreground/30 group-hover:text-primary transition-colors">
                  {value.number}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
