import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, BookOpen, Award, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/image.jpg";

const importantDates = [
  { label: "Full Paper Submission", date: "10th November, 2025" },
  { label: "Acceptance Notification", date: "10th December, 2025" },
  { label: "Registration", date: "20th March, 2026" },
  { label: "Presentation Submission", date: "20th March, 2026" },
  { label: "Conference On", date: "21st – 23rd April, 2026" },
];

const tracks = [
  "Business",
  "Management",
  "Accounting & Banking",
  "Finance",
  "Economics",
  "Marketing & E-Commerce",
];

const Home = () => {
  return (
    <div className="min-h-screen bg-sky-100 text-[#0f172a] font-sans">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center min-h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.50), rgba(255,255,255,0.9)), url(${heroBg})`,
        }}
      >
        <motion.div
          className="max-w-5xl mx-auto px-6 py-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
            International Conference on Economics, Business, and Management
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-bold text-sky-700">
            ICEBM, 2026
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg mb-8 text-[#1e293b]">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-500" />
              <span className="font-medium">21st – 23rd April, 2026</span>
            </div>
            <div className="hidden sm:block text-sky-400 font-light">|</div>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                <span className="font-bold">Venue:</span> The Photovoltaic
                Institute of Île-de-France, Paris, France{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-500 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-6 shadow-md hover:shadow-[0_0_20px_#38bdf8] transition-transform hover:scale-105"
            >
              <Link to="/submission">Submit Paper</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-sky-500 text-sky-700 hover:bg-sky-500 hover:text-white text-lg px-8 py-6 transition-transform hover:scale-105"
            >
              <Link to="/registration">Register Now</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
          About ICEBM 2026
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto mb-10 rounded"></div>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-[#1e293b] font-medium">
          The International Conference on Economics, Business, and Management
          (ICEBM 2026) is a premier global platform fostering collaboration
          between academia, industry, and researchers to explore modern trends
          and challenges in economics, business innovation, and sustainable
          management strategies shaping the global economy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: <Users className="h-8 w-8 text-sky-600" />,
              title: "Global Networking",
              desc: "Collaborate with economists, entrepreneurs, and researchers from around the world.",
            },
            {
              icon: <BookOpen className="h-8 w-8 text-sky-600" />,
              title: "Research Excellence",
              desc: "Showcase innovative research and get published in high-impact indexed proceedings.",
            },
            {
              icon: <Award className="h-8 w-8 text-sky-600" />,
              title: "Expert Insights",
              desc: "Hear from global leaders and industry experts on emerging economic and management trends.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 text-center border-2 border-cyan-100 bg-white hover:shadow-[0_0_25px_#38bdf8] rounded-xl transition-all">
                <div className="mb-4 flex justify-center">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-sky-600">
                  {card.title}
                </h3>
                <p className="text-[#334155] font-medium leading-relaxed">
                  {card.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
          Conference Tracks
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-10 rounded"></div>
        <p className="text-[#1e293b] text-lg mb-12 max-w-3xl mx-auto font-medium">
          ICEBM 2026 invites contributions under the following major tracks and
          focus areas:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Card className="p-6 flex items-center gap-3 border-l-4 border-l-sky-400 bg-white hover:bg-cyan-50 rounded-lg transition-all shadow-sm hover:shadow-[0_0_15px_#06b6d4]">
                <Cpu className="h-6 w-6 text-sky-500 flex-shrink-0" />
                <p className="font-semibold text-[#0f172a] text-left">
                  {track}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Track Descriptions */}
        <div className="max-w-5xl mx-auto mt-12 text-left text-[#334155] space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-sky-700 mb-2">Business</h3>
            <p>
              Includes topics such as Branding, Business Models, Leadership,
              Planning, Corporate Governance, Negotiation, Risk Management, and
              Venture Capital fostering innovation and competitive strategy.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-700 mb-2">Management</h3>
            <p>
              Covers Human Resource Management, Operations Management, Strategic
              Planning, Financial and Quality Management, Sustainability, and
              Project Management to enhance global leadership practices.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-700 mb-2">
              Accounting & Banking
            </h3>
            <p>
              Encompasses Accounting Ethics, Cost Accounting, Corporate
              Accounting, Monetary Policy, Stock Market, and Islamic Banking,
              focusing on transparency and financial inclusion.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-700 mb-2">Finance</h3>
            <p>
              Topics include Corporate Finance, Financial Risk Management,
              Behavioral Finance, Venture Capital Financing, Hedge Funds, and
              Financial Regulations driving innovation in the financial sector.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-700 mb-2">Economics</h3>
            <p>
              Focuses on Economic Development, Fiscal Policy, International
              Economics, Inflation, Employment, and Economic Systems shaping
              national and global growth paradigms.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-sky-700 mb-2">
              Marketing & E-Commerce
            </h3>
            <p>
              Includes Digital Marketing, Consumer Behavior, AI in Retail,
              Cross-Border E-commerce, Data Privacy, Blockchain Security, and
              Smart Logistics transforming the digital business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
          Important Dates
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto mb-10 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {importantDates.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Card className="p-8 bg-white border border-cyan-200 rounded-xl text-center hover:shadow-[0_0_25px_#38bdf8]">
                <Calendar className="h-10 w-10 text-sky-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-sky-700 mb-1">
                  {item.label}
                </h3>
                <p className="text-[#334155] font-medium">{item.date}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 mb-6">
          Join ICEBM 2026
        </h2>
        <p className="text-[#1e293b] text-lg mb-10 max-w-3xl mx-auto font-medium">
          Be part of a global forum redefining the future of economics,
          management, and digital business ecosystems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-500 hover:to-cyan-600 text-white font-semibold px-8 py-6 shadow-md hover:shadow-[0_0_20px_#06b6d4] transition-transform hover:scale-105"
          >
            <Link to="/submission">Submit Paper</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-sky-500 text-sky-700 hover:bg-sky-500 hover:text-white px-8 py-6 transition-transform hover:scale-105"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
