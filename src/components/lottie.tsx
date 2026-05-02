"use client";

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import desk from '../../public/desk.json';

export default function LottieFrame() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const animation = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: desk,
        });

        return () => {
            animation.destroy();
        };
    }, []);

    return <div style={{maxHeight: '800px'}} className='flex items-center justify-center'>
        <div
            ref={containerRef}
            style={{cursor: 'default'}}
            aria-hidden="true"
            className="h-[500px] w-[500px]"
        />
    </div>
}
