import MagneticAnimation from "@/components/shared/MagneticAnimation";
import Link from "next/link";
import React from "react";

const FooterInfoAndLinkBox = () => {
  return (
    <div className=" py-5 px-16 flex flex-col-reverse md:flex-row ">
      <div className="mt-5 flex justify-between md:mt-0">
        <div className="gap-2 flex flex-col">
          <span className="text-xs text-slate-300">VERSION</span>
          <span className="text-base">2023@edition</span>
        </div>
        <div className="ml-5 gap-2 flex flex-col">
          <span className="text-xs text-slate-300">VERSION</span>
          <span className="text-base">2023@edition</span>
        </div>
      </div>
      <div className="gap-2 flex flex-col md:ml-auto ">
        <span className="text-xs text-slate-300">VERSION</span>
        <div className="gap-5 flex text-base">
          <MagneticAnimation>
            <span className="py-1  ">Github</span>
          </MagneticAnimation>
          <MagneticAnimation>
            <span className="py-1  ">
              <Link href={"https://www.linkedin.com/in/abdulirfan/"}>
                Linked in
              </Link>
            </span>
          </MagneticAnimation>
          <MagneticAnimation>
            <span className="py-1  ">Instagram</span>
          </MagneticAnimation>

          <MagneticAnimation>
            <span className="py-1  ">Twitter</span>
          </MagneticAnimation>
        </div>
      </div>
    </div>
  );
};

export default FooterInfoAndLinkBox;
