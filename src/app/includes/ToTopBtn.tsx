'use client'

import { useEffect, useState } from 'react'
import { IconArrowUp } from '@tabler/icons-react'

export default function ToTopBtn() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`to-top-btn ${isVisible ? 'visible' : ''}`}
      aria-label='맨 위로 이동'
    >
      <IconArrowUp size={24} stroke={2} />
    </button>
  )
}
