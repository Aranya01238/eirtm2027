import { ArrowUpRight, Check, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const edasUrl = "https://edas.info/";

const steps = [
  { title: "Step 1: Prepare Paper", text: "Format your paper using the official conference template." },
  { title: "Step 2: Register on EDAS", text: "Create or log in to your EDAS account." },
  { title: "Step 3: Submit Paper", text: "Upload your PDF and fill in all required details." },
  { title: "Step 4: Track Status", text: "Monitor submission status and review progress." },
];

const Submission = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50 px-4 py-14 text-slate-800 sm:px-6 lg:px-8">
    <motion.main className="mx-auto max-w-7xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <header className="mx-auto mb-14 max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-cyan-600 sm:text-6xl">Paper Submission</h1>
        <div className="mx-auto mt-5 h-1 w-28 bg-cyan-500" />
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          Submit your research paper through our official submission system. Please review all guidelines carefully before submission to ensure compliance with EIRTM 2027 publication standards.
        </p>
        <Button asChild size="lg" className="mt-8 bg-cyan-600 px-8 text-white shadow-lg hover:bg-cyan-700">
          <a href={edasUrl} target="_blank" rel="noreferrer">Submit Via EDAS <ExternalLink className="ml-2 h-4 w-4" /></a>
        </Button>
        <p className="mt-3 text-sm text-cyan-600">You will be redirected to the EDAS submission portal.</p>
      </header>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-4xl font-extrabold text-sky-700">Submission Process</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title} className="border-0 bg-white p-7 text-center shadow-[0_8px_25px_rgba(14,116,144,0.1)]">
              <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-cyan-100 text-cyan-700"><span className="font-bold">{index + 1}</span></div>
              <h3 className="mb-3 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="leading-relaxed text-slate-600">{step.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 rounded-3xl bg-gradient-to-r from-cyan-500 to-sky-600 px-6 py-14 text-center text-white shadow-xl sm:px-10">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to Submit?</h2>
        <p className="mt-4 text-lg text-cyan-50">Use the official EDAS submission system to upload your paper.</p>
        <Button asChild size="lg" className="mt-8 bg-white text-cyan-700 hover:bg-cyan-50">
          <a href={edasUrl} target="_blank" rel="noreferrer">Submit Via EDAS <ArrowUpRight className="ml-2 h-4 w-4" /></a>
        </Button>
        <p className="mt-4 text-sm text-cyan-100">Abstract deadline: 20th Dec, 2026 · Full paper deadline: 27th Dec, 2026</p>
      </section>

      <section className="rounded-2xl border-t-4 border-cyan-500 bg-white p-7 shadow-sm sm:p-10">
        <h2 className="mb-7 text-3xl font-extrabold text-sky-700">Review Process</h2>
        <ol className="space-y-5 text-lg text-slate-700">
          {[
            "Initial Screening – Formatting and plagiarism check",
            "Double-Blind Review – Minimum two independent reviewers",
            "Review Period – Typically 2–3 weeks",
            "Decision Notification – Review comments via email",
            "Camera-Ready Submission – Revised version upload",
          ].map((item, index) => (
            <li key={item} className="flex gap-4"><span className="font-bold text-cyan-600">{index + 1}.</span><span>{item}</span></li>
          ))}
        </ol>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild variant="outline" className="border-cyan-600 text-cyan-700 hover:bg-cyan-50"><Link to="/publication/structure"><FileText className="mr-2 h-4 w-4" />View paper structure</Link></Button>
          <span className="inline-flex items-center gap-2 px-2 py-2 text-sm text-slate-500"><Check className="h-4 w-4 text-cyan-600" />Original, unpublished research only</span>
        </div>
      </section>
    </motion.main>
  </div>
);

export default Submission;
