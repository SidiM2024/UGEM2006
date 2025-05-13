
import { useLanguage } from "@/providers/LanguageProvider";
import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  textArray: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypewriterEffect = ({
  textArray,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
  className = "",
}: TypewriterEffectProps) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (!textArray.length) return;
    
    const currentText = textArray[textIndex];
    
    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      } else {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (text === currentText) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setText(currentText.slice(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, textIndex, isWaiting, textArray, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <div className={`typewriter-effect ${className}`}>
      <span className="text-ugem-yellow">{text}</span>
      <span className="cursor animate-pulse">|</span>
    </div>
  );
};

export default TypewriterEffect;
