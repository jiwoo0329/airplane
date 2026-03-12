'use client';

import { useEffect, useRef } from 'react';
import Globe from './_components/Globe';
import gsap from 'gsap';

export default function Contact() {
    const sloganRef = useRef(null);
    const globeRef = useRef(null);
    const infoItemsRef = useRef<HTMLDivElement[]>([]);
    const mapRef = useRef(null);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !infoItemsRef.current.includes(el)) {
            infoItemsRef.current.push(el);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.to(sloganRef.current, { opacity: 1, y: 0, duration: 1.2 })
          .to(globeRef.current, { opacity: 1, y: 0, duration: 1.5 }, '-=0.8')
          .to(infoItemsRef.current, { 
              opacity: 1, 
              y: 0, 
              duration: 0.8, 
              stagger: 0.2 
          }, '-=1.0')
          .to(mapRef.current, { opacity: 1, duration: 1 }, '-=0.5');

    }, []);

    return (
        <div className="contact_page">
            {/* 1. HERO SECTION */}
            <section className="heroSection">
                <h1 className="slogan" ref={sloganRef}>
                    To provide you with the best service,
                    <br />
                    we will respond promptly to all inquiries and requests.
                </h1>
                <div className="visualWrapper" ref={globeRef}>
                    <div className="glow"></div>
                    <div className="globeContainer">
                        <Globe className="globeWrapper" />
                    </div>
                </div>
            </section>

            {/* 2. INFO SECTION */}
            <section className="infoSection">
                <div className="infoGrid">
                    {/* Item 1: Headquarters */}
                    <div className="infoItem" ref={addToRefs}>
                        <div className="iconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <span className="label">HEADQUARTERS</span>
                        <div className="textBlock">
                            <p>F7 718, Desianflex Building,</p>
                            <p>424, Yangcheon-ro, Gangseo-gu,</p>
                            <p>Seoul, Rep. of Korea</p>
                        </div>
                    </div>

                    {/* Item 2: Tel */}
                    <div className="infoItem" ref={addToRefs}>
                        <div className="iconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <span className="label">TEL / FAX</span>
                        <div className="textBlock">
                            <p><strong>Tel :</strong> +82 2 335 6944</p>
                            <p><strong>Fax :</strong> +82 504 066 6944</p>
                        </div>
                    </div>

                    {/* Item 3: Email */}
                    <div className="infoItem" ref={addToRefs}>
                        <div className="iconBox">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </div>
                        <span className="label">EMAIL</span>
                        <div className="textBlock">
                            <p>sel@interlinkair.com</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MAP SECTION */}
            <section className="mapSection" ref={mapRef}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6041904155054!2d126.84339195248286!3d37.56438815238867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9d051dfb5035%3A0x8cc5cac4f842631e!2z642w7Iuc7JWZ7ZSM66CJ7IqkIOyngOyLneyCsOyXheyEvO2EsA!5e0!3m2!1sko!2skr!4v1768971885375!5m2!1sko!2skr"
                    className="mapFrame"
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </section>
        </div>
    );
}
