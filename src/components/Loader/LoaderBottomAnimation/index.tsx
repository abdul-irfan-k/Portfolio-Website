"use client";
import React, { FC, useEffect, useRef } from "react";

interface LoaderBottomAnimationProps {
  isExit?: boolean;
}
const LoaderBottomAnimation: FC<LoaderBottomAnimationProps> = ({ isExit }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (isExit && pathRef.current != null && typeof window != "undefined")
      //@ts-ignore
      pathRef.current.setAttribute(
        "d",
        `M0 0 L0 0 Q ${window.innerWidth / 2} 0 ${window.innerWidth} 0`
      );
  }, [isExit]);

  if (typeof window == "undefined") return;
  return (
    <div className="relative w-full h-full translate-y-[100%]">
      <div className="relative h-24 w-full  fill-black  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={"full"}
          width={"full"}
          className="w-full"
        >
          <path
            d={`M0 0 L0 0 Q ${window.innerWidth / 2} 300 ${
              window.innerWidth
            } 0`}
            ref={pathRef}
            style={{ transition: "all 0.7s ease-out" }}
          />
        </svg>
      </div>

      {/* <div className="top-0 absolute w-full h-full z-20 overlary"></div> */}
    </div>
  );
};

export default LoaderBottomAnimation;
