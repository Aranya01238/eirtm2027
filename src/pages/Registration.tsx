import { ArrowUpRight, BriefcaseBusiness, GraduationCap, UserRound, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const edasUrl = "https://edas.info/";

const fees = [
  { title: "Academic (1 Paper)", price: "€250", icon: GraduationCap, accent: "amber" },
  { title: "Academic (2 Papers)", price: "€350", icon: GraduationCap, accent: "amber" },
  { title: "Industry", price: "€400", icon: BriefcaseBusiness, accent: "cyan" },
  { title: "Attendee", price: "€150", icon: UsersRound, accent: "amber" },
];

const Registration = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50 px-4 py-14 text-slate-800 sm:px-6 lg:px-8">
    <motion.main className="mx-auto max-w-7xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <header className="mx-auto mb-14 max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-blue-600 sm:text-6xl">Registration</h1>
        <div className="mx-auto mt-5 h-1 w-28 bg-blue-500" />
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">Register for EIRTM 2027 and be part of an exciting academic event in Paris, France.</p>
      </header>

      <section className="mb-16 rounded-2xl border border-amber-200 border-l-4 border-l-amber-400 bg-amber-50/80 p-7 shadow-sm sm:p-8">
        <h2 className="mb-6 flex items-center gap-3 text-2xl font-extrabold text-slate-900"><span className="text-amber-500">✓</span>Important Registration Dates</h2>
        <div className="grid gap-5 text-lg md:grid-cols-3">
          <p><strong>Abstract Submission:</strong> 20th Dec, 2026</p>
          <p><strong>Full Paper Submission:</strong> 27th Dec, 2026</p>
          <p><strong>Registration Deadline:</strong> 04th Jan, 2027</p>
        </div>
        <p className="mt-5 font-semibold text-blue-700">Conference dates: 3–5th May, 2027</p>
      </section>

      <section className="mb-16">
        <h2 className="mb-9 text-center text-4xl font-extrabold text-blue-600">Registration Fees</h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {fees.map(({ title, price, icon: Icon, accent }) => (
            <Card key={title} className={`border-0 border-t-4 ${accent === "cyan" ? "border-t-blue-600" : "border-t-amber-400"} bg-white p-7 text-center shadow-[0_8px_25px_rgba(30,64,175,0.1)]`}>
              <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${accent === "cyan" ? "bg-blue-100 text-blue-600" : "bg-amber-50 text-amber-500"}`}><Icon className="h-9 w-9" /></div>
              <h3 className="mb-5 text-xl font-bold text-slate-900">{title}</h3>
              <div className="rounded-xl bg-slate-100 px-5 py-4"><p className="text-sm text-slate-500">Regular</p><p className="mt-1 text-3xl font-extrabold text-amber-500">{price}</p></div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">Fees are shown in EUR. Payment and confirmation instructions are provided through the registration portal.</p>
      </section>

      <section className="mb-16 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-14 text-center text-white shadow-xl sm:px-10">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Register & Submit</h2>
        <p className="mt-4 text-lg text-blue-50">Secure your place or submit your paper for EIRTM 2027 via EDAS.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50"><a href={edasUrl} target="_blank" rel="noreferrer">Register Now (EDAS) <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50"><a href={edasUrl} target="_blank" rel="noreferrer">Submit Paper (EDAS) <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
        </div>
        <p className="mt-7 text-sm text-blue-100">For registration queries, contact Sanghamitra@iem.edu.in</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card className="border-slate-200 bg-white p-7 shadow-sm"><div className="mb-4 flex items-center gap-3"><UserRound className="h-6 w-6 text-blue-600" /><h2 className="text-2xl font-bold text-blue-700">Registration includes</h2></div><ul className="space-y-3 text-slate-600"><li>Access to all conference sessions</li><li>Digital conference materials</li><li>Certificate of participation</li><li>Networking with researchers and industry professionals</li></ul></Card>
        <Card className="border-slate-200 bg-white p-7 shadow-sm"><div className="mb-4 flex items-center gap-3"><UsersRound className="h-6 w-6 text-blue-600" /><h2 className="text-2xl font-bold text-blue-700">Need help?</h2></div><p className="leading-relaxed text-slate-600">For questions about fees, payment, attendance mode, or accessibility, contact the conference team before completing registration.</p><a href="mailto:Sanghamitra@iem.edu.in" className="mt-5 inline-block font-semibold text-blue-600 hover:underline">Sanghamitra@iem.edu.in</a></Card>
      </section>
    </motion.main>
  </div>
);

export default Registration;
