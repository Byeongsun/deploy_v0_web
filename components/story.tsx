export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-12 tracking-tight text-center">우리의 이야기</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="aspect-square bg-muted overflow-hidden">
              <img src="/fashion-design-studio-workspace-minimal.jpg" alt="Studio" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-square bg-muted overflow-hidden">
              <img src="/fashion-fabric-texture-detail-close-up.jpg" alt="Fabric Detail" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              2018년, 서울 성수동의 작은 작업실에서 시작된 ATELIER는 '진정한 가치를 담은 옷'을 만들고자 하는 열정으로
              탄생했습니다.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              빠르게 변화하는 패스트 패션의 시대에, 우리는 느리지만 의미 있는 방식을 선택했습니다. 하나하나 정성스럽게
              제작된 우리의 제품은 단순한 의류를 넘어 착용자와 함께 나이 들어가는 동반자가 됩니다.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              오늘날 ATELIER는 국내외 2000여 개 매장에서 만나볼 수 있으며, 여전히 처음의 마음을 잃지 않고 고객과 함께
              성장하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
