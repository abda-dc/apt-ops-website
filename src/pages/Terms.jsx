import React from 'react';

export const Terms = () => {
  return (
    <div className="min-h-screen pt-20 bg-white text-gray-900">
      <div className="container-custom section-padding max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: February 10, 2026</p>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            Please read these Terms of Service ("Terms") carefully before using the APT OPS website and services operated by <strong>APT OPS</strong> ("we," "us," or "our").
          </p>
          <p>
            Your access to and use of our services is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use our services.
          </p>
          <p className="font-semibold">
            By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
          <p>APT OPS provides AI-powered automation services for home service businesses, including but not limited to: AI voice answering systems, Automated text messaging and follow-up, Calendar and scheduling integration, CRM integration and pipeline management.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">User Accounts</h2>
          <p>When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account password and all activities that occur under your account.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
          <p>Our services and their original content, features, and functionality are owned by APT OPS and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p className="font-semibold">
            To the maximum extent permitted by law, APT OPS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <p><strong>Email:</strong> info@aptops.com<br />
          <strong>Phone:</strong> (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};
