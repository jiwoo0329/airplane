'use client';

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger)

export default function Handling () {
    const mainRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         const tl = gsap.timeline({ delay: 0.2 });

         // Sub visual title animation
         tl.to('.sub_visual h3', {
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
      }, mainRef)
  
      return () => ctx.revert()
    }, [])

    return (
        <>
            <div className='sub_layout handling' ref={mainRef}>
                <div>
                    <div className='sub_visual'>
            <div className='sub_visual_bg'></div>
                        <div className='container'>
                            <h3 data-text='AIRCRAFT HANDLING'>
                                AIRCRAFT HANDLING
                            </h3>
                            <p>Seamless Ground Support & Operational Perfection</p>
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
                                {/* permits */}
                                <div className='permits'>
                                    <div className='contents'>
                                        <div className='title'>PERMITS</div>
                                        <p className='txt'>
                                            When preparing to operate a flight
                                            it is essential to understand the
                                            requirements of each country that
                                            you require to Overfly or Land in
                                            order to fulfill the bureaucratic
                                            demands based on the type of flight
                                            that you will be performing in each
                                            individual country.
                                            <br />
                                            The ability to obtain quick
                                            clearances always depends on the
                                            ability to understand the political
                                            status, and international treaties
                                            between countries. Also it requires
                                            personal individual trusting
                                            relationships with the proper
                                            personnel together with the proper
                                            communication channel able to reach
                                            the person in charge of issuing
                                            clearances. At Interlink Avia, we
                                            have the resources available to be
                                            able to fulfill your request quickly
                                            and efficiently.
                                        </p>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className='td_inner'>
                                                            <div className='ico_circle streamline--earth-airplane'></div>
                                                            Overflying Permits
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='td_inner'>
                                                            <div className='ico_circle lucide--plane-landing'></div>
                                                            <span>
                                                                Diplomatic
                                                                clearances
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className='td_inner'>
                                                            <div className='ico_circle lucide--handshake'></div>
                                                            <span>
                                                                Landing Permits
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='td_inner'>
                                                            <div className='ico_circle streamline--industry-innovation-and-infrastructure'></div>
                                                            <span>
                                                                Airport Slots
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='slider'>
                                        <Swiper
                                            slidesPerView={'auto'}
                                            // spaceBetween={10}
                                            modules={[Navigation]}
                                            navigation={{
                                                prevEl: '.permits .slide_prev',
                                                nextEl: '.permits .slide_next',
                                            }}
                                        >
                                            <SwiperSlide>
                                                <div className='slide_item item01'></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='slide_item item02'></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='slide_item item03'></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='slide_item item04'></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='slide_item item04'></div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className='slide_item item04'></div>
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className='btns'>
                                            <button
                                                type='button'
                                                className='slide_arrow slide_prev'
                                            >
                                                이전 슬라이드
                                            </button>
                                            <button
                                                type='button'
                                                className='slide_arrow slide_next'
                                            >
                                                다음 슬라이드
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* GROUND HANDLING */}
                                <div className='ground'>
                                    <div className='contents'>
                                        <div className='title'>
                                            GROUND HANDLING
                                        </div>
                                        <p className='txt'>
                                            Interlink Avia can take care of all
                                            the details of your trip from
                                            planning to take-off, landing and
                                            beyond.
                                            <br /> Our services provide a
                                            consistent experience and single
                                            point of contact for coordination of
                                            all elements of your trip.
                                        </p>
                                        <img
                                            src='/disc/images/chat_ground-handling.png'
                                            alt=''
                                        />
                                    </div>
                                </div>

                                {/* FUEL SERVICES */}
                                <div className='fuel'>
                                    <div>
                                        <img
                                            src='/disc/images/bg_fuel-services.jpg'
                                            alt=''
                                        />
                                    </div>
                                    <div className='contents'>
                                        <div className='title'>
                                            FUEL SERVICES
                                        </div>
                                        <p className='txt'>
                                            We can fuel any size aircraft from
                                            private jets to airliners and cargo
                                            freighters. we know the local
                                            suppliers and are able to negotiate
                                            the best possible fuel prices for
                                            our customers. You have peace of
                                            mind knowing that no matter which
                                            airport you visit in Korea, you are
                                            receiving the best service and
                                            price, without waiting for your turn
                                            at the fuel truck.
                                        </p>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <span className='ico_check'></span>
                                                            Priority Fuel
                                                            Service
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <span className='ico_check'></span>
                                                            Volume Discounts
                                                            based on quantity
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <span className='ico_check'></span>
                                                            Contract Rates
                                                        </div>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
