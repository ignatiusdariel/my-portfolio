import { useEffect, useRef } from "react";

const DottedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current || !dotRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
      dotRef.current.style.left = `${x}px`;
      dotRef.current.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-dot" ref={dotRef} />
    </>
  );
};

export default DottedCursor;