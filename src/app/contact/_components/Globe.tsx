'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

// https://github.com/shuding/cobe

export default function Globe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let phi = 0;
        let width = 0;

        // Resize handler to keep globe crisp
        const onResize = () =>
            canvasRef.current && (width = canvasRef.current.offsetWidth);
        window.addEventListener('resize', onResize);
        onResize();

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.25, 0.05], // Dark emerald base
            markerColor: [0.6, 1, 0.4], // Bright neon green markers
            glowColor: [0.3, 0.6, 0.1], // Greenish glow
            markers: [
                { location: [37.5665, 126.9780], size: 0.1 } // Seoul approx
            ],
            onRender: state => {
                state.phi = phi;
                phi += 0.005;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className={className}>
             <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    aspectRatio: 1,
                }}
            />
        </div>
    );
}
