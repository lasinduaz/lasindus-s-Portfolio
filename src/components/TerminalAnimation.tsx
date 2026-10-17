import { useState, useEffect, useRef } from "react";

type TerminalLine =
  | { type: "output"; text: string; delay?: number }
  | { type: "command"; user: string; path: string; root: boolean; text: string; delay?: number };

interface TerminalAnimationProps {
  onComplete?: () => void;
}

interface DisplayedLine {
  text: string;
  type: TerminalLine["type"];
  user?: string;
  root?: boolean;
}

const terminalLines: TerminalLine[] = [
  { type: "output", text: "Last login: Fri Sep 04 2026 on pts/0", delay: 300 },
  { type: "command", user: "lasindu", path: "~", root: false, text: "sudo -i", delay: 200 },
  { type: "output", text: "[sudo] password for lasindu: ********", delay: 400 },
  { type: "command", user: "root", path: "~", root: true, text: "whoami", delay: 150 },
  { type: "output", text: "Lasindu Samarajeewa", delay: 400 },
  { type: "command", user: "root", path: "~", root: true, text: "systemctl status lasindu", delay: 200 },
  { type: "output", text: "● lasindu.service - DevOps Engineer", delay: 60 },
  { type: "output", text: "     Loaded: loaded (/etc/systemd/system/lasindu.service)", delay: 60 },
  { type: "output", text: "     Active: active (running)", delay: 60 },
  { type: "output", text: "     Tasks: building system", delay: 60 },
  { type: "output", text: "     Memory: learning continuously", delay: 500 },
  { type: "command", user: "root", path: "~", root: true, text: "cat /etc/lasindu.conf", delay: 200 },
  { type: "output", text: "ROLE=\"DevOps Engineer\"", delay: 60 },
  { type: "output", text: "LOCATION=\"Colombo, LK\"", delay: 60 },
  { type: "output", text: "EDUCATION=\"BSc (Hons) Software Engineering @ SLIIT\"", delay: 60 },
  { type: "output", text: "GRADUATION=\"Dec 2027\"", delay: 60 },
  { type: "output", text: "INTERESTS=(\"Cloud\" \"Linux\" \"Automation\" \"Infrastructure\")", delay: 500 },
  { type: "command", user: "root", path: "~", root: true, text: "ls -lah ~/portfolio", delay: 200 },
  { type: "output", text: "drwxr-xr-x  projects/", delay: 60 },
  { type: "output", text: "-rw-r--r--  resume.pdf", delay: 60 },
  { type: "output", text: "-rw-r--r--  contact.txt", delay: 500 },
  { type: "command", user: "root", path: "~", root: true, text: "./explore.sh", delay: 0 },
];

export const TerminalAnimation = ({
  onComplete,
}: TerminalAnimationProps) => {
  const [displayedLines, setDisplayedLines] = useState<DisplayedLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    // If reduced motion is preferred, show all content immediately
    if (prefersReducedMotion) {
      setDisplayedLines(
        terminalLines.map((line) => ({
          text: line.text,
          type: line.type,
          user: line.type === "command" ? line.user : undefined,
          root: line.type === "command" ? line.root : undefined,
        })),
      );
      setIsTyping(false);
      onComplete?.();
      return;
    }

    if (currentLineIndex >= terminalLines.length) {
      setIsTyping(false);
      onComplete?.();
      return;
    }

    const currentLine = terminalLines[currentLineIndex];
    
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
            newLines.push({
              text: "",
              type: currentLine.type,
              user: currentLine.user,
              root: currentLine.root,
            });
          }
          newLines[currentLineIndex] = {
            text: currentLine.text.slice(0, currentCharIndex),
            type: currentLine.type,
            user: currentLine.user,
            root: currentLine.root,
          };
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 28 + Math.random() * 55);

      return () => clearTimeout(timer);
    } else {
      // Move to next line
      const nextLineTimer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 300);

      return () => clearTimeout(nextLineTimer);
    }
  }, [currentLineIndex, currentCharIndex, prefersReducedMotion, onComplete]);

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
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div
      className="terminal-kali relative mx-auto flex h-[560px] w-full max-w-[860px] flex-col overflow-hidden"
    >
      <div className="terminal-header shrink-0">
        <div className="terminal-dot bg-[#ff5f56]" />
        <div className="terminal-dot bg-[#ffbd2e]" />
        <div className="terminal-dot bg-[#27c93f]" />
        <span className="ml-2 text-xs text-[#808080]">lasindu@kali: ~</span>
      </div>

      <div ref={scrollRef} className="terminal-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-[18px]">
        {displayedLines.map((line, index) => (
          <div key={index} className="font-mono text-[13.5px] leading-[1.65] break-words">
            {line.type === "command" && (
              <span>
                <span className="text-[#eaeaea]">┌──(</span>
                <span className="font-semibold text-[#4ade80]">{line.user}</span>
                <span className="text-[#eaeaea]">㉿</span>
                <span className="font-semibold text-[#4ade80]">kali</span>
                <span className="text-[#eaeaea]">)-[</span>
                <span className="font-semibold text-[#4ea6f5]">~</span>
                <span className="text-[#eaeaea]">]</span>
                <br />
                <span className="text-[#eaeaea]">└─</span>
                <span className="font-semibold text-[#ff5f5f]">{line.root ? "#" : "$"}</span>
                <span className="text-[#eaeaea]"> </span>
                <span className="text-[#d4d4d4]">{line.text}</span>
              </span>
            )}
            {line.type === "output" && (
              <span className="whitespace-pre-wrap text-[#808080]">
                {line.text}
              </span>
            )}
            {line.type === "prompt" && (
              <span className="text-primary glow-text">{line.text}</span>
            )}
          </div>
        ))}

        {/* Cursor */}
        {isTyping && (
          <span
            className={`ml-1 inline-block h-[15px] w-2 bg-[#d4d4d4] align-text-bottom ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
    </div>
  );
};
