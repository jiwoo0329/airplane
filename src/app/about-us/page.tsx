'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip)

export default function AboutUs() {
  const mainRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bannerTl = gsap.timeline({ delay: 0.2 });

      // Sub visual title animation
      bannerTl.to('.sub_visual h3', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
      .to('.sub_visual p', {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
      }, "-=0.8")

       // Sub visual background animation
       gsap.fromTo('.sub_visual_bg', 
        { scale: 1.2 },
        { scale: 1, duration: 2.5, ease: 'power2.out' }
      )

      // 배경 확대 애니메이션
      ScrollTrigger.create({
        trigger: '.bg_top',
        start: 'bottom bottom',
        end: 'center center',
        markers: true,
        scrub: true,
        animation: gsap.fromTo('.bg_top', { maxWidth: '100%' }, { maxWidth: '120rem' }),
      })

      // intro_txt 요소 선택
      const intro = document.querySelector('.intro_txt') as HTMLElement | null
      if (!intro) return

      /**
       * 재귀적으로 노드를 순회하면서 텍스트 노드만 단어별로 <span class="word">로 감싼다.
       * 기존 요소의 태그와 속성(.primary-clr 등)은 그대로 유지되며,
       * 그 내부의 텍스트도 동일하게 처리된다.
       */
      function wrapWordsPreserveTags(node: Node): Node {
        const fragment = document.createDocumentFragment()

        node.childNodes.forEach((child) => {
          if (child.nodeType === Node.TEXT_NODE) {
            // 텍스트 노드: 공백을 기준으로 단어 분리하면서 원래 공백 형태 유지
            const text = child.textContent || ''
            // split but keep spaces: use regex to capture words and spaces
            // 이 방식은 연속된 공백도 유지합니다.
            const parts = text.match(/\S+\s*|\s+/g) || []

            parts.forEach((part) => {
              // 공백(스페이스만 있는 경우)은 TextNode로 그대로 추가
              if (/^\s+$/.test(part)) {
                fragment.appendChild(document.createTextNode(part))
              } else {
                // 단어(뒤에 공백이 붙어있을 수 있음)를 분리해서 word span으로 만들자
                // 예: "Hello " -> wordText="Hello", trailing=" " 처리
                const m = part.match(/^(\S+)(\s*)$/)
                if (m) {
                  const wordText = m[1]
                  const trailing = m[2] || ''

                  const span = document.createElement('span')
                  span.className = 'word'
                  span.textContent = wordText
                  fragment.appendChild(span)

                  if (trailing) fragment.appendChild(document.createTextNode(trailing))
                } else {
                  // 안전 fallback
                  const span = document.createElement('span')
                  span.className = 'word'
                  span.textContent = part
                  fragment.appendChild(span)
                }
              }
            })
          } else if (child.nodeType === Node.ELEMENT_NODE) {
            // Element 노드: 태그와 속성(예: class)을 복제하고,
            // 그 안의 children은 재귀적으로 처리하여 append
            const el = child as HTMLElement
            const cloned = document.createElement(el.tagName.toLowerCase())

            // 복제속성 복사
            for (let i = 0; i < el.attributes.length; i++) {
              const attr = el.attributes[i]
              cloned.setAttribute(attr.name, attr.value)
            }

            // 재귀 처리한 자식들을 cloned에 붙임
            const processedChildFragment = wrapWordsPreserveTags(el)
            cloned.appendChild(processedChildFragment)
            fragment.appendChild(cloned)
          } else {
            // 기타 노드는 그대로 복사
            fragment.appendChild(child.cloneNode(true))
          }
        })

        return fragment
      }

      // 원본 내용을 보존하고, 처리한 fragment로 교체
      const processed = wrapWordsPreserveTags(intro)
      // 빈 상태로 만들고 추가
      intro.innerHTML = ''
      intro.appendChild(processed)

      // GSAP 애니메이션 — 단어(.word) 대상
      const wordElements = intro.querySelectorAll('.word')
      const tl = gsap.timeline({ paused: true })
      tl.from(wordElements, {
        opacity: 0,
        x: '1em',
        duration: 0.6,
        ease: 'power2.out',
        stagger: { amount: 0.3 },
      })

      // ScrollTrigger 연결
      ScrollTrigger.create({
        trigger: intro,
        start: 'top 80%',
        markers: true,
        onEnter: () => tl.play(),
        onLeaveBack: () => {
          tl.progress(0)
          tl.pause()
        },
      })




      const cards = gsap.utils.toArray<HTMLElement>('.card_list .card')

      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -100 : 100
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        })
        tl.from(card, {
          opacity: 0,
          x: fromX,
          duration: 2,
          ease: 'power3.out',
        })
      })

    }, mainRef)

    return () => {
      ctx.revert()
      // ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className='sub_layout aboutus' ref={mainRef}>
      <div>
        <div className='sub_visual'>
          <div className='sub_visual_bg'></div>
          <div className='container'>
            <h3 data-text='ABOUT US'>ABOUT US</h3>
            <p>Your Trusted Partner in Aviation Excellence</p>
          </div>
        </div>
      </div>
      <div className='sub_content'>
        <section>
          <div className='bg_top'>
            <div className='bg'></div>
          </div>
          <div className='container'>
            {/* .primary-clr 같은 span 클래스는 보존됩니다 */}
            <p className='intro_txt'>
              Providing&nbsp;
              <span className='primary-clr'>Cutting-Edge Technology</span>
              &nbsp;and&nbsp;
              <span className='primary-clr'>Top-Tier Services</span>
              &nbsp;to Address Global Customer Challenges
            </p>

            <div className='card_list'>
              <div className='card'>
                <div className='title'>Technology</div>
                <div className='txt'>
                  INTERLINK AVIA is an air charter sales, full-service ground
                  handling, and flight support company that operates across
                  Korea. With our headquarters and 24/7 operations center based
                  in Seoul, we have a robust network of aviation ground support
                  professionals available to offer a wide range of services to
                  suit the needs of our discerning clients. We specialize in
                  handling all types of ad hoc, private, and charter flights.
                </div>
              </div>
              <div className='card'>
                <div className='title'>GSA Service</div>
                <div className='txt'>
                  INTERLINK AVIA provides GSA services in Korea for passenger &
                  cargo sales for Russian air companies such as Yakutia Air,
                  Ministry for Emergency Situations of Russia, and Atlant-Soyuz
                  Air.
                  <br />
                  <br />
                  We&#39;ve built a loyal group of clients who have chosen to
                  work with us because we provide the best combination of
                  service and pricing.
                </div>
              </div>
              <div className='card'>
                <div className='title'>Customer Service</div>
                <div className='txt'>
                  Every flight, aircraft, and crew receives the same exceptional
                  service and attention to detail that only VIP clients receive
                  with other handlers. We are experts in the region and know how
                  best to get things done quickly, efficiently, and accurately.
                  Because we are local, we have the best-negotiated discounts
                  with the vendors and facilities we coordinate. Our staff are
                  trained to the highest airport operational, safety, and
                  quality standards.
                  <br />
                  <br />
                  Each and every member of our team is professional, dedicated,
                  and experienced — ensuring that your aircraft and crew receive
                  the highest quality of service for smooth arrivals and
                  departures every time.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
