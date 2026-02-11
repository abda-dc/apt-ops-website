import React from 'react';
import { Phone, MessageCircle, Calendar, BarChart, CheckCircle, Settings, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: "AI Answers Every Call",
      description: "Your AI assistant picks up 24/7—even when you're on a ladder, under a sink, or driving between jobs. It greets callers with your business name. It understands your industry. It knows the difference between emergency and standard jobs.",
      details: [
        "What's the issue?",
        "When do they need service?",
        "Where are they located?",
        "Residential or commercial?"
      ],
      outcome: "It captures customer details and books the appointment directly into your calendar. No more voicemail. No more \"I'll call you back.\" Just instant answers and instant bookings."
    },
    {
      number: 2,
      icon: MessageCircle,
      title: "Instant Text Follow-Up",
      description: "Every lead gets a confirmation text within seconds. No waiting. No forgetting. No lost jobs.",
      details: [
        "Booked jobs get confirmation with date, time, and what to expect",
        "Missed calls get a follow-up text with scheduling link",
        "Appointments get reminders 24 hours before the job",
        "Follow-ups happen on your schedule (we set the rules, AI executes)"
      ],
      outcome: "Leads who get immediate follow-up are 5× more likely to book. Your AI does this while you're working."
    },
    {
      number: 3,
      icon: Calendar,
      title: "Jobs Auto-Sync to Your Calendar",
      description: "Appointments flow straight into your scheduling system. You show up. You work. You get paid.",
      details: [
        "Google Calendar",
        "Outlook",
        "ServiceTitan",
        "Housecall Pro",
        "Jobber",
        "Or your existing system"
      ],
      outcome: "We set buffer times between jobs. We handle conflicts automatically. We sync your team's schedules if you have multiple crews. You define the rules. The system executes them perfectly."
    },
    {
      number: 4,
      icon: BarChart,
      title: "Pipeline Visibility",
      description: "See every lead, every follow-up, and every opportunity in one dashboard.",
      details: [
        "Call volume and response times",
        "Conversion rates by lead source",
        "Booked jobs and revenue pipeline",
        "Follow-ups that need attention",
        "Team performance (if multi-crew)"
      ],
      outcome: "No more guessing where revenue went. No more lost leads falling through cracks. Just total visibility into your business. Make decisions based on data, not gut feel."
    }
  ];

  const timeline = [
    {
      week: "Week 1",
      icon: Settings,
      title: "Discovery & Configuration",
      items: [
        "We analyze your current workflow",
        "We configure AI for your specific industry and services",
        "We set up integrations with your existing tools",
        "We create your custom message templates"
      ]
    },
    {
      week: "Week 2",
      icon: Target,
      title: "Testing & Training",
      items: [
        "We test the system with real scenarios",
        "We train your team on the dashboard",
        "We fine-tune based on your feedback",
        "We prepare for launch"
      ]
    },
    {
      week: "Week 3",
      icon: Zap,
      title: "Launch & Optimization",
      items: [
        "System goes live",
        "We monitor performance daily",
        "We adjust and optimize based on real data",
        "You start capturing jobs you used to miss"
      ]
    },
    {
      week: "Ongoing",
      icon: TrendingUp,
      title: "Support & Growth",
      items: [
        "We optimize as your business grows",
        "We add new features as you need them",
        "We provide support when you have questions",
        "We scale the system as you scale"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-purple">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">From Missed Call to Booked Job in Minutes</h1>
            <p className="body-lg text-gray-300">
              We handle the tech. You handle the work. Here's exactly how it happens.
            </p>
            <p className="body-md text-gray-400 mt-4">
              Most systems go live in 2–3 weeks. No complicated onboarding. No months of setup. Just automation that works.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 0 ? 'bg-brand-dark' : 'bg-gradient-dark'}`}
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-xl bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-8 h-8 text-brand-purple" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-purple mb-2">Step {step.number}</div>
                  <h2 className="heading-md mb-4">{step.title}</h2>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{step.description}</p>

              <ul className="space-y-3 mb-6">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>

              <p className="text-white font-medium leading-relaxed">{step.outcome}</p>

              {index < steps.length - 1 && (
                <div className="flex justify-center mt-8">
                  <ArrowRight className="w-8 h-8 text-brand-purple" />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Setup Timeline */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-4">We Handle the Setup. You Handle Your Business.</h2>
            <p className="text-gray-400 text-center mb-16">Most contractors are live in 2–3 weeks. Some go faster.</p>

            <div className="grid md:grid-cols-2 gap-8">
              {timeline.map((phase, index) => (
                <div key={index} className="card card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                      <phase.icon className="w-6 h-6 text-brand-purple" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand-purple mb-1">{phase.week}</div>
                      <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-green text-lg">•</span>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Don't Have to Do */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center mb-12">What You Don't Have to Do</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Learn complicated software",
                "Train office staff",
                "Manage multiple tools",
                "Troubleshoot technical issues",
                "Worry about downtime"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400">
                  <span className="text-2xl text-red-500">✕</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-2xl font-semibold text-white mt-12">
              We handle all of that. You just show up and work.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-purple">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Ready to See Where You're Losing Revenue?</h2>
            <p className="body-lg text-gray-300 mb-4">
              Get your free automation audit and we'll show you:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">How many calls you're actually missing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">What those missed calls are costing you</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Which bottlenecks are killing your conversion rate</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Exactly how automation fixes each one</span>
              </li>
            </ul>
            <p className="text-gray-400 mb-10">
              No pressure. No sales pitch. Just a real breakdown of where opportunities are slipping through.
            </p>
            <Button href="/free-audit" className="text-lg px-10 py-5">
              Get Your Free Automation Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
