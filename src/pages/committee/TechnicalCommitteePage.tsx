import React, { useState } from "react";
import { Search } from "lucide-react";

interface CommitteeMember {
  name: string;
  designation: string;
  affiliation: string;
}

const members: CommitteeMember[] = [
  {
    name: "Arindam Banerjee",
    designation:
      "Professor (Finance) and Director – Masters of Applied Finance & Wealth Management, Head – Alumni Relations, Middle East and Africa, Director, Executive Program in Global Strategic Finance",
    affiliation: "SP Jain Global School of Management, Dubai, UAE",
  },
  {
    name: "Amina Omrane",
    designation: "Associate Professor, Management Science and Entrepreneurship",
    affiliation: "University of Sfax, Sfax, Tunisia",
  },
  {
    name: "Chinmoy Saha",
    designation: "Professor",
    affiliation:
      "Indian Institute of Space Science and Technology, Department of Space, Government of India, Thiruvananthapuram, Kerala, India",
  },
  {
    name: "Ts Dr. Zairi Ismael Rizman",
    designation: "Senior Lecturer",
    affiliation:
      "School of Electrical Engineering, College of Engineering, Universiti Teknologi MARA, Malaysia",
  },
];

const TechnicalCommitteePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.affiliation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] mb-4">
            Technical Committee
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
            The{" "}
            <span className="font-semibold text-sky-600">
              Technical Committee
            </span>{" "}
            of <span className="font-semibold text-sky-600">ICEBM 2026</span>{" "}
            comprises distinguished academicians and experts responsible for
            maintaining the scientific and technical excellence of the
            conference.
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

        {/* Committee Members */}
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
            Additional technical committee members will be announced soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalCommitteePage;
