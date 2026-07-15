export default function PrivacyPolicyPage() {
  // Current date dynamic korar jonno
  const lastUpdated = "July 16, 2026";

  return (
    <div className="flex flex-col items-center animate-fade-in w-full max-w-4xl mx-auto py-12">
      
      {/* Header */}
      <div className="w-full mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Privacy Policy
        </h1>
        <p className="text-zinc-400">
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Content */}
      <div className="w-full prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed">
        
        <p className="text-lg mb-8">
          At Exclamatory, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our software ecosystem, including Qaave.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways. The information we may collect via our ecosystem includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Personal Data:</strong> Name, email address, and demographic information that you voluntarily give to us when registering for the application.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the app, such as your IP address, browser type, and operating system.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Create and manage your account.</li>
            <li>Deliver targeted advertising, coupons, newsletters, and other information regarding our ecosystem.</li>
            <li>Monitor and analyze usage and trends to improve your experience.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Disclosure of Your Information</h2>
          <p className="mb-4">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process.</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, or financing.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Security of Your Information</h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
            <p className="font-medium text-white">Exclamatory HQ</p>
            <p>Bogura, Bangladesh</p>
            <p>Email: legal@exclamatory.com</p>
          </div>
        </section>

      </div>
    </div>
  );
}