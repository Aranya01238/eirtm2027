import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, Briefcase, GraduationCap, Globe } from "lucide-react";

const Registration = () => {
  const registrationCategories = [
    {
      category: "Indian Students",
      icon: GraduationCap,
      earlyBird: "₹4,000",
      regular: "₹5,000",
      color: "primary",
    },
    {
      category: "Indian Academicians",
      icon: Users,
      earlyBird: "₹6,000",
      regular: "₹7,500",
      color: "secondary",
    },
    {
      category: "Indian Industry",
      icon: Briefcase,
      earlyBird: "₹8,000",
      regular: "₹10,000",
      color: "primary",
    },
    {
      category: "Foreign Delegates",
      icon: Globe,
      earlyBird: "$200",
      regular: "$250",
      color: "secondary",
    },
  ];

  const benefits = [
    "Access to all technical sessions and keynote speeches",
    "Conference kit with proceedings (digital/print)",
    "Lunch and refreshments during conference days",
    "Certificate of participation",
    "Networking opportunities with global researchers",
    "Access to workshop sessions",
    "Publication in conference proceedings",
    "Entry to gala dinner (on registration basis)",
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
            Early bird registration closes on "".
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
              <strong>Early Bird Registration:</strong> Until ""
            </div>
            <div>
              <strong>Regular Registration:</strong> ""
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
                        Early Bird
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {item.earlyBird}
                      </p>
                    </div>
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
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              * All fees are per paper. Additional paper by the same author: Add
              50% of the registration fee
            </p>
          </div>
        </div>

        {/* Registration Benefits */}
        <Card className="p-8 mb-12 bg-muted">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Registration Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Payment Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 border-t-4 border-t-primary">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Payment Methods
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Bank Transfer (India)
                </h3>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <p>
                    <strong>Bank Name:</strong> State Bank of India
                  </p>
                  <p>
                    <strong>Account Name:</strong> ICEBM 2026
                  </p>
                  <p>
                    <strong>Account Number:</strong> XXXX XXXX XXXX
                  </p>
                  <p>
                    <strong>IFSC Code:</strong> SBINXXXXXXX
                  </p>
                  <p>
                    <strong>Branch:</strong> IEM Campus, Kolkata
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  International Wire Transfer
                </h3>
                <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                  <p>
                    <strong>SWIFT Code:</strong> SBINXXXXXXX
                  </p>
                  <p>
                    <strong>Bank Address:</strong> IEM Campus Branch, Kolkata,
                    India
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-t-4 border-t-secondary">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Registration Process
            </h2>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">1.</span>
                <div>
                  <strong>Submit Your Paper:</strong> Papers must be accepted
                  before registration
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">2.</span>
                <div>
                  <strong>Receive Acceptance:</strong> Wait for acceptance
                  notification
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">3.</span>
                <div>
                  <strong>Make Payment:</strong> Transfer the registration fee
                  to the provided account
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">4.</span>
                <div>
                  <strong>Submit Proof:</strong> Email payment proof to
                  registration@icebm2026.org
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold text-xl">5.</span>
                <div>
                  <strong>Get Confirmation:</strong> Receive registration
                  confirmation and participant ID
                </div>
              </li>
            </ol>
          </Card>
        </div>

        {/* Registration CTA */}
        <Card className="p-12 text-center bg-gradient-primary text-white">
          <h2 className="text-4xl font-bold mb-4">Register Now</h2>
          <p className="text-xl mb-8 opacity-90">
            Secure your spot at ICEBM 2026 with early bird rates
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6"
          >
            Complete Registration
          </Button>
          <p className="mt-6 text-sm opacity-75">
            For registration queries, contact: registration@icebm2026.org
          </p>
        </Card>

        {/* Cancellation Policy */}
        <Card className="p-8 mt-12 bg-muted">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Cancellation & Refund Policy
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              • Cancellations before "February 1, 2026": 80% refund (processing
              fee deducted)
            </p>
            <p>• Cancellations between "February 1-20, 2026": 50% refund</p>
            <p>• Cancellations after "February 20, 2025": No refund</p>
            <p>
              • In case of conference cancellation, full refund will be
              processed within 30 days
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
