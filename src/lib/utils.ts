import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/AnuskaDasgupta-Portfolio';
  
  // Avoid double prefixing if path already starts with basePath
  if (path.startsWith(basePath)) {
    return path;
  }
  
  return `${basePath}${path}`;
}
