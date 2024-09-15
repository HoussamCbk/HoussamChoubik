"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  return (
    <div
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName
      )}
    >
      <div className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2">
        <div
          style={{
            transform: transform,
          }}
          // remove  bg-black
          className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-blue-700/[1.5] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
    </div>
  );
};
