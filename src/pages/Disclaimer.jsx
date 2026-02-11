import React from 'react';

export const Disclaimer = () => {
  return (
    <div className="min-h-screen pt-20 bg-white text-gray-900">
      <div className="container-custom section-padding max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: February 10, 2026</p>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            The information provided by <strong>APT OPS</strong> on our website and through our services is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">No Professional Advice</h2>
          <p>The content on our website and services does not constitute professional business, financial, legal, or technical advice. You should consult with appropriate professionals before making any business decisions or implementing any automation systems.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Results Not Guaranteed</h2>
          <p>While we strive to provide effective automation solutions, we cannot guarantee specific business results, including but not limited to: Increased revenue, Improved conversion rates, Reduced missed calls, Specific ROI or performance metrics.</p>
          <p>Results vary based on numerous factors including industry, market conditions, business operations, and implementation quality.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technical Limitations</h2>
          <p>AI and automation technology has inherent limitations. Our systems may not handle all edge cases or unusual scenarios, require proper configuration and integration to function optimally, and depend on factors outside our control (internet connectivity, third-party services, etc.).</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Testimonials Disclaimer</h2>
          <p>Any testimonials, case studies, or examples used on our website represent individual experiences and results. They do not guarantee that you will achieve the same or similar results. Your results will depend on numerous factors including your industry, business practices, market conditions, and level of engagement with our services.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about this Disclaimer, please contact us:</p>
          <p><strong>Email:</strong> info@aptops.com<br />
          <strong>Phone:</strong> (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};
