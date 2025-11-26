import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import iemLogo from "@/assets/cropped-eirtmlogo.png";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Call for Papers",
    path: "/call-for-papers",
  },
    // ⭐ BACK TO EIRTM added
  { name: "Back to EIRTM", path: "https://eirtm2026congress.smartsociety.org/", external: true },

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-lg border-b border-border">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center h-16 relative">

          {/* IEM Logo */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/" className="flex-shrink-0 group">
              <img
                src={iemLogo ?? iemLogo}
                alt="IEM Logo"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (img.src !== iemLogo) img.src = iemLogo;
                }}
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 z-10">
            <div className="relative">
              <div className="absolute -left-8 top-0 bottom-0 w-8 bg-gradient-to-l from-white/70 to-transparent pointer-events-none"></div>

              <div className="flex items-center justify-center gap-0 rounded-full bg-white/70 backdrop-blur-md shadow-md border border-white/40 px-2 py-1">

                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                  >
                    {item.subItems ? (
                      <>
                        <button
                          className={`px-2 py-1 text-[10px] xl:text-[11px] font-semibold rounded-lg transition-all duration-300 whitespace-nowrap ${
                            activeDropdown === item.name || location.pathname.includes(item.path)
                              ? "text-primary bg-primary/10"
                              : "text-foreground hover:text-primary hover:bg-primary/5"
                          }`}
                        >
                          {item.name}
                        </button>

                        {/* Dropdown */}
                        <div
                          className={`absolute left-0 mt-2 w-56 transition-all duration-300 z-50 ${
                            activeDropdown === item.name
                              ? "opacity-100 scale-100 translate-y-0"
                              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                          }`}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="bg-card backdrop-blur-md border border-border/80 rounded-xl shadow-2xl overflow-hidden p-1">
                            {item.subItems.map((subItem) =>
                              subItem.external ? (
                                <a
                                  key={subItem.name}
                                  href={subItem.path} // OPEN IN SAME TAB
                                  className="block px-3 py-2.5 text-sm rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:text-primary transition-all duration-200"
                                >
                                  {subItem.name}
                                </a>
                              ) : (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-3 py-2.5 text-sm rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:text-primary transition-all duration-200"
                                >
                                  {subItem.name}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </>
                    ) : item.external ? (
                      <a
                        href={item.path} // OPEN IN SAME TAB
                        className="px-2 py-1 text-[10px] xl:text-[11px] font-semibold rounded-lg transition-all duration-300 whitespace-nowrap text-foreground hover:text-primary hover:bg-primary/5"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`px-2 py-1 text-[10px] xl:text-[11px] font-semibold rounded-lg transition-all duration-300 whitespace-nowrap ${
                          location.pathname === item.path
                            ? "text-primary bg-primary/10 shadow-sm"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`} />
              <X className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`} />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="bg-card/95 backdrop-blur-xl border-t border-border/60">
          <div className="px-6 py-6 space-y-1 max-h-[calc(100vh-9rem)] overflow-y-auto">

            {navItems.map((item, index) => (
              <div key={item.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}>
                {item.subItems ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-3 font-semibold text-foreground cursor-pointer hover:text-primary transition-colors list-none">
                      {item.name}
                    </summary>
                    <div className="pl-4 space-y-1 pb-3">
                      {item.subItems.map((subItem) =>
                        subItem.external ? (
                          <a
                            key={subItem.name}
                            href={subItem.path} // OPEN IN SAME TAB
                            className="block py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-3 transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-3 transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        )
                      )}
                    </div>
                  </details>
                ) : item.external ? (
                  <a
                    href={item.path} // OPEN IN SAME TAB
                    className="block py-3 font-semibold rounded-lg px-3 transition-all duration-200 text-foreground hover:text-primary hover:bg-primary/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-3 font-semibold rounded-lg px-3 transition-all duration-200 ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
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
      </div>
    </nav>
  );
};
