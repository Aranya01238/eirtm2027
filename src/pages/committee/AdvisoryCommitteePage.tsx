import React, { useState } from "react";
import { Search } from "lucide-react";

interface AdvisoryMember {
  name: string;
  designation: string;
  affiliation: string;
}

const members: AdvisoryMember[] = [
  {
    name: "Soumitra Dutta",
    designation: "Peter Moores Dean and Professor of Management",
    affiliation: "Saïd Business School, University of Oxford",
  },
  {
    name: "Justin Paul",
    designation: "Professor",
    affiliation:
      "University of Puerto Rico, USA & University of Reading, UK, EIC - International Journal of Consumer Studies (Wiley)",
  },
  {
    name: "Rajesh Mohnot",
    designation: "Professor, Head of Finance Department",
    affiliation: "Ajman University, Dubai, UAE",
  },
  {
    name: "Veland Ramadani",
    designation:
      "Professor of Entrepreneurship and Family Business, Faculty of Business and Economics",
    affiliation: "South-East European University, North Macedonia",
  },
  {
    name: "Ashish Chandra",
    designation: "Professor, College of Business",
    affiliation: "University of Houston, Clear Lake, Houston, Texas, USA",
  },
  {
    name: "Monomita Nandy",
    designation:
      "Professor in Accounting and Finance, Vice Dean International - CBASS",
    affiliation:
      "Brunel Business School, Brunel University London, United Kingdom",
  },
  {
    name: "Monica Chaudhary",
    designation: "Associate Professor, Deputy Head",
    affiliation:
      "School of Business, Melbourne Institute of Technology, Sydney, Australia",
  },
  {
    name: "Sudhir Rana",
    designation: "Associate Professor",
    affiliation:
      "College of Healthcare Management & Economics, Gulf Medical University, UAE",
  },
];

const AdvisoryCommitteePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.affiliation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] mb-4">
            Advisory Committee
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
            The{" "}
            <span className="font-semibold text-sky-600">
              Advisory Committee
            </span>{" "}
            of <span className="font-semibold text-sky-600">ICEBM 2026</span>{" "}
            includes internationally acclaimed professors and thought leaders
            who provide strategic and academic guidance to the conference.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative w-full sm:w-96 mx-auto">
            <Search className="absolute left-3 top-3 text-cyan-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by name or institution..."
              className="w-full pl-10 pr-4 py-2 border border-cyan-200 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((m, idx) => (
              <div
                key={idx}
                className="bg-white border border-cyan-100 rounded-2xl p-6 hover:shadow-[0_0_20px_#38bdf8] transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-sky-700 mb-1">
                  {m.name}
                </h3>
                <p className="text-cyan-600 font-medium mb-2">
                  {m.designation}
                </p>
                <p className="text-[#475569]">{m.affiliation}</p>
              </div>
            ))
          ) : (
            <p className="text-slate-500 italic text-center col-span-full">
              No results found for “{searchTerm}”
            </p>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <p className="text-lg text-[#1e293b]">
            More distinguished advisors will be announced soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryCommitteePage;
