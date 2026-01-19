'use client';

import { useEffect, useState, useRef } from 'react';
import Globe from './_components/Globe';

export default function Contact () {
    const mapRef = useRef(null);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <>
            <div className='sub_layout contact'>
                <div className='sub_content'>
                    <section>
                        <div className=''>
                            <h3>
                                To provide you with the best service,
                                <br />
                                we will respond promptly to all inquiries and
                                requests.
                            </h3>
                            <div className='box'>
                                <div className='row'>
                                    <div className='sub circle_sub_text sm'>
                                        CONTACT US
                                    </div>
                                    <div className='txt'>
                                        - Tel : +82 2 335 6944(rep.)
                                        <br />
                                        - Fax : +82 504 066 6944
                                        <br />- E-mail : sel@interlinkair.com
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='sub circle_sub_text sm'>
                                        LOCATION
                                    </div>
                                    <div className='txt'>
                                        F7 718, Desianflex Building, 424,
                                        Yangcheon-ro, Gangseo-gu, Seoul
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 구글 지도 */}
                        <div
                            ref={mapRef}
                            className='map'
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {loaded && (
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.671945882036!2d126.76735527614584!3d37.656915918939916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c854595343f93%3A0xf551d3fa8e3dd3b0!2z7ZWY7J2067Kg65287Iqk!5e0!3m2!1sko!2skr!4v1763088997435!5m2!1sko!2skr'
                                    width='100%'
                                    height='600'
                                    style={{ border: '0', marginTop: '-150px' }}
                                    allowFullScreen
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>
                            )}
                        </div>
                    </section>

                    <Globe/>
                </div>
            </div>
        </>
    );
}
