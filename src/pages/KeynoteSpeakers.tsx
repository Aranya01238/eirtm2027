import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const KeynoteSpeakers = () => {
  const confirmedSpeakers = [
    {
      name: "Dr. Pere Roca i Cabarrocas",
      designation:
        "Research Director, CNRS & Scientific Director, Institut Photovoltaïque d’Île-de-France (IPVF), France",
      topic:
        "Advanced Photovoltaic Technologies and the Future of Sustainable Solar Energy",
      image: "/pere-roca%20(1).jpg",
    },
    {
      name: "Prof. Maurizio Bozzi",
      designation:
        "IEEE Fellow | Full Professor, University of Pavia, Italy | 2024 President, IEEE Microwave Theory & Technology Society (MTT-S)",
      topic:
        "Microwave and Terahertz Technologies for Next-Generation Communication Systems",
      image: "/maurizio-bozzi%20(1).jpg",
    },
    {
      name: "Professor Ilkyeong Moon, Ph.D., P.E.",
      designation:
        "Department of Industrial Engineering, Seoul National University, Seoul 08826, Korea",
      topic: "Keynote talk title to be announced",
      image: "/ilkyeong-moon.jpg",
      profile:
        "Co-Editor-in-Chief, European Journal of Industrial Engineering (EJIE) | Fellow, Korean Academy of Science and Technology (KAST) | Fellow, International Foundation for Production Research (IFPR) | Former President (2019-2020), Korean Institute of Industrial Engineers (KIIE)",
      contact:
        "Phone: +82-2-880-7151 | Fax: +82-2-889-8560 | Mobile: +82-10-9470-2451",
      links: [
        { label: "Homepage", url: "http://scm.snu.ac.kr/" },
        {
          label: "EJIE Homepage",
          url: "https://www.inderscience.com/jhome.php?jcode=ejie",
        },
        { label: "KAST Homepage", url: "https://kast.or.kr/en/" },
        { label: "IFPR Homepage", url: "https://ifpr-icpr.org" },
        { label: "KIIE Homepage", url: "http://kiie.org/" },
      ],
    },
    {
      name: "Dr. Sulekha Chattopadhyay, PhD",
      designation:
        "Fulbright Specialist, Senior Engineer, California Environmental Protection Agency, USA",
      image: "/sulekha-chattopadhyay.jpg",
      topic: "Profit, Policy, Planet: An Engineering Perspective",
      profile:
        "California Air Resources Board | University of California, Riverside | Los Angeles Metropolitan Area",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 text-foreground">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] mb-4">
            Keynote Speakers
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-[#1e293b] max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-sky-600">ICEBM 2026</span>
            presents distinguished keynote speakers from world-leading
            institutions.
          </p>
        </div>

        {/* Confirmed Speaker Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {confirmedSpeakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#f3f4f6] border border-cyan-100 rounded-[2rem] shadow-[0_8px_24px_rgba(15,23,42,0.08)] px-8 pb-10 pt-8 text-center">
                <div className="w-full flex justify-center mb-8">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0e6597] mb-6 leading-snug">
                  {speaker.name}
                </h2>
                <p className="text-[#0088b6] text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-7">
                  {speaker.designation}
                </p>

                <div className="bg-[#d9e4ea] rounded-3xl px-8 py-7 border border-cyan-100 max-w-3xl mx-auto">
                  <h3 className="text-xs md:text-sm text-slate-500 font-bold mb-2 uppercase tracking-[0.16em]">
                    Keynote Talk
                  </h3>
                  <p className="text-[#03558a] text-xl md:text-2xl font-semibold leading-snug">
                    {speaker.topic}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-16 text-center bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-lg rounded-3xl">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              More Speakers Coming Soon!
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              We’re curating an exceptional lineup of thought leaders,
              innovators, and global experts in computing, AI, IoT, and
              sustainable technology.
              <span className="font-semibold text-white">
                {" "}
                Stay tuned for official announcements!
              </span>
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 text-white/90">
              <Calendar className="h-5 w-5" />
              <p className="text-lg font-medium">Final List by March 2026</p>
            </div>
          </Card>
        </motion.div>

        {/* Speaking Opportunity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-10 bg-gradient-to-br from-blue-100 to-cyan-50 border border-cyan-200 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-600">
              Interested in Speaking at ICEBM 2026?
            </h2>
            <p className="text-lg text-[#334155] mb-4">
              We welcome proposals for keynote sessions, panel discussions, and
              technical talks from leaders and researchers in emerging
              technologies.
            </p>
            <p className="text-[#334155]">
              Reach out to us at{" "}
              <a
                href="mailto:speakers@icetps2026.org"
                className="text-cyan-600 hover:underline font-semibold"
              >
                koyel.ganguly@iem.edu.in
              </a>{" "}
              to collaborate and share your expertise at this prestigious event.
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KeynoteSpeakers;
