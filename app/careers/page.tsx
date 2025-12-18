import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CareersPage() {
  const requirements = [
    {
      title: "필수 자격 요건",
      items: [
        "패션/의류/섬유 관련 학과 학사 이상 또는 동등한 실무 경력",
        "패션 디자인 또는 MD 관련 실무 경력 3년 이상",
        "트렌드 분석 및 상품 기획 능력",
        "Excel, PowerPoint 등 오피스 프로그램 활용 능력",
        "원활한 커뮤니케이션 능력",
      ],
    },
    {
      title: "우대 사항",
      items: [
        "브랜드 MD 경력 5년 이상",
        "해외 브랜드 MD 경력",
        "온라인/오프라인 유통 채널 관리 경험",
        "데이터 분석 및 리포팅 경험",
        "영어 회화 가능자",
        "일본어 또는 중국어 가능자",
      ],
    },
    {
      title: "주요 업무",
      items: [
        "시즌별 상품 기획 및 라인업 구성",
        "트렌드 분석 및 시장 조사",
        "매출 분석 및 재고 관리",
        "브랜드 및 공급업체와의 협상",
        "상품 발주 및 입고 관리",
        "MD 리포트 작성 및 프레젠테이션",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-24">
        <div className="container mx-auto px-6 py-16">
          {/* 헤더 섹션 */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-6 tracking-tight">
              채용정보
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              ATELIER와 함께 성장할 인재를 찾고 있습니다
            </p>
          </div>

          {/* 채용 공고 카드 */}
          <Card className="max-w-4xl mx-auto mb-12">
            <CardHeader>
              <CardTitle className="font-serif text-3xl">MD (Merchandiser) 채용</CardTitle>
              <CardDescription className="text-base mt-2">
                정규직 | 서울 본사 | 경력 3년 이상
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* 회사 소개 */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-4">회사 소개</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ATELIER는 현대적인 감각과 장인정신의 조화로 고객만의 독특한 스타일을 완성하는 패션 브랜드입니다.
                  우리는 지속가능성, 장인정신, 혁신을 핵심 가치로 하여 시간이 지나도 변치 않는 가치를 창조하고 있습니다.
                </p>
              </div>

              <Separator />

              {/* 자격 요건 섹션 */}
              {requirements.map((section, index) => (
                <div key={index}>
                  <h2 className="font-serif text-2xl font-medium mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {index < requirements.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}

              <Separator />

              {/* 근무 조건 */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-4">근무 조건</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">근무지</p>
                    <p className="font-medium">서울특별시 성동구 성수동</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">근무 형태</p>
                    <p className="font-medium">정규직 (수습 3개월)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">근무 시간</p>
                    <p className="font-medium">주 5일 (09:00 - 18:00)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">급여</p>
                    <p className="font-medium">경력에 따라 협의</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* 지원 방법 */}
              <div>
                <h2 className="font-serif text-2xl font-medium mb-4">지원 방법</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>• 이메일: careers@atelier.kr</p>
                  <p>• 제목: [MD지원] 이름_연락처</p>
                  <p>• 첨부: 이력서, 자기소개서, 포트폴리오 (선택)</p>
                  <p className="text-sm mt-4 text-muted-foreground/80">
                    지원서 검토 후 개별 연락드리겠습니다.
                  </p>
                </div>
              </div>

              {/* 버튼 */}
              <div className="flex gap-4 pt-4">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    홈으로 돌아가기
                  </Button>
                </Link>
                <Button className="flex-1" asChild>
                  <a href="mailto:careers@atelier.kr">지원하기</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  )
}


