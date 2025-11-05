import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import iemLogo from "@/assets/iem-logo.png";
import uemLogo from "@/assets/uem-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Call for Papers",
    path: "/call-for-papers",
  },
  {
    name: "Publication",
    path: "/publication",
    subItems: [
      { name: "Conference Proceedings", path: "/publication/proceedings" },
      { name: "Journal Publication", path: "/publication/journal" },
      { name: "Paper Structure", path: "/publication/structure" },
      { name: "Style of Referencing", path: "/publication/referencing" },
    ],
  },
  {
    name: "Committee",
    path: "/committee",
    subItems: [
      { name: "Organizing Committee", path: "/committee/organizing" },
      { name: "Advisory Committee", path: "/committee/advisory" },
      { name: "Technical Committee", path: "/committee/technical" },
      { name: "Volume Editors", path: "/committee/editors" },
    ],
  },
  { name: "Submission", path: "/submission" },
  { name: "Registration", path: "/registration" },
  { name: "Keynote Speakers", path: "/keynote-speakers" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  {
    name: "Sister Conference",
    path: "#",
    subItems: [
      { name: "IRTM", path: "https://irtm.smartsociety.org", external: true },
      { name: "IEMTRONICS", path: "https://iemtronics.org", external: true },
    ],
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* IEM Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://www.facultyplus.com/wp-content/uploads/2024/11/IEM-Logo-2019-4-2-1024x714.png"
              alt="IEM Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {item.name}
                    </button>
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                      {item.subItems.map((subItem) =>
                        subItem.external ? (
                          <a
                            key={subItem.name}
                            href={subItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        )
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* UEM Logo */}
          <Link to="/" className="flex-shrink-0 hidden lg:block">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/04/UEM-Logo.png"
              alt="UEM Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <>
                    <div className="font-medium text-foreground py-2">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) =>
                        subItem.external ? (
                          <a
                            key={subItem.name}
                            href={subItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 text-sm text-muted-foreground hover:text-primary"
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        )
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-2 font-medium ${
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
