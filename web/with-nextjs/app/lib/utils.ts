import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const withMinimumLoadingTime = async (
  asyncFunc: () => Promise<void>,
  minLoadingTime: number,
  setLoadingState: (state: boolean) => void
) => {
  setLoadingState(true);
  const startTime = Date.now();

  await asyncFunc();

  const elapsedTime = Date.now() - startTime;
  const remainingTime = minLoadingTime - elapsedTime;

  if (remainingTime > 0) {
    setTimeout(() => {
      setLoadingState(false);
    }, remainingTime);
  } else {
    setLoadingState(false);
  }
};
