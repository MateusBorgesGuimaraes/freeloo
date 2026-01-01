import { useTheme } from "@/contexts/theme-context";
import { useAuthStore } from "@/stores/auth.store";
import ToggleTheme from "../ui/ToggleTheme";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "@/api/auth";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export default function Header() {
  const { theme } = useTheme();
  const { user, isAuthenticated, clearUser } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: "About", link: "/" },
    { label: "Contact", link: "/" },
  ];

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      clearUser();
      navigate({ to: "/login" });
      toast.success("Logout realizado com sucesso");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Erro ao fazer logout");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="bg-background border-b border-dashed border-stone-200 dark:border-stone-800 p-4 relative z-50">
      <nav className="wrapper">
        <div className="flex items-center justify-between">
          <div>
            <a href="/">
              <img
                className="h-6"
                src={theme === "light" ? "/logo-ligth.svg" : "/logo-dark.svg"}
                alt="Logo"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center justify-between gap-12 font-semibold">
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
              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="default"
                      className="flex items-center gap-1"
                    >
                      <User className="h-4 w-4" />
                      <span className="max-w-37.5 truncate">{user.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 z-100 bg-white dark:bg-black"
                  >
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer text-red-600 focus:text-red-600"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <a
                    className="py-2 px-4 hover:underline transition"
                    href="/login"
                  >
                    Login
                  </a>
                  <a
                    className="py-2 px-4 bg-primary hover:bg-primary-hover rounded-md duration-300 dark:text-stone-800"
                    href="/register"
                  >
                    Get Started
                  </a>
                </>
              )}
              <ToggleTheme />
            </div>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ToggleTheme />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-md transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-dashed border-stone-200 dark:border-stone-800 pt-4">
            <ul className="flex flex-col gap-4 font-semibold">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    className="block hover:text-primary-hover transition"
                    href={link.link}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-dashed border-stone-200 dark:border-stone-800 flex flex-col gap-3">
              {isAuthenticated && user ? (
                <>
                  <div className="flex items-center gap-2 py-2 px-4 bg-stone-100 dark:bg-stone-800 rounded-md">
                    <User className="h-4 w-4" />
                    <span className="font-semibold truncate">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 py-2 px-4 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-md transition font-semibold"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <a
                    className="py-2 px-4 text-center border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition font-semibold"
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </a>
                  <a
                    className="py-2 px-4 text-center bg-primary hover:bg-primary-hover rounded-md duration-300 dark:text-stone-800 font-semibold"
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
