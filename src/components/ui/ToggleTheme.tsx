import { useTheme } from "@/contexts/theme-context";
import { MoonIcon, SunIcon } from "lucide-react";
export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="py-1 px-1.5 cursor-pointer rounded-md  border border-stone-600
      text-stone-700 hover:border-primary hover:text-primary
      dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white
      transition"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
}
