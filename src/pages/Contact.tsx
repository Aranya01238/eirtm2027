import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Have questions about{" "}
            <span className="text-sky-600 font-semibold">ICEBM 2026</span>?
            Reach out to us through any of the following channels, or send us a
            message directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Form */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Card className="p-10 border-t-4 border-t-cyan-500 bg-white rounded-2xl shadow-sm hover:shadow-[0_0_20px_#38bdf8] transition-all">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your inquiry about?"
                    className="focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    required
                    className="focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-cyan-500 hover:bg-sky-500 text-white font-semibold shadow-md hover:shadow-[0_0_15px_#06b6d4] transition-transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-10 border-t-4 border-t-sky-500 bg-white rounded-2xl shadow-sm hover:shadow-[0_0_20px_#38bdf8] transition-all">
              <h2 className="text-2xl font-bold mb-6 text-sky-700">
                Contact Information
              </h2>
              <div className="space-y-6 text-slate-700">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-50 p-3 rounded-lg shadow-sm">
                    <Mail className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sky-700">Email</h3>
                    <p>
                      <a
                        href="mailto:info@icebm2026.org"
                        className="text-cyan-600 hover:underline"
                      >
                        info@icebm2026.org
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:support@icebm2026.org"
                        className="text-cyan-600 hover:underline"
                      >
                        support@icebm2026.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-50 p-3 rounded-lg shadow-sm">
                    <Phone className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sky-700">Phone</h3>
                    <p>+91 98765 43210</p>
                    <p>+91 91234 56789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-50 p-3 rounded-lg shadow-sm">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sky-700">Address</h3>
                    <p>
                      Institute of Engineering & Management <br />
                      Salt Lake City, Sector V <br />
                      Kolkata – 700091, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-blue-50 rounded-2xl">
              <h3 className="font-bold text-xl mb-4 text-sky-700">
                Specific Queries
              </h3>
              <div className="space-y-2 text-slate-700">
                <p>
                  <strong>Paper Submission:</strong>{" "}
                  <a
                    href="mailto:submission@icebm2026.org"
                    className="text-cyan-600 hover:underline"
                  >
                    submission@icebm2026.org
                  </a>
                </p>
                <p>
                  <strong>Registration:</strong>{" "}
                  <a
                    href="mailto:registration@icebm2026.org"
                    className="text-cyan-600 hover:underline"
                  >
                    registration@icebm2026.org
                  </a>
                </p>
                <p>
                  <strong>Sponsorship:</strong>{" "}
                  <a
                    href="mailto:sponsorship@icebm2026.org"
                    className="text-cyan-600 hover:underline"
                  >
                    sponsorship@icebm2026.org
                  </a>
                </p>
                <p>
                  <strong>Technical Support:</strong>{" "}
                  <a
                    href="mailto:technical@icebm2026.org"
                    className="text-cyan-600 hover:underline"
                  >
                    technical@icebm2026.org
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Location Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 border-t-4 border-t-cyan-500 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-sky-700">Location</h2>
            <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl flex items-center justify-center shadow-inner">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-cyan-400 mx-auto mb-4 opacity-60" />
                <p className="text-slate-600 font-medium">
                  Interactive Map will be embedded here
                  <br />
                  <span className="text-sm text-sky-600">
                    (IEM Kolkata Campus)
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
