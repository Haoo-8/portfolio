import { useState, useEffect } from "react";

interface UseTypingEffectOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
  deleteSpeed?: number;
  pauseTime?: number;
}

export const UseTypingEffectOptions = (
  texts: string[],
  options: UseTypingEffectOptions = {}
) => {
  const {
    speed = 100,
    delay = 1000,
    loop = true,
    deleteSpeed = 50,
    pauseTime = 2000,
  } = options;
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentIndex];
    if (isTyping) {
        // Đang gõ
        if (displayText.length < currentText.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, displayText.length +1));
            }, speed);
        } else {
            // Hoàn thành gõ, pause một chút
            timeout = setTimeout(() => {
                if (loop || currentIndex < texts.length -1) {
                    setIsTyping(false);
                } else {
                    setIsComplete(true);
                }
            }, pauseTime);
        } 
    } else {
        // Đang xóa
        if (displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(displayText.slice(0, -1));
            }, deleteSpeed);
        } else {
            // Chuyển sang text tiếp theo
            setCurrentIndex((prev) => (prev +1) % texts.length);
            setIsTyping(true);
            timeout = setTimeout(() => {}, delay);
        }
    }
     return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isTyping, texts, speed, delay, loop, deleteSpeed, pauseTime]);
  const restart = () => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(true);
    setIsComplete(false);
  };

  return {
    displayText,
    isTyping,
    isComplete,
    restart,
    currentIndex
  };
};
