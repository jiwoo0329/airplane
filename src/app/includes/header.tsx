'use client';
import { useState, useRef, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);

export default function Header () {
    // states
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useLayoutEffect(() => {
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
        if(pathname !== '/contact'){
          ScrollTrigger.create({
            start: '200px top',
            onEnter: () => setScrolled(true),
            onLeaveBack: () => setScrolled(false)
          })

        }
    }, [pathname]);

    return (
        <>
            <nav
                id='parallax__nav'
                className={`${scrolled || pathname === '/contact' ? 'bg' : ''}`}
            >
                <div className='nav_inner'>
                    <h1>
                        <a href='/' id='logo' className='black'>
                            항공사
                        </a>
                    </h1>

                    <ul>
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

                    <div className='lang'>
                        <Link href='/'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                            >
                                <g clipPath='url(#clip0_25_1429)'>
                                    <path
                                        d='M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M3.6001 9H20.4001'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M3.6001 15H20.4001'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M11.5002 3C9.8155 5.69961 8.92236 8.81787 8.92236 12C8.92236 15.1821 9.8155 18.3004 11.5002 21'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M12.5 3C14.1847 5.69961 15.0778 8.81787 15.0778 12C15.0778 15.1821 14.1847 18.3004 12.5 21'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_25_1429'>
                                        <rect
                                            width='24'
                                            height='24'
                                            fill='currentColor'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>KO</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
