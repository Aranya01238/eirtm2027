import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Cpu, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Track = {
  category: string;
  topics: string[];
};

const engineeringTracks: Track[] = [
  {
    category: "Business",
    topics: [
      "Corporate Governance & Ethics",
      "Strategic Planning & Competitive Advantage",
      "Entrepreneurship & Business Models",
      "Global Markets & Emerging Economies",
      "Organizational Behaviour & Leadership",
      "Risk Management & Business Continuity",
      "Mergers, Acquisitions & Negotiations",
    ],
  },
  {
    category: "Management",
    topics: [
      "Human Resource & Talent Development",
      "Financial & Risk Management",
      "Operations & Supply Chain Management",
      "Technology, Innovation and AI in Management",
      "Sustainability & Environmental Management",
      "Strategic & Quality Management",
      "Event, Tourism & Hospitality Management",
    ],
  },
  {
    category: "Accounting & Banking",
    topics: [
      "Financial & Managerial Accounting",
      "Corporate & Public Accounting Standards",
      "Banking Systems & Monetary Policy",
      "Financial Instruments & Capital Markets",
      "Auditing & Risk Analysis",
      "Cryptocurrency & Digital Banking",
      "International & Islamic Banking Practices",
    ],
  },
  {
    category: "Finance",
    topics: [
      "Corporate Finance & Investment Strategies",
      "Behavioral & Empirical Finance",
      "Financial Markets, Regulations & Inclusion",
      "Risk Management, Financial Engineering and Fintech",
      "Insurance & Financial Services",
      "Global Financial Crisis & Policy Responses",
      "Public, Personal & Project Finance",
    ],
  },
  {
    category: "Economics",
    topics: [
      "Microeconomics & Macroeconomics",
      "Economic Growth & Development",
      "Fiscal & Monetary Policy",
      "International & Comparative Economics",
      "Employment, Inflation & Human Capital",
      "Econometrics & Data Analysis",
      "Energy & Environmental Economics",
    ],
  },
  {
    category: "Marketing",
    topics: [
      "Consumer Behavior & Brand Management",
      "Digital, Social & Influencer Marketing",
      "Marketing Analytics & Artificial Intelligence",
      "International & Cross-Cultural Marketing",
      "Content & Viral Marketing Strategies",
      "CRM & Customer Experience Management",
      "Sustainable & Ethical Marketing Practices",
    ],
  },
  {
    category: "E-Commerce and Q-Commerce",
    topics: [
      "Online Platforms & Marketplaces",
      "Mobile & Omnichannel Commerce",
      "Data Privacy & Cybersecurity",
      "Blockchain & Smart Logistics",
      "Ecommerce Strategy & Digital Payments",
      "Big Data & Internet-of-Things Applications",
      "Cross-Border & Legal Frameworks in Ecommerce",
    ],
  },
];

const managementTracks: Track[] = [
  {
    category: "Internet of Things (IoT) & Data Science",
    topics: [
      "IoT and Big Data",
      "Blockchain",
      "Next-generation infrastructure for IoT",
      "Cloud computing and IoT",
      "Edge computing and IoT",
      "IoT platforms, tools, and applications",
      "IoT systems development methodologies",
      "IoT applications",
    ],
  },
  {
    category: "Artificial Intelligence",
    topics: [
      "Artificial Intelligence (AI) solutions for IT",
      "Explainable Artificial Intelligence (XAI)",
      "Computer Vision & Transformers",
      "Digital twinning & Autonomous Vehicles",
      "Creative or generative artificial intelligence (AI)",
      "Democratized AI: low-code, no-code AI",
      "AI in cyber-security",
      "Multimodal / Embedded machine learning",
      "Federated / Adversarial Machine Learning",
      "AI in Healthcare and Medicine",
      "Quantum Machine Learning",
      "Machine Learning and Deep Learning",
      "Machine Learning in Bioinformatics & Metaverse",
      "Natural Language Processing and Understanding",
      "Explainability and Transparency in AI",
      "AI for Multi-Agent Meta-Learning",
      "AI in Industry and Business",
      "AI and Data Ethics",
    ],
  },
  {
    category: "Mechatronics",
    topics: [
      "Sensing and Control Systems",
      "Mechatronics Systems",
      "Mechanical Systems",
      "Artificial Intelligence",
      "Robotics & Automation",
      "Machine Learning",
      "Deep learning",
      "Recommendation system",
    ],
  },
  {
    category: "Communication",
    topics: [
      "Ad hoc networks",
      "5G communications",
      "Cloud and virtual networks",
      "Cognitive radio networks",
      "Cooperative communications",
      "Self-organising networks",
      "Vehicular networks",
      "Wireless multicasting",
      "Wireless sensor networks",
    ],
  },
  {
    category: "Cyber Security",
    topics: [
      "Network Security",
      "Information Security",
      "Encoding Technology",
      "Cryptography",
    ],
  },
  {
    category: "Information Technology",
    topics: [
      "Neural Network",
      "Intelligent System and Artificial Intelligence",
      "Data Mining and Analytics",
      "System Simulation",
      "Network Design and Analysis",
      "Quantum Information Science",
      "Computation in Medical Science",
      "Cloud Computing in E-Commerce Scenarios",
      "Electronic Business Model and Method",
    ],
  },
  {
    category: "Material Science",
    topics: [
      "Materials for Energy applications",
      "Materials for Medical applications",
      "Carbon based materials",
      "Biomaterials",
    ],
  },
];

