import { Card } from "@/components/ui/card";
import { Users, Award, Briefcase, BookOpen } from "lucide-react";

interface CommitteeMember {
  name: string;
  designation: string;
  affiliation: string;
}

const Committee = () => {
  const organizingCommittee: CommitteeMember[] = [
    {
      name: "Dr. Satyajit Chakrabarti",
      designation: "Conference Chair",
      affiliation: "IEM, Kolkata",
    },
    {
      name: "Dr. Rajib Kumar Mandal",
      designation: "Organizing Chair",
      affiliation: "IEM, Kolkata",
    },
    {
      name: "Prof. Anindya Sundar Dhar",
      designation: "Technical Program Chair",
      affiliation: "IEM, Kolkata",
    },
    {
      name: "Dr. Priyanka Mondal",
      designation: "Publication Chair",
      affiliation: "IEM, Kolkata",
    },
  ];

  const advisoryCommittee: CommitteeMember[] = [
    {
      name: "Prof. John Smith",
      designation: "Professor",
      affiliation: "MIT, USA",
    },
    {
      name: "Dr. Maria Garcia",
      designation: "Senior Researcher",
      affiliation: "University of Cambridge, UK",
    },
    {
      name: "Prof. Hiroshi Tanaka",
      designation: "Dean",
      affiliation: "Tokyo Institute of Technology, Japan",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Director",
      affiliation: "IIT Delhi, India",
    },
  ];

  const technicalCommittee: CommitteeMember[] = [
    {
      name: "Dr. Amit Kumar",
      designation: "Associate Professor",
      affiliation: "NIT Durgapur",
    },
    {
      name: "Dr. Sneha Roy",
      designation: "Assistant Professor",
      affiliation: "Jadavpur University",
    },
    {
      name: "Dr. Rajesh Verma",
      designation: "Professor",
      affiliation: "IIT Kharagpur",
    },
    {
      name: "Dr. Anita Desai",
      designation: "Senior Scientist",
      affiliation: "CSIR-CEERI",
    },
  ];

  const volumeEditors: CommitteeMember[] = [
    {
      name: "Prof. David Williams",
      designation: "Editor-in-Chief",
      affiliation: "Springer",
    },
    {
      name: "Dr. Sarah Johnson",
      designation: "Associate Editor",
      affiliation: "IEEE Publications",
    },
    {
      name: "Prof. Michael Brown",
      designation: "Volume Editor",
      affiliation: "Elsevier",
    },
  ];

  const CommitteeSection = ({
    id,
    title,
    icon: Icon,
    members,
    color,
  }: {
    id: string;
    title: string;
    icon: any;
    members: CommitteeMember[];
    color: string;
  }) => (
    <section id={id} className="mb-16 scroll-mt-24">
      <Card className={`p-8 border-t-4 ${color}`}>
        <div className="flex items-start gap-4 mb-8">
          <Icon className="h-10 w-10 text-primary flex-shrink-0" />
          <div>
            <h2 className="text-3xl font-bold text-primary">{title}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-muted p-6 rounded-lg border-l-4 border-l-secondary hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-1">{member.designation}</p>
              <p className="text-muted-foreground">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Conference Committee</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            EIRTM 2025 is supported by distinguished academicians, researchers, and industry
            professionals from around the world.
          </p>
        </div>

        {/* Organizing Committee */}
        <CommitteeSection
          id="organizing"
          title="Organizing Committee"
          icon={Users}
          members={organizingCommittee}
          color="border-t-primary"
        />

        {/* Advisory Committee */}
        <CommitteeSection
          id="advisory"
          title="Advisory Committee"
          icon={Award}
          members={advisoryCommittee}
          color="border-t-secondary"
        />

        {/* Technical Committee */}
        <CommitteeSection
          id="technical"
          title="Technical Program Committee"
          icon={Briefcase}
          members={technicalCommittee}
          color="border-t-primary"
        />

        {/* Volume Editors */}
        <CommitteeSection
          id="editors"
          title="Volume Editors of Conference Proceedings"
          icon={BookOpen}
          members={volumeEditors}
          color="border-t-secondary"
        />

        {/* Note */}
        <Card className="p-8 bg-primary/5 border-l-4 border-l-primary">
          <p className="text-lg">
            <strong>Note:</strong> The committee list is being updated. More members will be added
            soon. If you are interested in joining the committee, please{" "}
            <a href="/contact" className="text-primary hover:underline font-semibold">
              contact us
            </a>
            .
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Committee;
