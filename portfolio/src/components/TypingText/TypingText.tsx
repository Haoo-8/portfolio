import { UseTypingEffectOptions } from "../../hooks/useTypingEffect";

interface TypingTextProps {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
    loop?: boolean;
}

export default function TypingText(props: TypingTextProps){
    const {displayText} = UseTypingEffectOptions(props.texts, props);

    return (
        <span>
            {displayText}
            <span className="animation-blink">|</span>
        </span>
    );
}