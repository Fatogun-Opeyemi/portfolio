import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { useScroll } from "@/hooks/useScroll";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isScrolled = useScroll();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
          <div 
            className="text-xl font-bold text-primary cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => handleNavClick("#home")}
            data-testid="logo"
          >
            Opeyemi
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              data-testid="theme-toggle"
            >
              <Sun className="h-5 w-5 text-primary transition-transform duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 text-primary transition-transform duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu Button - Only visible on mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle mobile menu"
              data-testid="mobile-menu-button"
            >
              <X className={`absolute h-5 w-5 text-primary transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-0' : 'rotate-180 scale-0'}`} />
              <Menu className={`h-5 w-5 text-primary transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180 scale-0' : 'rotate-0'}`} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Only visible on mobile when open */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="bg-background/95 backdrop-blur-md border-t border-border px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left justify-start text-base py-3"
                data-testid={`mobile-nav-${item.label.toLowerCase()}`}>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
    </nav>
  );
}
