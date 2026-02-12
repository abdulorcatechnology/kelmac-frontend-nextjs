"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CounterProps = {
  number: number;
  icon?: ReactNode;
  afterText?: string;
  label: string;
  subLabel?: ReactNode; // preferred prop
  sublabel?: ReactNode; // legacy fallback
  duration?: number;
  className?: string;
  headingClassName?: string;
  labelClassName?: string;
  subLabelClassName?: string; // preferred className prop
  sublabelClassName?: string; // legacy fallback
};

export default function Counter(props: CounterProps) {
  const {
    number,
    icon,
    afterText,
    label,
    subLabel, // preferred
    sublabel, // legacy
    duration = 2000,
    className,
    headingClassName = "",
    labelClassName = "",
    subLabelClassName = "",
    sublabelClassName = "",
  } = props;

  // prefer new prop, fallback to legacy
  const displayedSubLabel = subLabel ?? sublabel;
  const displayedSubLabelClass = subLabelClassName ?? sublabelClassName ?? "";

  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const end = number;
    const increment = end / (duration / 16); // ~60fps
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  };

  const formattedCount = new Intl.NumberFormat("en-US").format(count);

  return (
    <div
      ref={ref}
      className={cn("flex flex-col items-center text-center", className)}
    >
      <div className="relative">
        <h2
          className={cn(
            "text-4xl md:text-6xl lg:text-8xl font-hedvig text-primary text-center",
            headingClassName,
          )}
        >
          {formattedCount}
          {afterText && (
            <span className="text-[80%] text-secondary">{afterText}</span>
          )}
        </h2>

        {icon && (
          <span className="text-secondary absolute -top-2 -right-10">
            {icon}
          </span>
        )}
      </div>

      <p
        className={cn("mt-2 text-primary font-medium text-xl", labelClassName)}
      >
        {label}
      </p>

      {displayedSubLabel && (
        // default white text; additional/override classes can be passed via subLabelClassName or sublabelClassName
        <p className={cn("mt-1 text-sm text-white", displayedSubLabelClass)}>
          {displayedSubLabel}
        </p>
      )}
    </div>
  );
}
