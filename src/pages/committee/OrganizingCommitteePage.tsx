import React, { useState } from "react";
import { Search } from "lucide-react";

interface CommitteeMember {
  role: string;
  name: string;
  designation: string;
  affiliation: string;
}

const members: CommitteeMember[] = [
  // === General Chair ===
  {
    role: "General Chair",
    name: "Prof. Antti Talonen",
    designation:
      "Editor-in-Chief, Journal of Co-operative Organization and Management",
    affiliation: "University of Eastern Finland",
  },

  // === Technical Chair ===
  {
    role: "Technical Chair",
    name: "Prof. Sunil Sahadev",
    designation: "Professor in Marketing and Responsible Enterprise",
    affiliation: "Sheffield Hallam University, UK",
  },

  // === Convener ===
  {
    role: "Convener",
    name: "Prof. Sanghamitra Poddar",
    designation: "Professor",
    affiliation: "Institute of Engineering & Management, Kolkata, India",
  },
  {
    role: "Convener",
    name: "Prof. Malay Gangopadhyay",
    designation: "Professor",
    affiliation: "Institute of Engineering & Management, Kolkata, India",
  },

  // === Publicity Chair ===
  {
    role: "Publicity Chair",
    name: "Dr. Dominic Appiah",
    designation: "Lecturer in Marketing (TF)",
    affiliation: "Royal Holloway, University of London, UK",
  },
  {
    role: "Publicity Chair",
    name: "Prof. Srijita Chakraborty",
    designation: "Assistant Professor",
    affiliation: "Institute of Engineering & Management, Kolkata, India",
  },
  {
    role: "Publicity Chair",
    name: "Prof. Nadindla Srividya",
    designation: "Professor",
    affiliation: "Institute of Engineering & Management, Kolkata, India",
  },

  // === Publication Chair ===
  {
    role: "Publication Chair",
    name: "Prof. Ranjan Chaudhuri",
    designation: "Professor",
    affiliation: "EMLV Business School, Paris, France",
  },
  {
    role: "Publication Chair",
    name: "Dr. Avinash K. Shrivastava",
    designation: "Associate Professor & Managing Editor",
    affiliation: "International Management Institute (IMI) Kolkata, India",
  },
  {
    role: "Publication Chair",
    name: "Prof. Dipak Saha",
    designation: "Professor",
    affiliation: "Institute of Engineering & Management, Kolkata, India",
  },
  {
    role: "Publication Chair",
    name: "Dr. Udit Chawla",
    designation: "Associate Professor",
    affiliation: "Institute of Engineering & Management, Kolkata, India",
  },
];

const OrganizingCommitteePage: React.FC = () => {
  // Group members by role
  const grouped = members.reduce((acc, member) => {
    if (!acc[member.role]) acc[member.role] = [];
    acc[member.role].push(member);
    return acc;
  }, {} as Record<string, CommitteeMember[]>);

  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});

  const handleSearchChange = (role: string, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [role]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] mb-4">
            Organizing Committee
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
            The organizing committee of{" "}
            <span className="font-semibold text-sky-600">ICEBM 2026</span>{" "}
            brings together global experts, scholars, and industry leaders to
            guide the success of this international conference.
          </p>
        </div>

        {/* Groups */}
        <div className="space-y-16">
          {Object.entries(grouped).map(([role, members]) => {
            const searchTerm = searchTerms[role]?.toLowerCase() || "";
            const filtered = members.filter(
              (m) =>
                m.name.toLowerCase().includes(searchTerm) ||
                m.affiliation.toLowerCase().includes(searchTerm)
            );

            return (
              <div key={role}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                  <h2 className="text-3xl font-bold text-sky-700 mb-4 sm:mb-0">
                    {role}s
                  </h2>

                  <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-3 text-cyan-500 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search by name or institution..."
                      className="w-full pl-10 pr-4 py-2 border border-cyan-200 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(role, e.target.value)}
                    />
                  </div>
                </div>

                {/* Member Cards */}
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
                    <p className="text-slate-500 italic">
                      No matches found for "{searchTerm}".
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-[#1e293b]">
            More committee members and extended panels will be announced soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommitteePage;
