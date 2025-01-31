"use client";

import Lottie from 'react-lottie';
import desk from '../../public/desk.json';

export default function LottieFrame() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: desk,
        isClickToPauseDisabled: true,
    };

    return <div style={{maxHeight: '800px'}} className='flex items-center justify-center'>
        <Lottie
            options={defaultOptions}
            height={500}
            width={500}
            isClickToPauseDisabled={true}
        />
    </div>
}