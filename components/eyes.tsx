import { useEffect, useRef, useState } from "react";

export const Eyes = () => {
  const eyeL = useRef<HTMLDivElement>(null);
  const eyeR = useRef<HTMLDivElement>(null);

  const eyePosition = (e: MouseEvent) => {
    [eyeL, eyeR].forEach((eye) => {
      if (!eye.current) return;

      const x = eye.current.offsetLeft + eye.current.offsetWidth / 2;
      const y = eye.current.offsetTop + eye.current.offsetHeight / 2;
      const rad = Math.atan2(e.clientX - x, e.clientY - y);
      const rot = rad * (180 / Math.PI) * -1 + 220;
      eye.current.style.transform = `rotate(${rot}deg)`;
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", eyePosition);

    return () => {
      document.removeEventListener("mousemove", eyePosition);
    };
  }, []);

  return (
    <div className="flex flex-row gap-1">
      <div
        ref={eyeL}
        className="bg-white rounded-full h-10 w-10 relative after:border-primary after:absolute after:rounded-full after:bg-black after:border-4 after:top-1.5 after:left-1 after:h-4 after:w-4"
      />
      <div
        ref={eyeR}
        className="bg-white rounded-full h-10 w-10 relative after:border-primary after:absolute after:rounded-full after:bg-black after:border-4 after:top-1.5 after:left-1 after:h-4 after:w-4"
      />
    </div>
  );
};
