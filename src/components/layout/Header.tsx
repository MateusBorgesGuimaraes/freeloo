import { useTheme } from "@/contexts/theme-context";
import ToggleTheme from "../ui/ToggleTheme";
import ButtonLink from "../ui/ButtonLink";

export default function Header() {
  const { theme } = useTheme();
  const links = [
    { label: "login", link: "/" },
    { label: "about", link: "/" },
    { label: "contact", link: "/" },
  ];

  return (
    <header className="bg-background border-b border-dashed border-border p-4">
      <nav className="wrapper">
        <nav className="flex items-center justify-between">
          <div>
            <img
              className="h-6"
              src={theme === "light" ? "/logo-ligth.svg" : "/logo-dark.svg"}
            />
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
              <ButtonLink href="/">Get Start</ButtonLink>
              <ToggleTheme />
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
}
