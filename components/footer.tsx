import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/">
              <h3 className="font-serif text-2xl font-semibold mb-4 hover:opacity-80 transition-opacity cursor-pointer">
                ATELIER
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              시간이 지나도 변치 않는 가치를 담은 패션을 만듭니다
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">메뉴</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#about" className="hover:text-foreground transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="hover:text-foreground transition-colors">
                  철학
                </Link>
              </li>
              <li>
                <Link href="/#story" className="hover:text-foreground transition-colors">
                  스토리
                </Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-foreground transition-colors">
                  팀
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  채용정보
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">연락처</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>서울특별시 성동구 성수동</li>
              <li>contact@atelier.kr</li>
              <li>02-1234-5678</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ATELIER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
