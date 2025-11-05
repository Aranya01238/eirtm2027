import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Upload,
  FileText,
  AlertCircle,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";

const Submission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] mb-4">
            Paper Submission
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Submit your research paper through our official submission system.
            Please review all guidelines carefully before submission to ensure
            compliance with ICEBM 2026 publication standards.
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 mb-12 bg-cyan-50 border-l-4 border-l-cyan-500">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-7 w-7 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-sky-700 mb-2">
                  Important Notice
                </h3>
                <p className="text-slate-700">
                  Submission Deadline:{" "}
                  <strong className="text-cyan-600">Coming Soon</strong>. Please
                  ensure your manuscript follows IEEE formatting guidelines and
                  is submitted on time. Late submissions will not be accepted.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Submission Process */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-sky-700 mb-8">
            Submission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Prepare Paper",
                desc: "Format your paper using the IEEE conference template.",
              },
              {
                step: 2,
                title: "Register on EasyChair",
                desc: "Create or log in to your EasyChair account.",
              },
              {
                step: 3,
                title: "Submit Paper",
                desc: "Upload your PDF and fill in all required details.",
              },
              {
                step: 4,
                title: "Track Status",
                desc: "Monitor submission status and review progress.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Card className="p-8 text-center bg-white border border-cyan-100 rounded-2xl hover:shadow-[0_0_25px_#38bdf8] transition-all duration-300">
                  <div className="bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_#06b6d4]">
                    <span className="text-2xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-sky-700 mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pre-Submission Checklist */}
        <Card className="p-8 mb-16 border-t-4 border-t-sky-500 bg-white rounded-2xl shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <ClipboardList className="h-10 w-10 text-cyan-500 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-2 text-sky-700">
                Pre-Submission Checklist
              </h2>
              <p className="text-slate-700">
                Verify the following items before submitting your paper:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Paper follows IEEE conference format (two-column, 10pt font)",
              "Page count: 8–10 for full papers, 4–6 for short papers",
              "Title ≤ 15 words; abstract 150–250 words",
              "All figures and tables are clear and captioned",
              "References follow IEEE citation style",
              "Plagiarism < 15%",
              "All co-authors have approved the submission",
              "File is a single PDF under 10MB with embedded fonts",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-cyan-50 rounded-lg transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Technical Requirements */}
        <Card className="p-8 mb-16 bg-blue-50 border-l-4 border-l-cyan-500 rounded-2xl">
          <div className="flex items-start gap-4 mb-6">
            <FileText className="h-10 w-10 text-sky-600 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-2 text-sky-700">
                Technical Requirements
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
            <div>
              <h3 className="font-bold text-lg mb-3 text-cyan-700">
                Document Format
              </h3>
              <ul className="space-y-2">
                <li>• File Format: PDF only</li>
                <li>• Max File Size: 10 MB</li>
                <li>• Paper Size: US Letter (8.5 × 11 in)</li>
                <li>• Fonts: Embedded and subset</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-cyan-700">
                Content Requirements
              </h3>
              <ul className="space-y-2">
                <li>• Language: English</li>
                <li>• Full Papers: 8–10 pages</li>
                <li>• Short Papers: 4–6 pages</li>
                <li>• Plagiarism: Must be below 15%</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* EasyChair Submission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 text-center bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-3xl shadow-lg mb-16">
            <Upload className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Ready to Submit?</h2>
            <p className="text-lg opacity-90 mb-6">
              Use the official EasyChair submission system to upload your paper.
            </p>
            <Button
              size="lg"
              className="bg-white text-cyan-700 font-semibold hover:bg-cyan-100 transition-transform hover:scale-105"
            >
              Submit via EasyChair
            </Button>
            <p className="mt-4 text-sm opacity-80">
              (You will be redirected to the EasyChair submission portal)
            </p>
          </Card>
        </motion.div>

        {/* Review Process */}
        <Card className="p-10 border-t-4 border-t-cyan-500 rounded-2xl bg-white">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">
            Review Process
          </h2>
          <div className="space-y-5 text-slate-700 text-lg">
            {[
              "Initial Screening – Formatting and plagiarism check",
              "Double-Blind Review – Minimum two independent reviewers",
              "Review Period – Typically 2–3 weeks",
              "Decision Notification – Review comments via email",
              "Camera-Ready Submission – Revised version upload",
            ].map((step, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-cyan-600 font-bold">{index + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Submission;
