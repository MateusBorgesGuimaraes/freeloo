import { useTheme } from "@/contexts/theme-context";
import ToggleTheme from "../ui/ToggleTheme";

export default function Header() {
  const { theme } = useTheme();
  const links = [
    { label: "login", link: "/login" },
    { label: "about", link: "/" },
    { label: "contact", link: "/" },
  ];

  return (
    <header className="bg-background border-b border-dashed border-stone-200 dark:border-stone-800 p-4">
      <nav className="wrapper">
        <nav className="flex items-center justify-between">
          <div>
            <a href="/">
              <img
                className="h-6"
                src={theme === "light" ? "/logo-ligth.svg" : "/logo-dark.svg"}
              />
            </a>
          </div>
          <div className="flex items-center justify-between gap-12 font-semibold">
            <ul className="flex items-center gap-5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:text-primary-hover transition"
                    href={link.link}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a
                className="py-2 px-4 bg-primary hover:bg-primary-hover rounded-md duration-300 dark:text-stone-800"
                href="/"
              >
                Get Start
              </a>
              <ToggleTheme />
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
}
