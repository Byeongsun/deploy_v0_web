import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 tracking-tight">
          함께 만들어갈
          <br className="md:hidden" /> 새로운 이야기
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          협업 제안이나 문의사항이 있으시다면 언제든 연락주세요
        </p>
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-8"
        >
          문의하기
        </Button>
      </div>
    </section>
  )
}