const importantDates = [
  { event: "Final Paper Submission", date: "15th April, 2027" },
  { event: "Acceptance Notification", date: "15th April, 2027" },
  { event: "Registration Deadline", date: "17th April, 2027" },
  { event: "Presentation Submission", date: "20th April, 2027" },
  { event: "Conference Dates", date: "21st – 23rd April, 2027" },
];
// Helper function to generate URL-friendly slugs
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ & /g, "-")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const CallForPapers = () => {
  const [activeHashSlug, setActiveHashSlug] = useState<string | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const slug = hash ? hash.substring(1) : null;
      setActiveHashSlug(slug); // Set the active slug from the URL hash

      if (slug) {
        const element = document.getElementById(slug);
        if (element) {
          // Adjust this value based on your fixed header height
          const headerOffset = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
          });
        }
      }
    };

    handleHashChange(); // Call on mount
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] pt-24 pb-16 font-sans">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            Call for Papers – EIRTM 2027
          </h1>
          <p className="text-lg text-[#1e293b] max-w-3xl mx-auto font-medium leading-relaxed">
            The{" "}
            <span className="text-cyan-600 font-semibold">
              European Congress on Interdisciplinary Research in Technology and Management
              (EIRTM 2027)
            </span>{" "}
            invites{" "}
            <span className="text-sky-600 font-semibold">
              original and unpublished research papers
            </span>
            , technical reports, and case studies from researchers,
            academicians, and industry professionals exploring modern trends,
            innovations, and sustainable solutions in the global business
            ecosystem.
          </p>
        </div>

        {/* Submission Types - CENTERED & SINGLE ITEM */}
        <div className="flex justify-center mb-20">
          {[
            {
              icon: (
                <FileText className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
              ),
              title: "Full Papers",
              desc: "3500 words and above, presenting comprehensive research, detailed methodologies, and analytical results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-lg" // Limit width so it looks like a card
            >
              <Card className="p-8 text-center bg-white border border-cyan-100 hover:shadow-[0_0_25px_#38bdf8] hover:border-cyan-400 transition-all rounded-xl">
                {item.icon}
                <h3 className="text-xl font-bold mb-3 text-sky-700">
                  {item.title}
                </h3>
                <p className="text-[#334155] font-medium">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Research Tracks */}
        <div className="mb-20 space-y-16">
          <div className="text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-cyan-600">
              EIRTM 2027 • Engineering Set
            </p>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Engineering
            </h2>
            <p className="mt-3 text-lg font-semibold text-slate-600">
              Technical and systems-oriented research set within EIRTM 2027
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {engineeringTracks.map((track, i) => {
              const trackSlug = `engineering-${generateSlug(track.category)}`;
              const isHashActive = activeHashSlug === trackSlug;
              const isCurrentlyHovered = hoveredSlug === trackSlug;

              return (
                <motion.div
                  key={trackSlug}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => setHoveredSlug(trackSlug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className={i === 0 ? "xl:col-span-1" : ""}
                >
                  <Card
                    id={trackSlug}
                    className={`h-full border bg-white p-5 rounded-xl shadow-sm transition-all ${
                      isCurrentlyHovered || (isHashActive && !hoveredSlug)
                        ? "border-cyan-400 shadow-[0_0_20px_#06b6d4]"
                        : "border-sky-100"
                    } hover:bg-cyan-50 hover:shadow-[0_0_20px_#06b6d4]`}
                  >
                    <h3 className="mb-3 flex items-start gap-2 text-lg font-bold text-sky-700">
                      <Cpu className="mt-1 h-5 w-5 shrink-0 text-cyan-500" />
                      <span>Track #{i + 1}: {track.category}</span>
                    </h3>
                    <ul className="list-disc space-y-1 pl-5 text-sm font-medium leading-snug text-[#334155]">
                      {track.topics.map((topic) => (
                        <li key={topic} className="transition-all hover:text-cyan-600">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="border-t border-sky-100 pt-16 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-600">
              EIRTM 2027 • Management Set
            </p>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              Management
            </h2>
            <p className="mt-3 text-lg font-semibold text-slate-600">
              Business, economics, and management-focused sessions within the same conference
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              Research papers are invited describing original works in related technologies and management. The conference includes peer-reviewed technical sessions, special sessions, tutorials, and demonstrations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {managementTracks.map((track, i) => {
              const trackSlug = `management-${generateSlug(track.category)}`;
              const isHashActive = activeHashSlug === trackSlug;
              const isCurrentlyHovered = hoveredSlug === trackSlug;

              return (
                <motion.div
                  key={trackSlug}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => setHoveredSlug(trackSlug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                >
                  <Card
                    id={trackSlug}
                    className={`h-full border bg-white p-5 rounded-xl shadow-sm transition-all ${
                      isCurrentlyHovered || (isHashActive && !hoveredSlug)
                        ? "border-amber-400 shadow-[0_0_20px_#f59e0b]"
                        : "border-amber-100"
                    } hover:bg-amber-50 hover:shadow-[0_0_20px_#f59e0b]`}
                  >
                    <h3 className="mb-3 flex items-start gap-2 text-lg font-bold text-amber-700">
                      <Cpu className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                      <span>Track #{i + 1}: {track.category}</span>
                    </h3>
                    <ul className="list-disc space-y-1 pl-5 text-sm font-medium leading-snug text-[#334155]">
                      {track.topics.map((topic) => (
                        <li key={topic} className="transition-all hover:text-amber-600">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Submission Guidelines */}
        <Card className="p-10 mb-20 bg-gradient-to-br from-blue-100 to-cyan-50 border border-cyan-200 shadow-md rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
            Submission Guidelines
          </h2>
          <ul className="space-y-3 text-lg text-[#1e293b] font-medium leading-relaxed">
            <li>
              • Submissions must be{" "}
              <span className="text-cyan-600 font-semibold">
                original and unpublished
              </span>
              .
            </li>
            <li>
              • Papers should follow the{" "}
              <span className="text-sky-600 font-semibold">
                Conference format
              </span>
              and be written in English.
            </li>
            <li>
              • Submit through the{" "}
              <span className="text-cyan-600 font-semibold">
                Edas submission system
              </span>
              .
            </li>
            <li>
              • All papers will undergo{" "}
              <span className="text-sky-600 font-semibold">
                double-blind peer review
              </span>
              .
            </li>
            <li>
              • At least one author of each accepted paper must{" "}
              <span className="text-cyan-600 font-semibold">
                register and present
              </span>{" "}
              the paper at EIRTM 2027.
            </li>
          </ul>
        </Card>

        {/* Important Dates Timeline */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            Important Dates
          </h2>

          <div className="relative max-w-6xl mx-auto px-4">
            {/* Horizontal path for desktop */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 opacity-50 blur-[1px]" />

            {/* Vertical path for mobile */}
            <div className="absolute left-[34px] top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-500 rounded-full md:hidden" />

            {/* Timeline items */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-16 md:gap-0 relative z-10">
              {importantDates.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center md:w-[200px] lg:w-[220px]"
                >
                  {index !== 0 && (
                    <div className="md:hidden absolute -top-16 w-[2px] h-16 bg-gradient-to-b from-cyan-400 to-sky-400"></div>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="relative flex items-center justify-center group mb-5"
                  >
                    <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-40 animate-pulse"></div>
                    <div className="relative w-16 h-16 rounded-full border-[3px] border-cyan-400 bg-white flex items-center justify-center shadow-[0_0_20px_#06b6d4] group-hover:shadow-[0_0_35px_#06b6d4] transition-all duration-300">
                      <Calendar className="w-7 h-7 text-cyan-600 drop-shadow-[0_0_6px_#06b6d4]" />
                    </div>
                  </motion.div>
                  <div className="text-center">
                    <h4 className="text-sky-700 text-sm md:text-base font-semibold uppercase tracking-wide mb-1">
                      {item.event}
                    </h4>
                    <p className="text-cyan-600 text-sm md:text-base font-semibold">
                      {item.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-sky-700">
            Be Part of <span className="text-cyan-600">EIRTM 2027</span> — Share
            Your Research and Shape the Future of Business and Management!
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 shadow-md hover:shadow-[0_0_25px_#06b6d4] transition-transform hover:scale-105"
            >
              <Link to="/submission">Submit Paper</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallForPapers;
