import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, BookOpen, Award, Cpu, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import DeskCalendar from "@/components/DeskCalendar";
import heroBg from "@/assets/image.jpg";
import aboutImg from "@/assets/abt.png";
import ribbonImg from "@/assets/rbn.png";

const importantDates = [
  { label: "Full Paper Submission", date: "10th December, 2025" },
  { label: "Acceptance Notification", date: "10th January, 2026" },
  { label: "Registration", date: "20th March, 2026" },
  { label: "Presentation Submission", date: "20th March, 2026" },
  { label: "Conference On", date: "21st – 23rd April, 2026" },
];

// Helper function to generate URL-friendly slugs
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

const tracks = [
  "Business",
  "Management",
  "Accounting & Banking",
  "Finance",
  "Economics",
  "Marketing",
  "E-Commerce and Q-Commerce",
].map(category => ({
  category,
  slug: generateSlug(category)
}));

const Home = () => {
  return (
    <div className="min-h-screen bg-sky-100 text-[#0f172a] font-sans">
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Light overlay similar to the example */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-transparent" />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 flex flex-col justify-center min-h-[85vh]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl">
            <p className="text-sky-700 font-semibold tracking-wide mb-2">ICEBM 2026</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0f172a] mb-4">
              International Conference on Economics, Business & Management
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[#1e293b] text-base md:text-lg mb-6">
              <div className="inline-flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-600" />
                <span>21–23 April, 2026</span>
              </div>
              <span className="hidden md:inline text-slate-400">•</span>
              <div className="inline-flex items-center">
                <span>
                  <span className="font-semibold">Venue:</span> The Photovoltaic Institute of Île-de-France, Paris
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 shadow-md hover:shadow-[0_10px_30px_rgba(56,189,248,0.45)] transition-transform hover:scale-[1.02]"
              >
                <Link to="/registration">Get Ticket</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-sky-500 text-sky-700 hover:bg-sky-500 hover:text-white px-8 py-6 transition-transform hover:scale-[1.02]"
              >
                <Link to="/contact">Explore Sponsorship</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Band below hero */}
      <section className="relative -mt-5 mb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-sky-600/90 via-cyan-600/90 to-sky-700/90 text-white shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold">500+</div>
                <div className="text-sm md:text-base opacity-90">Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold">3</div>
                <div className="text-sm md:text-base opacity-90">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold">40+</div>
                <div className="text-sm md:text-base opacity-90">Speakers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold">30+</div>
                <div className="text-sm md:text-base opacity-90">Sessions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Two-column layout with image) */}
      <section className="pt-16 pb-12 px-14 bg-gradient-to-b from-blue-50 to-white -mt-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-12 items-center">
          {/* Left: Image without boxy glow/border */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Conference audience"
              className="w-full rounded-3xl md:h-[420px] lg:h-[500px] object-cover"
            />
          </div>

          {/* Right: Content and checklist */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#0f172a]">About ICEBM</h2>
            <p className="text-[#1e293b] text-lg leading-relaxed mb-8">
              The International Conference on Economics, Business, and Management (ICEBM 2026) is a premier global platform fostering collaboration between academia, industry, and researchers to explore modern trends and challenges in economics, business innovation, and sustainable management strategies shaping the global economy.
            </p>

            <div className="space-y-4">
              {[
                "Globally recognized flagship conference",
                "Keynotes by renowned industry leaders and pioneers",
                "Round tables and fireside chat sessions",
                "Participants from 1000+ companies",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white/90 border border-cyan-100 rounded-xl px-4 py-3 shadow-sm"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-700" />
                  </span>
                  <span className="text-[#0f172a] font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits (Three boxes under About, above Tracks) */}
      <section className="pt-4 pb-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Global Networking */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 250 }}>
            <Card className="p-8 bg-white border border-cyan-200 rounded-xl text-center shadow-sm hover:shadow-[0_0_25px_#38bdf8]">
              <Users className="h-10 w-10 text-sky-600 mx-auto mb-3" />
              <h3 className="text-2xl font-semibold text-sky-700 mb-2">Global Networking</h3>
              <p className="text-[#334155] font-medium">
                Collaborate with economists, entrepreneurs, and researchers from around the world.
              </p>
            </Card>
          </motion.div>

          {/* Research Excellence */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 250 }}>
            <Card className="p-8 bg-white border border-cyan-200 rounded-xl text-center shadow-sm hover:shadow-[0_0_25px_#38bdf8]">
              <BookOpen className="h-10 w-10 text-sky-600 mx-auto mb-3" />
              <h3 className="text-2xl font-semibold text-sky-700 mb-2">Research Excellence</h3>
              <p className="text-[#334155] font-medium">
                Showcase innovative research and get published in high-impact indexed proceedings.
              </p>
            </Card>
          </motion.div>

          {/* Expert Insights */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 250 }}>
            <Card className="p-8 bg-white border border-cyan-200 rounded-xl text-center shadow-sm hover:shadow-[0_0_25px_#38bdf8]">
              <Award className="h-10 w-10 text-sky-600 mx-auto mb-3" />
              <h3 className="text-2xl font-semibold text-sky-700 mb-2">Expert Insights</h3>
              <p className="text-[#334155] font-medium">
                Hear from global leaders and industry experts on emerging economic and management trends.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Conference Tracks (Curved ribbon + floating avatars) */}
      <section className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-3">
            Tracks
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-3">Conference Tracks</h2>
          <p className="text-[#1e293b] text-lg mb-12 max-w-3xl mx-auto font-medium">
            See how our tracks span research and practice across modern domains.
          </p>

          {/* Ribbon and icon stage (full-bleed across viewport) */}
          <div className="relative mt-2 h-[220px] md:h-[240px] lg:h-[260px] overflow-visible">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full flex items-center justify-center z-0">
              <img
                src={ribbonImg}
                alt="Ribbon"
                className="w-[105vw] md:w-[110vw] lg:w-[115vw] max-w-none h-auto opacity-95"
              />
            </div>

            {/* Floating bubbles/icons spread edge-to-edge */}
            <div className="hidden md:block">
              <div className="absolute left-[6vw] top-10 z-10">
                <div className="h-14 w-14 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center">
                  <Cpu className="h-7 w-7 text-sky-600" />
                  
                </div>
              </div>
              <div className="absolute left-[22vw] top-40 z-10">
                <div className="h-12 w-12 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center">
                  <Users className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
                <div className="h-16 w-16 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-sky-600" />
                </div>
              </div>
              <div className="absolute right-[20vw] top-36 z-10">
                <div className="h-12 w-12 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center">
                  <Award className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="absolute right-[6vw] top-8 z-10">
                <div className="h-14 w-14 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-sky-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Support text above the Explore button */}
          <p className="text-[#1e293b] text-lg mt-3 mb-4 max-w-3xl mx-auto font-medium">
            <br /> Click the button below to explore the tracks
          </p>

          {/* Explore Tracks button centered below the ribbon */}
          <motion.div
            className="relative mt-6 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 shadow-md transition-shadow hover:shadow-[0_0_25px_#38bdf8]">
              <Link to="/call-for-papers">Explore Tracks</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
          Important Dates
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto mb-10 rounded"></div>

        {/* Integrated Desk Calendar */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <DeskCalendar />
        </div>

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
