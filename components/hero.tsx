export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-accent">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(/placeholder.svg?height=1080&width=1920&query=elegant+fashion+fabric+texture+close+up+minimalist)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground mb-6 tracking-tight">
          패션을 재정의하다
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          ATELIER는 현대적인 감각과 장인정신의 조화로
          <br className="hidden md:block" />
          당신만의 독특한 스타일을 완성합니다
        </p>
      </div>
    </section>
  )
}
