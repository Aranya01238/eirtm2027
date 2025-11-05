import { Card } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const Gallery = () => {
  // Placeholder for gallery images
  const galleryPlaceholders = Array(12).fill(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore moments from previous EIRTM conferences and related events.
            Witness the collaboration, innovation, and networking that make
            ICEBM a premier academic gathering.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <Card className="p-8 mb-12 bg-secondary/10 border-l-4 border-l-secondary text-center">
          <ImageIcon className="h-16 w-16 text-secondary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Gallery Coming Soon</h2>
          <p className="text-lg text-muted-foreground">
            Photos from ICEBM 2026 will be uploaded here during and after the
            conference. Check back soon to see highlights from keynote sessions,
            paper presentations, networking events, and more.
          </p>
        </Card>

        {/* Gallery Grid (Placeholder) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPlaceholders.map((_, index) => (
            <Card
              key={index}
              className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center card-hover overflow-hidden"
            >
              <div className="text-center p-6">
                <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2 opacity-30" />
                <p className="text-sm text-muted-foreground">
                  Image {index + 1}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Past Conference Highlights */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            What to Expect at ICEBM 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="bg-primary/10 rounded-lg p-6 mb-4">
                <h3 className="text-4xl font-bold text-primary mb-2">300+</h3>
                <p className="text-muted-foreground">Expected Participants</p>
              </div>
              <p className="text-sm">
                Researchers and professionals from around the world
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-secondary/10 rounded-lg p-6 mb-4">
                <h3 className="text-4xl font-bold text-secondary mb-2">50+</h3>
                <p className="text-muted-foreground">Paper Presentations</p>
              </div>
              <p className="text-sm">
                Cutting-edge research across multiple domains
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-primary/10 rounded-lg p-6 mb-4">
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Keynote Sessions</p>
              </div>
              <p className="text-sm">
                Insights from industry leaders and academics
              </p>
            </Card>
          </div>
        </div>

        {/* Photo Submission */}
        <Card className="p-8 mt-12 bg-muted border-t-4 border-t-primary">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Share Your ICEBM Moments
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Attended a previous EIRTM conference? We'd love to feature your
            photos in our gallery! Send your high-resolution images to us.
          </p>
          <p className="text-muted-foreground">
            Email:{" "}
            <a
              href="mailto:gallery@eirtm2025.org"
              className="text-primary hover:underline font-semibold"
            >
              gallery@eirtm2025.org
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;
