"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const pathname = usePathname()

  // 앵커 링크 클릭 핸들러 - 다른 페이지에서도 홈으로 이동 후 스크롤
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.replace("#", "")
    
    // 현재 페이지가 홈이 아니면 홈으로 이동
    if (pathname !== "/") {
      e.preventDefault()
      window.location.href = `/${href}`
      return
    }

    // 홈 페이지에서 앵커 링크 클릭 시 부드러운 스크롤
    e.preventDefault()
    const element = document.getElementById(hash)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
            ATELIER
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link 
              href="/#about" 
              onClick={(e) => handleAnchorClick(e, "#about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              소개
            </Link>
            <Link 
              href="/#philosophy" 
              onClick={(e) => handleAnchorClick(e, "#philosophy")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              철학
            </Link>
            <Link 
              href="/#story" 
              onClick={(e) => handleAnchorClick(e, "#story")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              스토리
            </Link>
            <Link 
              href="/#team" 
              onClick={(e) => handleAnchorClick(e, "#team")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              팀
            </Link>
            <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
              채용정보
            </Link>
          </div>

          <Button size="sm" className="text-sm">
            문의하기
          </Button>
        </div>
      </div>
    </nav>
  )
}
