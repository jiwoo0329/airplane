'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import { IconCirclePlusFilled } from '@tabler/icons-react';

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Flip)

export default function Home () {
  const mainRef = useRef<any>(null)
  const horRef = useRef<any>(null)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    // 페이지가 로드된 후 'active' 클래스를 추가
    const videoElement = document.querySelector('.back_video')
    if (videoElement) {
      videoElement.classList.add('active')
    }
  }, [])

  useEffect(() => {
    // #sec02 애니메이션 관련
    gsap.context(() => {
      // #sec01
      ScrollTrigger.create({
        trigger: '#sec01',
        start: 'top top',
        pin: true,
        pinSpacing: false
      })

      // #sec02
      // 완벽한 코드
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.h-100vh.first', // 애니메이션 시작 지점
          start: 'center center', // 트리거 시작 위치
          end: '+=100', // 애니메이션 종료 스크롤 길이
          pin: true, // 섹션 고정
          scrub: false // 스크롤과 타임라인 연동
        }
      })

      // 글자 초기 설정
      gsap.set('.char', { opacity: 0 })
      const chars = gsap.utils.toArray('.char')

      // 글자 fade-in 애니메이션
      tl.fromTo(
        chars,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.05,
          ease: 'power1.out',
          stagger: { amount: 0.4, from: 'random' }
        }
      )

      // blur 제거 + Flip 적용
      tl.to(
        '.blur',
        {
          opacity: 0,
          filter: 'blur(5px)',
          duration: 1,
          ease: 'power1.out',
          stagger: 0.1,
          onComplete: () => {
            const state = Flip.getState('.char')
            document
              .querySelectorAll('.char.blur')
              .forEach(el => el.classList.toggle('hide'))
            Flip.from(state, {
              duration: 1,
              absolute: false,
              nested: true,
              onEnter: el => gsap.from(el, { autoAlpha: 0 }),
              onLeave: el => gsap.to(el, { autoAlpha: 0 })
            })
          }
        },
        '+=0.5'
      )
      // 완벽한 코드 끝

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.h-100vh.first',
            start: 'bottom 70%',
            end: 'bottom top',
            markers: true,
            pin: true,
            scrub: true,
            anticipatePin: 1
          }
        })
        .to('.real', {
          opacity: 0,
          scale: 60,
          autoAlpha: 0
          // duration: 0.9
        })

      // #sec02 배경색 변경
      ScrollTrigger.create({
        trigger: '.mean',
        start: 'top center',
        // end: 'bottom 5%',
        markers: true,
        toggleClass: { targets: '#sec02', className: 'active' }
      })

      ScrollTrigger.create({
        trigger: '.mean',
        start: 'top bottom',
        // end: "top 40%",
        scrub: true,
        animation: gsap.fromTo(
          '.mean',
          { x: '-10%', opacity: 0 }, // 시작 상태
          { x: '0%', opacity: 1, duration: 2 } // 종료 상태
        )
        // markers: true
      })

      // clip_img animation with responsive settings
      const clipMm = gsap.matchMedia()
      
      clipMm.add('(min-width: 769px)', () => {
        ScrollTrigger.create({
          trigger: '.clip_img',
          start: 'bottom bottom',
          end: 'center center',
          pin: false,
          scrub: true,
          animation: gsap.to('.clip_img', {
            clipPath: 'inset(0px 0px 0px 300px round 20px)',
            duration: 5
          }),
          markers: true
        })
      })
      
      clipMm.add('(max-width: 768px)', () => {
        ScrollTrigger.create({
          trigger: '.clip_img',
          start: 'bottom bottom',
          end: 'top center',
          pin: false,
          scrub: 6,
          animation: gsap.to('.clip_img', {
            clipPath: 'inset(0px 0px 0px 300px round 20px)',
            duration: 8
          }),
          markers: true
        })
      })

      // ScrollTrigger.create({
      //   trigger: '.h-100vh.first',
      //   containerAnimation: tl,
      //   start: 'top top',
      //   end: '+=1500',
      //   pin: true,
      //   scrub: true,
      //   animation: gsap.to('.real', {
      //     opacity: 0,
      //     scale: 5,
      //   }),
      //   markers: true
      // })

      // ✅ 두 번째 스크롤 연동 타임라인

      // ScrollTrigger.create({
      //   // trigger: '.real-wrapper',
      //   containerAnimation: tl,
      //   start: '+=1500 top',
      //   // end: '+=500',
      //   pin: true,
      //   scrub: true,
      //   animation: gsap.to('.real', {
      //     opacity: 0,
      //     scale: 1.2,
      //   }),
      //   markers: true
      // })
      // const aaa = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.h-100vh.first',
      //     pin: true,
      //     start: 'center center', // 같은 위치에서 시작
      //     end: 'bottom', // 스크롤 길이
      //     scrub: true,
      //   }
      //   }).to('.real', {
      //     opacity: 0,
      //     scale: 1.2, // 🔥 좀 더 커지게 (원하면 값 조정 가능)
      //   })

      // 가로 스크롤 #sec03 ~ #sec05
      const hor = horRef.current
      const sections = sectionsRef.current

      if (!hor || sections.length === 0) return

      const tween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        containerAnimation: tl,
        scrollTrigger: {
          trigger: hor,
          start: 'top top',
          end: () => (hor ? `+=${hor.offsetWidth - window.innerWidth}` : 0),
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 }
          },
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      })

      sections.forEach(section => {
        if (!section) return
        const bg = section.querySelector('.bg')
        if (!bg) return

        gsap.fromTo(
          bg,
          { scale: 1.08 }, // 시작상태(form)
          {
            // 끝 상태(to)
            scale: 1,
            scrollTrigger: {
              // 스크롤의 위치에 따라 이 tween을 재생/반전(또는 scrub)
              trigger: section, // 이 ScrollTrigger가 기준으로 삼을 요소, 트리거 대상
              containerAnimation: tween, // hor 스크롤과 연동
              start: 'left center', // 트리거 시작점
              end: 'right center', // 트리거 종료점
              toggleActions: 'play reverse play reverse' // ScrollTrigger의 간단한 동작 제어 문자열
            },
            duration: 5
          }
        )

        const subject = section.querySelector('.title')
        const text = section.querySelector('.text_box')
        const slide_tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            containerAnimation: tween,
            start: 'left center',
            end: 'right center',
            toggleActions: 'play reverse play reverse'
          }
        })
        slide_tl.fromTo(
          subject,
          { y: '20%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1 }
        )
        slide_tl.fromTo(
          text,
          { y: '30%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 1.5 }
        )
      })

      // #sec06
      // const ani9 = gsap.timeline();
      // ani9.to("#sec06 .bg",{scale:10, duration: 2})
      //     .to("#sec06 .bg",{autoAlpha : 0})

      // ScrollTrigger.create({
      //     animation: ani9,
      //     trigger:"#sec06",
      //     start:"top top",
      //     end: "+=4000",
      //     scrub: true,
      //     pin: true,
      // });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.textBox', // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
            pinnedContainer: '.textBox', // 고정할 영역
            start: 'center center',
            end: '+=2000',
            markers: true,
            scrub: 1,
            pin: true
          }
        })
        .fromTo(
          '.textBox .mask span',
          { backgroundSize: '0% 100%'},
          {
            backgroundSize: '100% 100%'
          }
        )
        .fromTo('#sec06 .bg', { scale: 1 }, { scale: 5, duration: 2 }, 0) // 0: 동시 실행

      // gsap.fromTo('.textBox .mask span',
      //   {backgroundSize: '0% 100%'},
      //   {
      //     backgroundSize: '100% 100%',
      //     scrollTrigger: {
      //       trigger: '.textBox', // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
      //       pinnedContainer:'.textBox', // 고정할 영역
      //       start: "center center",
      //       end: '+=4000',
      //       markers: true,
      //       scrub: 1,
      //       pin: true
      //     },
      // })

      // gsap.to(lettersRef.current, {
      //   scrollTrigger: {
      //     trigger: triggerRef.current, // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
      //     scrub: true, // 하위요소를 하나씩 순차적으로 하고 싶어서 등록
      //     pin: true,
      //     start: 'center center', // 셀렉터로 등록한 요소의 상단이 뷰포트의 바닥에 있을 때 시작
      //     end: '+=1500', // 바닥 80프로에서 완료
      //     markers: true // 트리거 마커의 표시(boolean)
      //   },
      //   color: '#82AE40',
      //   duration: 1,
      //   // stagger: 0.05
      // })
    }, mainRef)

    // const firstVerticalContext = gsap.timeline({
    // 	scrollTrigger: {
    // 		trigger: ".first",
    // 		start: "top top",
    // 		endTrigger: "#hor",
    // 		end: "bottom bottom",
    // 		snap: {
    // 			snapTo: 1,
    // 			duration: { min: 0.25, max: 0.75 },
    // 			delay: 0.125,
    // 			ease: "power1.inOut"
    // 		}
    // 	}
    // });

    return () => {
      // Cleanup
      // tween.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const text =
    'At Interlink Avia, we have the resources available to be able to fulfill your request quickly and efficiently.'

  const [lettersRef, setlettersRef] = useArrayRef()

  function useArrayRef<T> () {
    const refs = useRef<T[]>([])
    refs.current = []
    const setRef = (ref: T | null) => {
      if (ref) refs.current.push(ref)
    }
    return [refs, setRef] as const
  }

  const triggerRef = useRef(null)

  return (
    <main className='main' ref={mainRef}>
      <section className='home first' id='sec01'>
        <video className='back_video' autoPlay muted loop playsInline preload='metadata' style={{scale: 1.2}}> 
          <source src='/disc/images/main_video_02.mp4' type='video/mp4' />
          Your browser is not supported!
        </video>
        <div className='content'>
          <h3>
            A reliable partner
            <br />
            creating the future of aviation together
          </h3>
        </div>
      </section>

      <section id='sec02'>
        <div className='container'>
          <div className='h-100vh first'>
            <div className='real'>
              <span className='char'>I</span>
              <span className='char'>n</span>
              <span className='char'>t</span>
              <span className='char'>e</span>
              <span className='char'>r</span>
              <span className='char'>l</span>
              <span className='char'>i</span>
              <span className='char'>n</span>
              <span className='char'>k</span>
              <span className='char blur'>&nbsp;<IconCirclePlusFilled />&nbsp;</span>
              <span className='char'>A</span>
              <span className='char'>v</span>
              <span className='char'>i</span>
              <span className='char'>a</span>
              <span className='char blur'>t</span>
              <span className='char blur'>i</span>
              <span className='char blur'>o</span>
              <span className='char blur'>n</span>
            </div>
          </div>
          <div className='sec02_2 second'>
            <div className='mean'>
              <span className='circle_sub_text'>We go beyond aviation support,</span>
              <br />
              becoming the bridge that connects the world.
            </div>
            <div className='clip_img'></div>
          </div>
        </div>
      </section>

      {/* 가로 슬라이드 컨테이너 */}
      <div ref={horRef} id='hor'>
        <section
          id='sec03'
          ref={el => {
            if (el) sectionsRef.current[0] = el
          }}
        >
          <div className='wrap'>
            <div className='container'>
              <div className='title'>
                <span className='top'>Business</span>
                <br />
                Leading the Aviation
              </div>
              <p className='text_box'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis neque, iure, repellendus esse laboriosam perspiciatis
                quisquam corrupti nihil inventore totam dignissimos enim,
                molestias aliquam ipsa sit. Facilis quis doloribus tempora.
              </p>
            </div>
            <div className='bg'></div>
          </div>
        </section>
        <section
          id='sec04'
          ref={el => {
            if (el) sectionsRef.current[1] = el
          }}
        >
          <div className='wrap'>
            <div className='container'>
              <div className='title'>
                <span className='top'>Business</span>
                <br />
                CHARTER SERVICES
              </div>
              <p className='text_box'>
                We provide swift worldwide transportation by charter flights.
                Urgency, safety, time saving, ability to deliver a cargo to
                airports not specified in regular flights&lsquo; time schedule,
                are the main advantages of the cargo charter.
              </p>
            </div>
            <div className='bg'></div>
          </div>
        </section>
        <section
          id='sec05'
          ref={el => {
            if (el) sectionsRef.current[2] = el
          }}
        >
          <div className='wrap'>
            <div className='container'>
              <div className='title'>
                <span className='top'>Business</span>
                <br />
                GROUND HANDLING
              </div>
              <p className='text_box'>
                Interlink Avia can take care of all the details of your trip
                from planning to take-off, landing and beyond. Our services
                provide a consistent experience and single point of contact for
                coordination of all elements of your trip.
              </p>
            </div>
            <div className='bg'></div>
          </div>
        </section>
      </div>
      {/* // 가로 슬라이드 컨테이너 */}

      <section id='sec06'>
        <div className='container'>
          <div className='spacing-small'></div>
          {/* <div className='bg'></div> */}
          {/* <p className='text_box' ref={triggerRef}>
            {text.split('').map((letter, idx) => (
              <span className='reveal-text' ref={setlettersRef} key={idx}>
                {letter}
              </span>
            ))}
          </p> */}

          <div className='textBox'>
            <div className='bg'></div>
            <span className='mask'>
              <span className='text'>{text}</span>
            </span>
          </div>

          <div className='spacing'></div>
        </div>
      </section>
    </main>
  )
}
