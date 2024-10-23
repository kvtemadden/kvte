import { useEffect, useRef, useState } from "react";

export const Eyes = () => {
  const eye = useRef<HTMLDivElement>(null);

  const eyePosition = (e: MouseEvent) => {
    if (!eye.current) return;

    const x = eye.current.offsetLeft + eye.current.offsetWidth / 2;
    const y = eye.current.offsetTop + eye.current.offsetHeight / 2;
    const rad = Math.atan2(e.clientX - x, e.clientY - y);
    const rot = rad * (180 / Math.PI) * -1 + 210;
    eye.current.style.transform = `rotate(${rot}deg)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", eyePosition);

    return () => {
      document.removeEventListener("mousemove", eyePosition);
    };
  }, []);

  return (
    <div
      ref={eye}
      className="bg-white rounded-full h-10 w-10 relative after:absolute after:rounded-full after:bg-black after:border-white after:border after:top-1 after:left-1 after:h-4 after:w-4"
    ></div>
  );
};
