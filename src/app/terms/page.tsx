export default function TermsPage() {
  const lastUpdated = "July 16, 2026";

  return (
    <div className="flex flex-col items-center animate-fade-in w-full max-w-4xl mx-auto py-12">
      
      {/* Header */}
      <div className="w-full mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Terms of Service
        </h1>
        <p className="text-zinc-400">
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Content */}
      <div className="w-full text-zinc-300 leading-relaxed">
        
        <p className="text-lg mb-8">
          Welcome to Exclamatory. By accessing our website or using our software ecosystem, including Qaave, you agree to be bound by these Terms of Service. Please read them carefully before using our products.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By downloading, installing, or using any product from Exclamatory, you agree to comply with and be bound by these terms. If you do not agree to these terms, please do not use our services or applications.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
          <p className="mb-4">
            Exclamatory grants you a personal, non-exclusive, non-transferable, limited privilege to enter and use our software ecosystem. Under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Modify, copy, or distribute the materials without permission.</li>
            <li>Attempt to decompile or reverse engineer any software contained in Exclamatory's ecosystem (including the Qaave APK).</li>
            <li>Remove any copyright or other proprietary notations from the software.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials and software on Exclamatory's ecosystem are provided on an &apos;as is&apos; basis. Exclamatory makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations of Liability</h2>
          <p className="mb-4">
            In no event shall Exclamatory, its founder, or its team be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our software, even if we have been notified of the possibility of such damage.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of Bangladesh. You irrevocably submit to the exclusive jurisdiction of the courts in Bogura, Bangladesh for the resolution of any disputes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">6. Contact</h2>
          <p className="mb-4">
            For any questions regarding these Terms of Service, please contact our legal team at legal@exclamatory.com.
          </p>
        </section>

      </div>
    </div>
  );
}