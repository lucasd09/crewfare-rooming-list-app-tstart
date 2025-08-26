import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dateFormat = (dateString: string) => {
  const [yyyy, mm, dd] = dateString.split("-").map(Number);
  const date = new Date(yyyy, mm - 1, dd);

  const day = date.toLocaleString("default", { day: "numeric" });
  const month = date.toLocaleString("default", { month: "short" });

  return { date, day, month, yyyy };
};

export const uppercaseFirstLetter = (str: string) =>
  `${str.substring(0, 1).toUpperCase()}${str.substring(1)}`;
