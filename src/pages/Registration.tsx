import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, Briefcase, GraduationCap, ExternalLink } from "lucide-react";

const Registration = () => {
  const registrationCategories = [
    {
      category: "Academic (1 Paper)",
      icon: GraduationCap,
      regular: "€250",
      color: "secondary",
    },
    {
      category: "Academic (2 Papers)",
      icon: GraduationCap,
      regular: "€350",
      color: "secondary",
    },
    {
      category: "Industry",
      icon: Briefcase,
      regular: "€400",
      color: "primary",
    },
    {
      category: "Attendee",
      icon: Users,
      regular: "€150",
      color: "secondary",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Registration</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Register for ICEBM 2026 and be part of an exciting academic event.
          </p>
        </div>

        {/* Important Dates */}
        <Card className="p-6 mb-12 bg-secondary/10 border-l-4 border-l-secondary">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <Check className="h-6 w-6 text-secondary" />
            Important Registration Dates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <div>
              <strong>Registration:</strong> Until ""
            </div>
            <div>
              <strong>Late Registration:</strong> ""
            </div>
          </div>
        </Card>

        {/* Registration Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Registration Fees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationCategories.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 card-hover border-t-4 ${
                    item.color === "primary"
                      ? "border-t-primary"
                      : "border-t-secondary"
                  }`}
                >
                  <div
                    className={`${
                      item.color === "primary"
                        ? "bg-primary/10"
                        : "bg-secondary/10"
                    } rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon
                      className={`h-8 w-8 ${
                        item.color === "primary"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">
                    {item.category}
                  </h3>
                  <div className="space-y-3">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">
                        Regular
                      </p>
                      <p className="text-2xl font-bold text-secondary">
                        {item.regular}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Registration CTA with Updated Links */}
        <Card className="p-12 text-center bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Register & Submit</h2>
            <p className="text-xl mb-10 opacity-90">
              Secure your spot or submit your paper for ICEBM 2026 via EDAS
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              
              {/* Updated Button 1: Register Now */}
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-7 h-auto w-full md:w-auto min-w-[280px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 rounded-xl group"
                onClick={() =>
                  window.open("https://edas.info/newPaper.php?c=34692", "_blank")
                }
              >
                <span>Register Now (EDAS)</span>
                <ExternalLink className="ml-2 h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Button>

              {/* Updated Button 2: Submit Paper */}
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-7 h-auto w-full md:w-auto min-w-[280px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 rounded-xl group"
                onClick={() =>
                  window.open("https://edas.info/newPaper.php?c=34692", "_blank")
                }
              >
                <span>Submit Paper (EDAS)</span>
                <ExternalLink className="ml-2 h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>

            <p className="mt-8 text-sm opacity-75">
              For registration queries, contact: registration@icebm2026.org
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
