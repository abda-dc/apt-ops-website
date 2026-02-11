import React from 'react';
import { Droplet, Wind, Zap, Leaf, Home, HardHat, DollarSign, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';

export const Industries = () => {
  const industries = [
    {
      icon: Droplet,
      name: "Plumbers",
      painPoint: "Every Emergency Call Is a $500+ Job",
      description: "It's 9 PM. Someone's basement is flooding. They call you. You're finishing another job and can't answer. They call the next plumber. They call the next one. Someone answers. That someone isn't you. Emergency plumbing doesn't wait for voicemail. Every missed call is a high-value job you'll never get back.",
      solution: "Your AI answers instantly—even at 9 PM, midnight, or 6 AM on Sunday. It knows the difference between \"leaky faucet\" and \"pipe burst emergency.\" It captures the urgency, gets the address, and books the job while your competitors are still sleeping.",
      outcome: "You never miss an emergency job again.",
      stats: "Plumbers using our system capture 34% more emergency calls and reduce response time from hours to seconds. That's an extra $15K–$25K per month in jobs you used to miss."
    },
    {
      icon: Wind,
      name: "HVAC Techs",
      painPoint: "Peak Season Means Missed Calls = Lost Revenue",
      description: "It's July. 95 degrees. Your phone is ringing off the hook. You're on a roof running refrigerant lines. You miss 12 calls before lunch. By the time you get back to people, half of them already hired someone else. Summer heat doesn't wait. Neither do your customers.",
      solution: "Your AI handles the surge. Every call gets answered. Every customer gets qualified. Residential vs commercial. Repair vs new install. Urgency level. Jobs get booked while you're working. Your calendar fills itself. You handle 3× the call volume without adding office staff.",
      outcome: "Handle 3x the call volume without more staff.",
      stats: "HVAC contractors using our system book 28% more jobs during peak season and eliminate the \"too busy to grow\" bottleneck. You capture the surge instead of drowning in it."
    },
    {
      icon: Zap,
      name: "Electricians",
      painPoint: "Commercial Jobs Need Instant Response Times",
      description: "A property manager calls about an electrical issue at a 24-unit building. They need someone today. You call back 3 hours later. They already hired the electrician who answered on the first ring. Commercial clients expect immediate response. Your competitors are giving it to them.",
      solution: "Your AI answers every call with professional consistency. It understands commercial terminology. It captures scope, building details, and timeline requirements. High-value commercial leads get flagged immediately. You see them in your dashboard. You follow up while the job is still available.",
      outcome: "Win more commercial contracts with 24/7 availability.",
      stats: "Electricians using our system win 41% more commercial bids because they respond faster than competitors. Average commercial job value: $2,500–$15,000."
    },
    {
      icon: Leaf,
      name: "Landscapers",
      painPoint: "Spring Rush Overwhelms Your Phone Lines",
      description: "March hits. Everyone wants their yard ready for summer. Your phone rings 40+ times a day. You're on-site doing estimates. Mowing. Installing. You miss calls. You lose jobs to companies that answer. Seasonal demand is your biggest revenue opportunity. Missing calls wastes it.",
      solution: "Your AI handles the spring surge without breaking. It books estimates automatically. It understands residential vs commercial. One-time cleanup vs ongoing maintenance. Your calendar fills itself with qualified leads. You show up to pre-qualified estimates. Your close rate goes up because you're only seeing serious buyers.",
      outcome: "Book out your calendar without hiring office staff.",
      stats: "Landscapers using our system book 52% more spring jobs and reduce wasted estimate time by 35%. You maximize the season instead of scrambling through it."
    },
    {
      icon: Home,
      name: "Roofers",
      painPoint: "Storm Season = Surge Demand You Can't Capture",
      description: "A hailstorm hits your area. Every homeowner needs a roof inspection. Your phone explodes. You answer 1 out of every 5 calls. The other 4 hire roofers who got there first. Storm leads convert at 60%+. Missed calls are leaving tens of thousands on the table.",
      solution: "Your AI handles the storm surge. Every call gets answered. Every lead gets qualified. Insurance claim or cash pay. Residential or commercial. Urgency level. Jobs flow into your pipeline automatically. You see real-time maps of where damage calls are clustering. You deploy crews strategically instead of randomly.",
      outcome: "Convert storm leads before competitors do.",
      stats: "Roofers using our system capture 3× more storm leads and reduce response time from hours to under 60 seconds. Average storm season revenue increase: $45K–$120K."
    },
    {
      icon: HardHat,
      name: "General Contractors",
      painPoint: "Juggling Subs and Clients Means Dropped Calls",
      description: "You're on three job sites. Managing two subs. Dealing with a permit issue. Your phone rings. You can't answer. The lead goes to voicemail. They call a GC who picks up. You never hear from them again. High-value remodel and construction jobs don't wait for callbacks.",
      solution: "Your AI handles client calls while you handle the work. It qualifies project scope, timeline, and budget range. It books consultation calls. Your CRM shows you every lead, every follow-up, and every project status. You manage 50% more projects without the chaos. Your subs know where to be. Your clients know what's happening.",
      outcome: "Manage 50% more projects without chaos.",
      stats: "General contractors using our system close 38% more projects and reduce project coordination time by 6+ hours per week. You grow without losing control."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-purple">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Built for Contractors Who Can't Afford to Miss Calls</h1>
            <p className="body-lg text-gray-300">
              Every industry has different urgency levels, seasonality, and job values. Your automation should understand that.
            </p>
            <p className="body-md text-gray-400 mt-4">
              We build systems specifically for home service businesses where every missed call is real money walking away.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      {industries.map((industry, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 0 ? 'bg-brand-dark' : 'bg-gradient-dark'}`}
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-brand-purple" />
                </div>
                <h2 className="heading-md">For {industry.name}</h2>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-brand-green">{industry.painPoint}</h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">{industry.description}</p>

              <h4 className="text-xl font-semibold mb-3 text-white">How Automation Solves It</h4>
              <p className="text-gray-300 leading-relaxed mb-6">{industry.solution}</p>

              <p className="text-white font-semibold text-lg mb-4">{industry.outcome}</p>

              <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{industry.stats}</p>
                </div>
              </div>

              <Button href="/free-audit">Get Your Free Audit</Button>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="section-padding bg-gradient-purple">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Your Industry. Your Automation. Your Revenue.</h2>
            <p className="body-lg text-gray-300 mb-8">
              Ready to see how automation solves your specific bottlenecks?
            </p>
            <p className="text-gray-400 mb-10">
              We'll analyze your call volume, calculate your missed opportunity cost, and show you exactly where jobs are slipping through.
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
