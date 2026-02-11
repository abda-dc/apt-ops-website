import React from 'react';

export const Privacy = () => {
  return (
    <div className="min-h-screen pt-20 bg-white text-gray-900">
      <div className="container-custom section-padding max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: February 10, 2026</p>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            <strong>APT OPS</strong> ("we," "us," or "our") operates this website and provides AI automation services for home service businesses. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fill out contact forms or request a free audit</li>
            <li>Sign up for our services</li>
            <li>Subscribe to our newsletter or communications</li>
            <li>Contact us via email or phone</li>
          </ul>
          <p>This information may include: Name, Email address, Phone number, Business name and type, Business address, Information about your business operations and pain points.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information about your device, including: IP address, Browser type and version, Time zone setting and location, Operating system and platform, Pages you visit and how you interact with our website.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our services</li>
            <li>Process your automation audit requests and service inquiries</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Monitor and analyze usage and trends to improve our services</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p><strong>Email:</strong> info@aptops.com<br />
          <strong>Phone:</strong> (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};
