import { useEffect, useState } from "react";

export const useSlider = (length: number, interval = 8000) => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isTransitioning) {
                setCurrent(prev => (prev + 1) % length);
            }
        }, interval);
        return () => clearInterval(timer);
    }, [isTransitioning, length, interval]);

    const goTo = (index: number) => {
        if (!isTransitioning && index !== current) {
            setIsTransitioning(true);
            setCurrent(index);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const next = () => goTo((current + 1) % length);
    const prev = () => goTo((current - 1 + length) % length);
    
    return { current, isTransitioning, next, prev, goTo};
}