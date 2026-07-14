import { Card } from "@/components/ui/card";
import { BookOpen, FileText, List, Quote } from "lucide-react";

const Publication = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Publication Opportunities</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            All accepted papers will be published in conference proceedings and selected papers
            will be recommended for journal publication.
          </p>
        </div>

        {/* Conference Proceedings */}
        <section id="proceedings" className="mb-16 scroll-mt-24">
          <Card className="p-8 border-t-4 border-t-primary">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-primary">Conference Proceedings</h2>
                <p className="text-muted-foreground">Published and Indexed</p>
              </div>
            </div>
            <div className="space-y-4 text-lg">
              <p>
                All accepted and registered papers will be published in the conference proceedings
                with the following features:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex gap-3">
                  <span className="text-secondary">•</span>
                  <span>
                    <strong>ISBN:</strong> Each proceeding volume will be assigned a unique ISBN
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">•</span>
                  <span>
                    <strong>Indexing:</strong> Proceedings will be submitted for indexing in Google
                    Scholar, ResearchGate, and other academic databases
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">•</span>
                  <span>
                    <strong>Digital Library:</strong> Available in major digital libraries and
                    repositories
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary">•</span>
                  <span>
                    <strong>Open Access:</strong> Options available for open access publication
                  </span>
                </li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Journal Publication */}
        <section id="journal" className="mb-16 scroll-mt-24">
          <Card className="p-8 border-t-4 border-t-secondary bg-muted">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="h-10 w-10 text-secondary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-primary">Journal Publication</h2>
                <p className="text-muted-foreground">Extended Versions in Reputed Journals</p>
              </div>
            </div>
            <div className="space-y-4 text-lg">
              <p>
                Selected high-quality papers will be recommended for publication in reputed
                international journals:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-primary">Scopus Indexed Journals</h3>
                  <p className="text-muted-foreground">
                    Extended versions of selected papers will be published in Scopus-indexed
                    journals after additional review
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-primary">
                    SCI/SCIE Journals (Subject to Review)
                  </h3>
                  <p className="text-muted-foreground">
                    Outstanding papers may be recommended for publication in SCI/SCIE indexed
                    journals
                  </p>
                </div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg mt-6 border-l-4 border-l-secondary">
                <p className="font-semibold mb-2">Note:</p>
                <p className="text-muted-foreground">
                  Authors will need to submit extended versions with at least 40% new content for
                  journal publication. Additional processing fees may apply as per journal
                  policies.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Paper Structure */}
        <section id="structure" className="mb-16 scroll-mt-24">
          <Card className="p-8 border-t-4 border-t-primary">
            <div className="flex items-start gap-4 mb-6">
              <List className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-primary">Paper Structure Guidelines</h2>
                <p className="text-muted-foreground">IEEE Conference Format</p>
              </div>
            </div>
            <div className="space-y-6 text-lg">
              <div>
                <h3 className="font-bold text-xl mb-3">Required Sections:</h3>
                <ol className="space-y-4 ml-6">
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">1.</span>
                    <div>
                      <strong>Title:</strong> Concise and descriptive (maximum 15 words)
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">2.</span>
                    <div>
                      <strong>Authors and Affiliations:</strong> Full names, affiliations, and
                      email addresses
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">3.</span>
                    <div>
                      <strong>Abstract:</strong> 150-250 words summarizing objectives, methods,
                      results, and conclusions
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">4.</span>
                    <div>
                      <strong>Keywords:</strong> 4-6 keywords for indexing purposes
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">5.</span>
                    <div>
                      <strong>Introduction:</strong> Background, motivation, and objectives
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">6.</span>
                    <div>
                      <strong>Literature Review:</strong> Related work and research gap
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">7.</span>
                    <div>
                      <strong>Methodology:</strong> Detailed description of approach and methods
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">8.</span>
                    <div>
                      <strong>Results and Discussion:</strong> Analysis and interpretation of
                      findings
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">9.</span>
                    <div>
                      <strong>Conclusion:</strong> Summary and future scope
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary font-bold">10.</span>
                    <div>
                      <strong>References:</strong> Properly cited sources
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Formatting Requirements:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>Use IEEE conference template (two-column format)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>Font: Times New Roman, 10pt</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>Page limit: 8-10 pages for full papers, 4-6 for short papers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>Margins: 1 inch on all sides</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>File format: PDF with embedded fonts</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Referencing Style */}
        <section id="referencing" className="mb-16 scroll-mt-24">
          <Card className="p-8 border-t-4 border-t-secondary bg-muted">
            <div className="flex items-start gap-4 mb-6">
              <Quote className="h-10 w-10 text-secondary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-2 text-primary">
                  Style of Referencing
                </h2>
                <p className="text-muted-foreground">IEEE Citation Style</p>
              </div>
            </div>
            <div className="space-y-6 text-lg">
              <p>
                All papers must follow the <strong>IEEE citation style</strong> for references.
              </p>

              <div>
                <h3 className="font-bold text-xl mb-3">Examples:</h3>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Journal Article:</h4>
                    <code className="text-sm text-muted-foreground block">
                      [1] A. Author, B. Author, and C. Author, "Title of article," Journal Name,
                      vol. X, no. Y, pp. ZZ-ZZ, Month Year.
                    </code>
                  </div>

                  <div className="bg-card p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Conference Paper:</h4>
                    <code className="text-sm text-muted-foreground block">
                      [2] A. Author and B. Author, "Title of paper," in Proc. Conference Name,
                      City, State, Year, pp. ZZ-ZZ.
                    </code>
                  </div>

                  <div className="bg-card p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Book:</h4>
                    <code className="text-sm text-muted-foreground block">
                      [3] A. Author, Title of Book, Edition. City: Publisher, Year.
                    </code>
                  </div>

                  <div className="bg-card p-6 rounded-lg">
                    <h4 className="font-semibold mb-2">Website:</h4>
                    <code className="text-sm text-muted-foreground block">
                      [4] Author, "Title of document," Website Name. [Online]. Available:
                      http://www.url.com. [Accessed: Month Day, Year].
                    </code>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-l-primary">
                <p className="font-semibold mb-2">Important Notes:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>Citations in text should use numerical format [1], [2], etc.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>References must be numbered in order of appearance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>All cited references must be listed in the reference section</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-secondary">•</span>
                    <span>Avoid citing unpublished work or personal communications</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Publication;
