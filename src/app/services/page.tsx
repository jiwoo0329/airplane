'use client'

import { useLayoutEffect, useRef } from 'react'
import { IconArrowRight } from '@tabler/icons-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger)

export default function Services () {
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

      // Contents animation
      const sections = gsap.utils.toArray('.sub_content .inner')
      sections.forEach((section: any, index: number) => {
        const isVertical = section.classList.contains('vertical')
        
        // 요소 선택
        const imgs = section.querySelectorAll('.img')
        const title = section.querySelector('.txt strong')
        const desc = section.querySelector('.txt p')

        // ScrollTrigger 설정
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 75%', // 조금 더 일찍 시작하도록 조정
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        })

        // 애니메이션 함수 정의
        const animateImage = (target: any) => {
           // 이미지가 여러 개일 경우 (Swiper 등)와 단일 이미지 처리
           return gsap.to(target, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1 // 여러 이미지일 경우 시차 적용
          })
        }

        const animateText = () => {
          const textTl = gsap.timeline()
          if (title) {
            textTl.to(title, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out'
            })
          }
          if (desc) {
            textTl.to(desc, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out'
            }, title ? '-=0.6' : '0')
          }
          return textTl
        }

        // 섹션별 애니메이션 순서 조정
        if (isVertical) {
          // Vertical 섹션 (Swiper): 텍스트만 애니메이션 적용
          // Swiper 내부 이미지들은 애니메이션 충돌 방지를 위해 효과 없이 바로 보이도록 설정
          gsap.set(imgs, { opacity: 1, x: 0, scale: 1 })
          tl.add(animateText())
        } else if (index % 2 === 0) {
          // 짝수 섹션 (1번째): 이미지 -> 텍스트
          tl.add(animateImage(imgs))
            .add(animateText(), '-=0.6')
        } else {
          // 홀수 섹션 (2번째): 텍스트 -> 이미지
          tl.add(animateText())
            .add(animateImage(imgs), '-=0.6')
        }
      })
    }, mainRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div className='sub_layout services' ref={mainRef}>
        <div>
          <div className='sub_visual'>
            <div className='sub_visual_bg'></div>
            <div className='container'>
              <h3 data-text='CHARTER SERVICES'>CHARTER SERVICES</h3>
              <p>Premium Air Charter Solutions for Every Need</p>
            </div>
          </div>
        </div>
        <div
          className='sub_content'
          //   ref={contentsRef}
        >
          <section>
            <div className='container'>
              <div className='inner'>
                <div className='img'>
                  <img src='/disc/images/services_bg01.jpg' alt='전세기' />
                </div>
                <div className='txt'>
                  <strong>
                    <svg
                      className='ico_quote'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <g clipPath='url(#a)'>
                        <path d='M15 19a2 2 0 0 1-2-2v-6c0-3.13 1.65-5.193 4.757-5.97a1 1 0 1 1 .486 1.94C16.016 7.527 15 8.797 15 11v1h3a2 2 0 0 1 1.995 1.85L20 14v3a2 2 0 0 1-2 2h-3ZM6 19a2 2 0 0 1-2-2v-6c0-3.13 1.65-5.193 4.757-5.97a1 1 0 1 1 .486 1.94C7.016 7.527 6 8.797 6 11v1h3a2 2 0 0 1 1.995 1.85L11 14v3a2 2 0 0 1-2 2H6Z' />
                      </g>
                      <defs>
                        <clipPath id='a'>
                          <path fill='#fff' d='M24 24H0V0h24z' />
                        </clipPath>
                      </defs>
                    </svg>
                    INTERLINK AVIA is the best option.
                  </strong>
                  <p>
                    You may need to deliver a cargo urgently so that to avoid
                    suspension of production. You may have large-size or
                    non-standard loads, which needs to be transported to
                    hard-to-reach point of destination. In the above and many
                    other extraordinary situations, which require fast solution,
                    a cargo charter with INTERLINK AVIA is the best option.
                  </p>
                </div>
              </div>

              <div className='inner'>
                <div className='txt'>
                  <strong>
                    <svg
                      className='ico_quote'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <g clipPath='url(#a)'>
                        <path d='M15 19a2 2 0 0 1-2-2v-6c0-3.13 1.65-5.193 4.757-5.97a1 1 0 1 1 .486 1.94C16.016 7.527 15 8.797 15 11v1h3a2 2 0 0 1 1.995 1.85L20 14v3a2 2 0 0 1-2 2h-3ZM6 19a2 2 0 0 1-2-2v-6c0-3.13 1.65-5.193 4.757-5.97a1 1 0 1 1 .486 1.94C7.016 7.527 6 8.797 6 11v1h3a2 2 0 0 1 1.995 1.85L11 14v3a2 2 0 0 1-2 2H6Z' />
                      </g>
                      <defs>
                        <clipPath id='a'>
                          <path fill='#fff' d='M24 24H0V0h24z' />
                        </clipPath>
                      </defs>
                    </svg>
                    INTERLINK AVIA&apos;s Charter Cargo Aircraft Service
                  </strong>
                  <p>
                    We provide swift worldwide transportation by charter
                    flights. Urgency, safety, time saving, ability to deliver a
                    cargo to airports not specified in regular flights&apos;
                    time schedule, are the main advantages of the cargo charter.
                    Diligence, professional approach, responsibility and smooth
                    operation organization enable us to maintain leadership in
                    the charter cargo transportation market.
                  </p>
                </div>
                <div className='img'>
                  <img src='/disc/images/services_bg02.jpg' alt='전세기' />
                </div>
              </div>

              <div className='inner vertical'>
                <div className='txt'>
                  <strong>
                    <svg
                      className='ico_quote'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <g clipPath='url(#a)'>
                        <path d='M15 19a2 2 0 0 1-2-2v-6c0-3.13 1.65-5.193 4.757-5.97a1 1 0 1 1 .486 1.94C16.016 7.527 15 8.797 15 11v1h3a2 2 0 0 1 1.995 1.85L20 14v3a2 2 0 0 1-2 2h-3ZM6 19a2 2 0 0 1-2-2v-6c0-3.13 1.65-5.193 4.757-5.97a1 1 0 1 1 .486 1.94C7.016 7.527 6 8.797 6 11v1h3a2 2 0 0 1 1.995 1.85L11 14v3a2 2 0 0 1-2 2H6Z' />
                      </g>
                      <defs>
                        <clipPath id='a'>
                          <path fill='#fff' d='M24 24H0V0h24z' />
                        </clipPath>
                      </defs>
                    </svg>
                    Diverse Cargo Transport Experience
                  </strong>
                  <p>
                    Having started with the cargo transportation market in 2000,
                    INTERLINK AVIA has gained valuable experience in
                    transportation of animals, aircraft engines, motor vehicles,
                    spare parts for continuous assembly line production,
                    perishable and valuable cargoes. In accordance with
                    international safety requirements, loads with such specific
                    features shall be transported by a cargo aircraft. We will
                    provide urgency while keeping your own operations smooth and
                    saving your time.
                  </p>
                </div>
                <Swiper
                  modules={[Navigation]}
                  // spaceBetween={50}
                  slidesPerView="auto"
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                  loop={true}
                  // roundLengths={true}
                  // loopAdditionalSlides={30}
                  resizeObserver={true}
                  observer={true}
                  observeParents={true}
                  navigation
                >
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg01.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg01.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg01.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg01.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg01.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg01.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg01.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* <div className='swiper-btns'>
                  <button type='button' className='swiper-button-prev'></button>
                  <button type='button' className='swiper-button-next'></button>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}
