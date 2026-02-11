"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  spanclassName?: string;
  iconclassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
  iconPosition?: "before" | "after";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "white"
    | "transparent"
    | "semitransparent";
  href?: string;
  disabled?: boolean;
};

export default function Button({
  text,
  icon,
  onClick,
  className,
  spanclassName,
  size = "sm",
  iconPosition = "after",
  iconclassName,
  color = "primary",
  href,
  disabled = false,
}: ButtonProps) {
  const colorMap = {
    primary:
      "bg-primary hover:bg-secondary border border-primary hover:text-white text-white",
    secondary:
      "bg-secondary hover:bg-primary border border-secondary hover:text-white text-white",
    white:
      "bg-white hover:bg-primary border border-white text-primary hover:border-primary hover:text-white hover:shadow-[0_0_30px_4px_theme('colors.secondary')] transition-shadow duration-300",
    semitransparent:
      "bg-white/8 hover:bg-white border border-white/22 hover:text-primary text-white",
    transparent:
      "bg-transparent hover:bg-white border border-white hover:text-primary text-white",
    danger: "bg-red text-white",
  };
  const sizeMap = {
    sm: "p-2",
    md: "px-5 py-4 text-lg",
    lg: "px-7 py-4 text-xl font-medium",
    xl: "px-9 py-4 text-2xl",
  };

  const classes = cn(
    "inline-flex cursor-pointer items-center gap-3 rounded-full group font-medium transition-colors",
    colorMap[color],
    sizeMap[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  const spanClasses = cn("block", spanclassName);
  const iconClasses = cn(
    "min-w-8 min-h-8 flex items-center justify-center rounded-full bg-white",
    iconclassName
  );

  // Utility to render content with icon positioning
  const renderContent = () => (
    <>
      {icon && iconPosition === "before" && (
        <span className={iconClasses}>{icon}</span>
      )}
      <span className={spanClasses}>{text}</span>
      {icon && iconPosition === "after" && (
        <span className={iconClasses}>{icon}</span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {renderContent()}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {renderContent()}
    </button>
  );
}
