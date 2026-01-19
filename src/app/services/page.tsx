'use client'

import { IconArrowRight } from '@tabler/icons-react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Services () {
  return (
    <>
      <div className='sub_layout services'>
        <div>
          <div className='sub_visual'>
            <div className='container'>
              <h3 data-text='CHARTER SERVICES'>CHARTER SERVICES</h3>
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
                      <g clip-path='url(#a)'>
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
                      <g clip-path='url(#a)'>
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
                      <img src='/disc/images/services_bg02.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg02.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg02.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg02.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg02.jpg' alt='전세기' />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='img'>
                      <img src='/disc/images/services_bg02.jpg' alt='전세기' />
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
    </>
  )
}
