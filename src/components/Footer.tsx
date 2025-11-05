import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-cyan-50 via-white to-sky-50 text-slate-700 border-t border-cyan-100">
      {/* Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-700">
              ICEBM 2026
            </h3>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed">
              <strong>
                International Conference on Economics, Business, and Management
              </strong>
              <br />
              Organized by the Institute of Engineering & Management, Kolkata
            </p>
            <p className="text-sm text-slate-500">
              Join global thought leaders, researchers, and industry experts to
              explore advancements shaping the future of business and economics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-700 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Call for Papers", path: "/call-for-papers" },
                { name: "Submission", path: "/submission" },
                { name: "Registration", path: "/registration" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="relative inline-block text-slate-600 hover:text-cyan-600 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-gradient-to-r from-cyan-400 to-sky-500 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-700 mb-5">
              Contact Information
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-cyan-700" />
                </div>
                <span>
                  Institute of Engineering & Management,
                  <br />
                  Salt Lake City, Sector V, Kolkata, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-cyan-700" />
                </div>
                <a
                  href="mailto:info@icebm2026.org"
                  className="hover:text-cyan-600 transition-colors"
                >
                  info@icebm2026.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-cyan-700" />
                </div>
                <span>+91 XX XXXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-cyan-200 my-8"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          {[
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Facebook, href: "#", label: "Facebook" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="group relative"
            >
              <div className="p-3 rounded-full bg-cyan-100 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-sky-500 transition-all duration-300 shadow-sm">
                <Icon className="h-5 w-5 text-cyan-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-70 bg-cyan-400/50 transition-all duration-300"></div>
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-slate-500">
          <p>
            © 2026 ICEBM | Organized by Institute of Engineering & Management,
            Kolkata
          </p>
          <p className="mt-1">
            In collaboration with{" "}
            <span className="text-cyan-600 font-medium">Smart Society</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
