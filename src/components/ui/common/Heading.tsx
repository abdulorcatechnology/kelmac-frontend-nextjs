import React from "react";
import { cn } from "@/lib/utils";

export type HeadingProps = {
  className?: string;
  wrapperClassName?: string;
  subHeading?: string;
  heading?: React.ReactNode;
  subHeadingClassName?: string;
  headingClassName?: string;
  dotColor?: string;
};

export function Heading({
  className = "",
  wrapperClassName = "",
  subHeading,
  heading = "Delivering sustainable, societal impact & process based solutions",
  subHeadingClassName = "",
  headingClassName = "",
  dotColor,
}: HeadingProps) {
  const classes = cn("text-center mb-10", className);
  const wrapperClasses = cn(
    "flex items-center justify-center mb-4",
    wrapperClassName,
  );
  const subHeadingClasses = cn(
    "sub-heading flex items-center gap-2",
    subHeadingClassName,
  );
  const headingClasses = cn("main-heading", headingClassName);

  return (
    <div className={classes}>
      {subHeading && (
        <div className={wrapperClasses}>
          <h4 className={subHeadingClasses}>
            {dotColor && (
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: dotColor }}
              ></span>
            )}
            <span className={dotColor ? "ml-2" : ""}>{subHeading}</span>
          </h4>
        </div>
      )}
      <h2 className={headingClasses}>{heading}</h2>
    </div>
  );
}
