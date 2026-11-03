import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // ms per character
  delay?: number; // ms initial delay
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 35,
  delay = 150,
  className = '',
  cursorClassName = 'w-[3px] h-[0.88em] bg-secondary-fixed ml-1 inline-block align-baseline animate-pulse',
  showCursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);

    let currentIndex = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          setIsComplete(true);
          if (interval) clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span
          className={cursorClassName}
          style={{ verticalAlign: 'baseline' }}
          aria-hidden="true"
        />
      )}
    </span>
  );
};
