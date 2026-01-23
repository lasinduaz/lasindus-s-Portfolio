import { useState, useEffect, useRef } from "react";

interface TerminalLine {
  type: "command" | "output" | "prompt";
  text: string;
  delay?: number;
}

interface TerminalAnimationProps {
  lines: TerminalLine[];
  onComplete?: () => void;
  typingSpeed?: number;
}

export const TerminalAnimation = ({
  lines,
  onComplete,
  typingSpeed = 50,
}: TerminalAnimationProps) => {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; type: string }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    // If reduced motion is preferred, show all content immediately
    if (prefersReducedMotion) {
      setDisplayedLines(lines.map((line) => ({ text: line.text, type: line.type })));
      setIsTyping(false);
      onComplete?.();
      return;
    }

    if (currentLineIndex >= lines.length) {
      setIsTyping(false);
      onComplete?.();
      return;
    }

    const currentLine = lines[currentLineIndex];
    
    // Handle delay before starting line
    if (currentCharIndex === 0 && currentLine.delay) {
      const delayTimer = setTimeout(() => {
        setCurrentCharIndex(1);
      }, currentLine.delay);
      return () => clearTimeout(delayTimer);
    }

    // For output lines, show immediately
    if (currentLine.type === "output") {
      setDisplayedLines((prev) => [
        ...prev,
        { text: currentLine.text, type: currentLine.type },
      ]);
      setCurrentLineIndex((prev) => prev + 1);
      setCurrentCharIndex(0);
      return;
    }

    // Type character by character for command lines
    if (currentCharIndex <= currentLine.text.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines.length === currentLineIndex) {
            newLines.push({ text: "", type: currentLine.type });
          }
          newLines[currentLineIndex] = {
            text: currentLine.text.slice(0, currentCharIndex),
            type: currentLine.type,
          };
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed + Math.random() * 30);

      return () => clearTimeout(timer);
    } else {
      // Move to next line
      const nextLineTimer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 300);

      return () => clearTimeout(nextLineTimer);
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, prefersReducedMotion, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    if (!isTyping) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [isTyping]);

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div
      ref={containerRef}
      className="terminal-window p-6 min-h-[300px] max-h-[400px] overflow-y-auto relative scanlines"
    >
      <div className="terminal-header absolute top-0 left-0 right-0">
        <div className="terminal-dot bg-destructive" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-primary" />
        <span className="ml-4 text-xs text-muted-foreground">bash — 80x24</span>
      </div>

      <div className="mt-8 space-y-1">
        {displayedLines.map((line, index) => (
          <div key={index} className="font-mono text-sm">
            {line.type === "command" && (
              <span>
                <span className="text-secondary">lasindu@lasinduspc</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">~</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">{line.text}</span>
              </span>
            )}
            {line.type === "output" && (
              <span className="text-muted-foreground">{line.text}</span>
            )}
            {line.type === "prompt" && (
              <span className="text-primary glow-text">{line.text}</span>
            )}
          </div>
        ))}

        {/* Cursor */}
        {isTyping && (
          <span
            className={`inline-block w-2 h-4 bg-primary ml-1 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
};
