import { useState, useEffect } from 'react';

export const useIsMobile = (breakpoint: number = 768) => {
    const [isMobile, setIsMobile] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        return window.innerWidth < breakpoint;
    });

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        const handleResize = () => {
            requestAnimationFrame(checkIsMobile);
        };

        window.addEventListener('resize', handleResize);

        // Kiểm tra orientation change cho mobile
        window.addEventListener('orientationchange', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, [breakpoint]);

    return isMobile;
};

