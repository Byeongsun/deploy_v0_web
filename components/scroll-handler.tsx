"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * 페이지 로드 시 해시(#)가 있으면 해당 섹션으로 부드럽게 스크롤하는 컴포넌트
 */
export default function ScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // URL에 해시가 있는지 확인
    const hash = window.location.hash

    if (hash) {
      // 페이지가 완전히 로드된 후 스크롤
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""))
        if (element) {
          const navHeight = 80 // 네비게이션 높이 고려
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [pathname])

  return null
}
