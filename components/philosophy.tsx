export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 tracking-tight text-balance">
              디자인 철학:
              <br />
              본질의 아름다움
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ATELIER는 과도한 장식을 배제하고 본질에 집중합니다. 완벽한 실루엣과 고품질 소재의 조화로 시간이 지나도
                변치 않는 가치를 창조합니다.
              </p>
              <p>
                우리의 모든 제품은 착용자의 개성을 돋보이게 하는 캔버스입니다. 절제된 디자인 언어를 통해 당신만의
                스타일을 완성할 수 있도록 돕습니다.
              </p>
              <p>
                패션은 단순한 옷이 아닌, 당신의 정체성을 표현하는 수단입니다. ATELIER와 함께 진정한 나를 발견하세요.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] bg-muted overflow-hidden">
              <img src="/minimalist-fashion-model-black-and-white-elegant-p.jpg" alt="Fashion Philosophy" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
