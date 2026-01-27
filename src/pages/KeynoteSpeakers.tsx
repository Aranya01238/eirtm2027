import { Card } from "@/components/ui/card";
import { Mic, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

const KeynoteSpeakers = () => {
  const upcomingSpeakers = [
    {
      name: "Speaker Announcement Soon",
      designation: "Awaiting Confirmation",
      topic: "To Be Revealed",
    },
    {
      name: "Speaker Announcement Soon",
      designation: "Awaiting Confirmation",
      topic: "To Be Revealed",
    },
    {
      name: "Speaker Announcement Soon",
      designation: "Awaiting Confirmation",
      topic: "To Be Revealed",
    },
    {
      name: "Speaker Announcement Soon",
      designation: "Awaiting Confirmation",
      topic: "To Be Revealed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24 pb-16 text-[#0f172a]">
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
            <span className="font-semibold text-sky-600">ICEBM 2026</span> will
            feature a lineup of distinguished keynote speakers from across the
            globe. Our confirmed speaker list will be announced soon — stay
            tuned for updates!
          </p>
        </div>

        {/* Placeholder Speaker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {upcomingSpeakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white border border-cyan-100 rounded-2xl text-center shadow-sm hover:shadow-[0_0_25px_#38bdf8] transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-cyan-400 to-sky-500 rounded-full w-24 h-24 flex items-center justify-center text-white shadow-[0_0_25px_#06b6d4]">
                    <Mic className="h-10 w-10" />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-sky-700 mb-2">
                  {speaker.name}
                </h2>
                <p className="text-cyan-600 font-medium mb-3">
                  {speaker.designation}
                </p>
                <div className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-lg p-3 shadow-inner border border-cyan-100">
                  <h3 className="text-xs text-slate-500 font-semibold mb-1">
                    TOPIC
                  </h3>
                  <p className="text-sky-700 font-semibold">{speaker.topic}</p>
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
              innovators, and global experts in economics, business management,
              entrepreneurship, and sustainability.
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
              technical talks from leaders and researchers in business,
              economics, innovation, and management sciences.
            </p>
            <p className="text-[#334155]">
              Reach out to us at{" "}
              <a
                href="mailto:speakers@icebm2026.org"
                className="text-cyan-600 hover:underline font-semibold"
              >
                speakers@icebm2026.org
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
