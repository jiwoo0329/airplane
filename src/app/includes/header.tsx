'use client';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);

export default function Header () {
    // states
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // refs for mobile menu animation
    const mobileMenuLinksRef = useRef<(HTMLLIElement | null)[]>([]);
    const mobileLangRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[pathname])

    // Mobile menu animation
    useEffect(() => {
        if (isMenuOpen) {
            // 메뉴가 열릴 때: 링크들을 순차적으로 나타나게 함
            gsap.fromTo(
                mobileMenuLinksRef.current,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out',
                    delay: 0.2,
                }
            );
            
            // 언어 선택 버튼도 애니메이션
            gsap.fromTo(
                mobileLangRef.current,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    delay: 0.6,
                }
            );
        } else {
            // 메뉴가 닫힐 때: 빠르게 사라지게 함
            gsap.to([...mobileMenuLinksRef.current, mobileLangRef.current], {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power2.in',
            });
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const showNav = gsap
            .from('#parallax__nav', {
                yPercent: -200,
                paused: true,
                duration: 0.2,
            })
            .progress(1);

        // 숨기기 제어
        ScrollTrigger.create({
            start: 'top top',
            end: 99999,
            onUpdate: self => {
                self.direction === -1 ? showNav.play() : showNav.reverse();
            },
        });

        // 배경색 제어
        // ScrollTrigger.create({
        //     start: '200px top', // 원하는 위치
        //     onEnter: () => {
        //         document
        //             .getElementById('parallax__nav')
        //             ?.classList.add('bg');
        //     },
        //     onLeaveBack: () => {
        //         document
        //             .getElementById('parallax__nav')
        //             ?.classList.remove('bg');
        //     },
        // });
          ScrollTrigger.create({
            start: '200px top',
            onEnter: () => setScrolled(true),
            onLeaveBack: () => setScrolled(false)
          })
    }, [pathname]);

    return (
        <>
            <nav
                id='parallax__nav'
                className={`${scrolled || isMenuOpen ? 'bg' : ''}`}
            >
                <div className='nav_inner'>
                    <h1>
                        <Link href='/' id='logo'>항공사</Link>
                    </h1>

                    {/* Desktop Menu */}
                    <ul className='desktop_only'>
                        <li>
                            <Link href='/about-us'>ABOUT US</Link>
                        </li>
                        <li>
                            <Link href='/services'>CHARTER SERVICES</Link>
                        </li>
                        <li>
                            <Link href='/handling'>AIRCRAFT HANDLING</Link>
                        </li>
                        <li>
                            <Link href='/contact'>CONTACT US</Link>
                        </li>
                    </ul>

                    <div className='lang desktop_only'>
                        <Link href='/'>
                            <Globe size={20}/>
                            <span>KO</span>
                        </Link>
                    </div>

                    {/* Hamburger Button */}
                    <div className={`menu_btn ${isMenuOpen ? 'active' : ''}`} onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile_menu ${isMenuOpen ? 'active' : ''}`}>
                    <div className="mobile_menu_wrapper">
                        <ul>
                            <li ref={(el) => { mobileMenuLinksRef.current[0] = el; }}>
                                <Link href='/about-us' onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
                            </li>
                            <li ref={(el) => { mobileMenuLinksRef.current[1] = el; }}>
                                <Link href='/services' onClick={() => setIsMenuOpen(false)}>CHARTER SERVICES</Link>
                            </li>
                            <li ref={(el) => { mobileMenuLinksRef.current[2] = el; }}>
                                <Link href='/handling' onClick={() => setIsMenuOpen(false)}>AIRCRAFT HANDLING</Link>
                            </li>
                            <li ref={(el) => { mobileMenuLinksRef.current[3] = el; }}>
                                <Link href='/contact' onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
                            </li>
                        </ul>

                        <div className='lang_mobile' ref={mobileLangRef}>
                            <Link href='/' onClick={() => setIsMenuOpen(false)}>
                               <Globe />
                                <span>KO</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
