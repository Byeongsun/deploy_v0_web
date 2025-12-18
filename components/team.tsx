export default function Team() {
  const team = [
    {
      name: "김서연",
      role: "크리에이티브 디렉터",
      image: "/professional-asian-woman-portrait-minimalist.jpg",
    },
    {
      name: "박지훈",
      role: "수석 디자이너",
      image: "/professional-asian-man-portrait-minimalist.jpg",
    },
    {
      name: "이민경",
      role: "패턴 디렉터",
      image: "/professional-asian-woman-portrait-creative.jpg",
    },
  ]

  return (
    <section id="team" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-tight">팀</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            다양한 배경과 경험을 가진 전문가들이 모여 ATELIER를 만들어갑니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-[3/4] bg-muted overflow-hidden mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium mb-2">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
