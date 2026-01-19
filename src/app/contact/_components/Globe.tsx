'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

// https://github.com/shuding/cobe

export default function Globe () {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 8.2,
            baseColor: [0.337, 0.514, 0.349],
            // baseColor: [0.86, 1.31, 0.89],
            // {"baseColor":{"r":86,"g":131,"b":89}}
            // baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            // {"markerColor":{"r":255,"g":255,"b":255}}
            glowColor: [0.059, 0.141, 0.051],
            // glowColor: [0, 0, 0],
            // glowColor: [1, 1, 1],
            // {"glowColor":{"r":15,"g":36,"b":13}}
            markers: [],
            onRender: state => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.003;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: 600,
                height: 600,
                maxWidth: '100%',
                aspectRatio: 1,
            }}
        />
    );
}
