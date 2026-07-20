import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-red-600 hover:bg-red-700 text-white"
      : "border border-white text-white hover:bg-white hover:text-black";

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition ${styles}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition ${styles}`}
    >
      {children}
    </button>
  );
}