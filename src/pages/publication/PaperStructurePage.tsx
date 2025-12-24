import React from 'react';
import PaperStructurePdf from '@/assets/ICEBM 2026-paper-format.pdf'; // Import the PDF file

const PaperStructurePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] pt-24 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            Paper Structure & Submission Guidelines
          </h1>
          <p className="text-lg text-[#1e293b] max-w-3xl mx-auto font-medium leading-relaxed">
            Please find below the detailed guidelines for the structure and formatting of your submitted papers. Adhering to these instructions is crucial for a successful submission to ICEBM 2026.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-sky-700">View Guidelines</h2>
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src={PaperStructurePdf}
              width="100%"
              height="600px" // You can adjust the height as needed
              style={{ border: 'none' }}
              title="Paper Structure and Submission Guidelines"
              className="rounded-lg shadow-lg"
            >
              This browser does not support PDFs. Please download the PDF to view it.
            </iframe>
          </div>
          <p className="text-center text-lg text-[#1e293b] font-medium">
            If the PDF does not load, you can download it directly:{" "}
            <a
              href={PaperStructurePdf}
              download="Paper-Structure-Submission-Guidelines-ICEBM2026.pdf"
              className="text-cyan-600 hover:underline font-semibold"
            >
              Download PDF
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaperStructurePage;
