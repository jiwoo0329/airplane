'use client'

import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import myAlert from '@/components/modals/MyAlert'

gsap.registerPlugin(ScrollTrigger)

export default function Footer () {
  const animatedText = useRef<any>(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 769px)', () => {
      gsap.to(animatedText.current, {
        scrollTrigger: {
          trigger: animatedText.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none reset'
        },
        y: 50,
        opacity: 1,
        ease: 'bounce.out',
        duration: 2
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <>
      <footer id='footer'>
        <div className='container'>
          <div className='footer-top'>
            <div className='left_wrap'>
              <div className='logo_wrap'>
                <Link href='/' className='logo' aria-label='인터링크 바로가기'>
                  인터링크 바로가기
                </Link>
              </div>
              <p ref={animatedText}>
                Your Trusted Global Aviation Partner,
                <br />
                Connecting You Anywhere in the World.
              </p>
            </div>
            <div className='right_wrap'>
              <ul>
                <li>
                  <div className='sub circle_sub_text sm'>Address.</div>
                  <div className='contents'>
                    718, Desian Flex Building, 424, Yangcheon-ro, Gangseo-gu,
                    Seoul, Rep. of Korea
                  </div>
                </li>
                <li>
                  <div className='sub circle_sub_text sm'>Info.</div>
                  <div className='contents'>
                    대표: 홍영기 &#124; 개인정보보호책임자: 홍영기 &#124;
                    사업자등록번호: 107-87-77437
                  </div>
                </li>
                <li>
                  <div className='sub circle_sub_text sm'>Email.</div>
                  <div className='contents accent'>sel@interlinkair.com</div>
                </li>
                <li>
                  <div className='sub circle_sub_text sm'>Fax.</div>
                  <div className='contents accent'>02)335-6944</div>
                </li>
              </ul>
              <div className='link_list'>
                <Link
                  href='#'
                  className='hover_arrow'
                  onClick={e => {
                    e.preventDefault();

                    myAlert(
                      '준비 중인 페이지 입니다.\n빠른시일 내에 업데이트하도록 하겠습니다.'
                    )
                  }}
                >
                  Company Brochure
                  <IconArrowRight color='white' />
                </Link>
                <Link href='/contact' className='hover_arrow'>
                  Contact Us
                  <IconArrowRight color='white' />
                </Link>
              </div>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>Copyright © Interlink Avia All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
