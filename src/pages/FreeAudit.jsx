import React, { useState } from 'react';
import { BarChart, DollarSign, Search, Map, Shield, Calendar, Settings, FileText, ThumbsUp, Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';

export const FreeAudit = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    bottleneck: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsIncluded = [
    {
      icon: BarChart,
      title: "Call Volume Analysis",
      description: "We'll analyze how many calls you're getting, when they're coming in, and how many you're actually answering. Most contractors are shocked by the numbers."
    },
    {
      icon: DollarSign,
      title: "Missed Opportunity Calculation",
      description: "We'll calculate what those missed calls are costing you. Real dollar amounts based on your average job value and industry conversion rates."
    },
    {
      icon: Search,
      title: "Bottleneck Identification",
      description: "We'll show you exactly where your intake process is breaking down: slow follow-up, manual scheduling, no pipeline visibility, or all of the above."
    },
    {
      icon: Map,
      title: "Custom Automation Roadmap",
      description: "We'll design a specific system for your business. Not a generic template—a roadmap that solves your actual bottlenecks."
    },
    {
      icon: Shield,
      title: "No-Obligation Recommendation",
      description: "We'll tell you if automation makes sense for you right now. If it doesn't, we'll say so. This isn't a sales call disguised as an audit."
    }
  ];

  const nextSteps = [
    {
      number: 1,
      icon: Calendar,
      title: "Book a 30-Minute Call",
      description: "Pick a time that works for you. We'll ask about your business, your current process, and your biggest pain points."
    },
    {
      number: 2,
      icon: Settings,
      title: "We Analyze Your Setup",
      description: "We'll review your call volume, follow-up speed, scheduling process, and pipeline visibility. This takes us about a week."
    },
    {
      number: 3,
      icon: FileText,
      title: "You Get a Custom Plan",
      description: "We'll show you exactly where you're losing jobs and what automation fixes each one. Specific systems. Real outcomes. Zero pressure."
    },
    {
      number: 4,
      icon: ThumbsUp,
      title: "You Decide",
      description: "If it makes sense, we move forward. If it doesn't, you walk away with a clear breakdown of your bottlenecks—no hard feelings."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-purple">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Get Your Free Automation Audit</h1>
            <p className="body-lg text-gray-300 mb-4">
              See exactly where you're losing revenue—and how to fix it.
            </p>
            <p className="body-md text-gray-400">
              No pressure. No sales pitch. Just a real breakdown of where jobs are slipping through the cracks and what automation can do about it.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What's Included in Your Free Audit</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whatsIncluded.map((item, index) => (
              <div key={index} className="card card-hover">
                <div className="w-12 h-12 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What Happens Next</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-16 h-16 rounded-xl bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-8 h-8 text-brand-purple" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-purple mb-1">Step {step.number}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-md text-center mb-12">Book Your Free Audit</h2>
            
            {submitted ? (
              <div className="bg-brand-green/10 border border-brand-green/30 rounded-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
                <p className="text-gray-300 mb-4">
                  We've received your audit request. Check your email for next steps.
                </p>
                <p className="text-gray-400 text-sm">
                  We'll typically reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-purple transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Best Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-purple transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-purple transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Business *
                  </label>
                  <select
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-purple transition-colors"
                  >
                    <option value="">Select your business type</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="hvac">HVAC</option>
                    <option value="electrical">Electrical</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="roofing">Roofing</option>
                    <option value="general-contractor">General Contractor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bottleneck" className="block text-sm font-medium text-gray-300 mb-2">
                    What's Your Biggest Bottleneck? (Optional)
                  </label>
                  <textarea
                    id="bottleneck"
                    name="bottleneck"
                    value={formData.bottleneck}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-purple transition-colors resize-none"
                    placeholder="Missed calls? Slow follow-up? Scheduling chaos? Pipeline visibility? Tell us what's costing you the most time or revenue."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary text-lg"
                >
                  Get My Free Audit
                </button>

                <p className="text-center text-sm text-gray-400">
                  No credit card required • Takes 30 minutes • No sales pitch
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">No Pressure. No Gimmicks. Just Real Solutions.</h2>
            <p className="body-md text-gray-300 mb-6">
              We're not here to sell you something you don't need. We're here to show you where automation can help you book more jobs without hiring more people.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg p-6">
                <p className="text-white font-semibold mb-2">If it's not a fit, we'll tell you.</p>
                <p className="text-gray-400 text-sm">No hard feelings. You'll still walk away with valuable insights about your business.</p>
              </div>
              <div className="bg-brand-green/10 border border-brand-green/30 rounded-lg p-6">
                <p className="text-white font-semibold mb-2">If it is a fit, you'll know exactly what to expect.</p>
                <p className="text-gray-400 text-sm">Clear timeline. Real outcomes. Transparent pricing. No surprises.</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg mt-8">That's the deal.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-sm mb-8">Questions? Just Ask.</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <Mail className="w-8 h-8 text-brand-purple mx-auto mb-3" />
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <a href="mailto:info@aptops.com" className="text-white hover:text-brand-purple transition-colors">
                  info@aptops.com
                </a>
              </div>
              <div className="card">
                <Phone className="w-8 h-8 text-brand-purple mx-auto mb-3" />
                <p className="text-gray-400 text-sm mb-2">Phone</p>
                <p className="text-white">(555) 123-4567</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm">
              We typically respond within 2 hours during business hours (9 AM – 6 PM EST, Monday – Friday).
            </p>
            <p className="text-gray-400 text-sm mt-2">
              If you'd rather talk first before booking, just send us an email or give us a call. We're happy to answer questions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
