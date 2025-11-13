import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import iemLogo from "@/assets/iem-logo.png";
import uemLogo from "@/assets/uem-logo.png";
import { iemLogoUrl, uemLogoUrl } from "@/config/logoSources";

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Left IEM logo (transparent) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/" className="flex-shrink-0 group">
              <img
                src={iemLogoUrl ?? iemLogo}
                alt="IEM Logo"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (img.src !== iemLogo) img.src = iemLogo;
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation - centered glass container */}
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
                      <button className={`px-2 py-1 text-[10px] xl:text-[11px] font-semibold rounded-lg transition-all duration-300 whitespace-nowrap ${
                         activeDropdown === item.name || location.pathname.includes(item.path)
                           ? "text-primary bg-primary/10"
                           : "text-foreground hover:text-primary hover:bg-primary/5"
                       }`}>
                        <span className="flex items-center gap-1">
                          <span className="hidden xl:inline">{item.name}</span>
                          <span className="xl:hidden">{item.name}</span>
                          <svg 
                            className={`w-3 h-3 transition-transform duration-300 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      <div className={`absolute left-0 mt-2 w-56 transition-all duration-300 transform origin-top z-50 ${
                        activeDropdown === item.name 
                          ? "opacity-100 scale-100 translate-y-0" 
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      }`} 
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="bg-card backdrop-blur-md border border-border/80 rounded-xl shadow-2xl overflow-hidden">
                          <div className="p-1">
                            {item.subItems.map((subItem, index) =>
                              subItem.external ? (
                                <a
                                  key={subItem.name}
                                  href={subItem.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between px-3 py-2.5 text-sm rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:text-primary transition-all duration-200 group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span>{subItem.name}</span>
                                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              ) : (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-3 py-2.5 text-sm rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:text-primary transition-all duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.name}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-2 py-1 text-[10px] xl:text-[11px] font-semibold rounded-lg transition-all duration-300 relative group whitespace-nowrap ${
                        location.pathname === item.path
                          ? "text-primary bg-primary/10 shadow-sm"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      <span className="hidden xl:inline">{item.name}</span>
                      <span className="xl:hidden">{item.name}</span>
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                        location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}
              </div>
            </div>
          </div>

          {/* Right UEM logo (transparent) */}
          <Link to="/" className="hidden lg:flex flex-shrink-0 group ml-auto">
            <img
              src={uemLogoUrl ?? uemLogo}
              alt="UEM Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.src !== uemLogo) img.src = uemLogo;
              }}
            />
          </Link>


          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
              }`} />
              <X className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
              }`} />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen 
          ? "max-h-[calc(100vh-5rem)] opacity-100" 
          : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="bg-card/95 backdrop-blur-xl border-t border-border/60">
          <div className="px-6 py-6 space-y-1 max-h-[calc(100vh-9rem)] overflow-y-auto overscroll-contain">
            {navItems.map((item, index) => (
              <div 
                key={item.name} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                {item.subItems ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-3 font-semibold text-foreground cursor-pointer hover:text-primary transition-colors duration-200 list-none">
                      <span>{item.name}</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="pl-4 space-y-1 pb-3">
                      {item.subItems.map((subItem) =>
                        subItem.external ? (
                          <a
                            key={subItem.name}
                            href={subItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-3 transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span>{subItem.name}</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
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
