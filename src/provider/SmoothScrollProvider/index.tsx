"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useFrame } from "@studio-freight/hamo";

export const lenisContext = createContext<Lenis | undefined>(undefined);
export const useLenisContext = () => useContext(lenisContext);

const SmothScrollScrollProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lenis, setLenis] = useState<Lenis | undefined>(undefined);
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      // duration: 5,
      lerp: 0.02,
    });
    lenis.start();
    setLenis(lenis);
    //@ts-ignore
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
  useFrame((time: any) => {
    if (lenis == undefined) return;
    lenis.raf(time);
  });

  return (
    <>
      <lenisContext.Provider value={lenis}>
        {children}
        {/* </ReactLenis> */}
      </lenisContext.Provider>
    </>
  );
};

export default SmothScrollScrollProvider;
