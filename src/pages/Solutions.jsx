import React from 'react';
import { Phone, MessageCircle, Calendar, BarChart, CheckCircle, Zap, Bell, TrendingUp, RotateCw, CheckSquare, Users, Eye, Target, Workflow } from 'lucide-react';
import { Button } from '../components/Button';

export const Solutions = () => {
  const solutions = [
    {
      icon: Phone,
      title: "AI Voice Answering",
      problem: "You're on a roof. Under a sink. Driving between jobs. Your phone rings. You can't answer. The caller hangs up and dials the next contractor. Every missed call is a lost job.",
      howItWorks: [
        "Your AI assistant answers 24/7 with your business name and greeting",
        "Qualifies the lead: emergency or standard? residential or commercial?",
        "Captures customer details: name, address, issue description, preferred timing",
        "Books the appointment directly into your calendar—or routes to your team",
        "Sends confirmation text immediately"
      ],
      outcome: "You never miss a job because you were too busy working. Emergency calls at 9 PM get answered. Weekend inquiries get booked. You capture revenue that used to disappear.",
      color: "purple"
    },
    {
      icon: MessageCircle,
      title: "Instant Text Follow-Up",
      problem: "You finally call the lead back 3 hours later. They don't answer. You leave a voicemail. They never call back. You never hear from them again. Speed wins jobs. Waiting loses them.",
      howItWorks: [
        "Every call—answered or missed—triggers an instant text",
        "Confirmation texts for booked jobs with date, time, and next steps",
        "Follow-up texts for missed calls with scheduling link",
        "Automated appointment reminders 24 hours before the job",
        "Custom message templates for different job types"
      ],
      outcome: "Leads who get immediate follow-up are 5× more likely to book. You stop losing jobs to contractors who text back faster. Your no-show rate drops by 60%+.",
      color: "green"
    },
    {
      icon: Calendar,
      title: "Automated Scheduling",
      problem: "You're texting back and forth for 20 minutes trying to find a time that works. You double-book Tuesday. You forget about the Thursday job until the customer calls asking where you are. Manual scheduling doesn't scale.",
      howItWorks: [
        "Jobs sync automatically from AI calls and text conversations",
        "Calendar integration with Google Calendar, Outlook, or your existing system",
        "Buffer time between jobs (you define the rules)",
        "Automatic conflict detection—no more double bookings",
        "Team scheduling for multi-crew operations"
      ],
      outcome: "Your calendar fills itself. You show up to the right job at the right time. No back-and-forth. No missed appointments. Just clean, organized scheduling that actually works.",
      color: "purple"
    },
    {
      icon: BarChart,
      title: "CRM Integration & Pipeline Visibility",
      problem: "You have no idea how many leads came in last week. You don't know your conversion rate. You can't tell which lead source is working. You're flying blind. You can't optimize what you can't see.",
      howItWorks: [
        "Every call, text, and booking flows into one unified dashboard",
        "Track lead source, response time, conversion rate, and revenue per job",
        "See your pipeline in real time: new leads, follow-ups needed, jobs booked",
        "Automatic tagging by job type, urgency, and value",
        "Integrates with your existing tools (QuickBooks, ServiceTitan, Housecall Pro, etc.)"
      ],
      outcome: "You see exactly where revenue is coming from and where it's leaking. You know your numbers. You make decisions based on data instead of gut feel. You grow strategically instead of randomly.",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-purple">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">What We Automate</h1>
            <p className="body-lg text-gray-300">
              Stop losing revenue to missed calls, slow follow-up, and manual chaos. Here's exactly what we build for contractors.
            </p>
            <p className="body-md text-gray-400 mt-4">
              Every system is custom-configured for your business. You don't adapt to the software—it adapts to you.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 0 ? 'bg-brand-dark' : 'bg-gradient-dark'}`}
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-xl ${solution.color === 'purple' ? 'bg-brand-purple/20' : 'bg-brand-green/20'} flex items-center justify-center`}>
                  <solution.icon className={`w-8 h-8 ${solution.color === 'purple' ? 'text-brand-purple' : 'text-brand-green'}`} />
                </div>
                <h2 className="heading-md">{solution.title}</h2>
              </div>

              {/* Problem */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-white">The Problem</h3>
                <p className="text-gray-300 leading-relaxed">{solution.problem}</p>
              </div>

              {/* How It Works */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">How It Works</h3>
                <ul className="space-y-3">
                  {solution.howItWorks.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${solution.color === 'purple' ? 'text-brand-purple' : 'text-brand-green'}`} />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-white">The Outcome</h3>
                <p className="text-gray-300 leading-relaxed">{solution.outcome}</p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button href="/free-audit">Get Your Free Audit</Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How These Systems Work Together */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">How These Systems Work Together</h2>
            
            <div className="bg-gradient-dark border border-brand-purple/30 rounded-2xl p-8 mb-12">
              <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">Call comes in</span>
                </div>
                <span className="text-brand-purple">→</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">AI answers and qualifies</span>
                </div>
                <span className="text-brand-purple">→</span>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">Job gets booked</span>
                </div>
                <span className="text-brand-purple">→</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">Text confirmation sent</span>
                </div>
                <span className="text-brand-purple">→</span>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">Syncs to calendar</span>
                </div>
                <span className="text-brand-purple">→</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">Reminder sent 24hrs before</span>
                </div>
                <span className="text-brand-purple">→</span>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">You show up and work</span>
                </div>
                <span className="text-brand-purple">→</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300">Job tracked in CRM</span>
                </div>
                <span className="text-brand-purple">→</span>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">You get paid</span>
                </div>
              </div>
            </div>

            <p className="text-center text-xl text-gray-300 mb-8">
              One system. Complete automation. Total visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-purple">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Ready to See Your Custom System?</h2>
            <p className="body-lg text-gray-300 mb-8">
              Every contractor's workflow is different. Your automation should be too.
            </p>
            <p className="text-gray-400 mb-10">
              Get your free audit and we'll show you exactly which systems solve your specific bottlenecks.
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
