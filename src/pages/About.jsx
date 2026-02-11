import React from 'react';
import { Button } from '../components/Button';

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-purple">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Why We Built This</h1>
            <p className="body-lg text-gray-300">
              Most contractors lose 20–40% of their revenue to missed calls and slow follow-up. We built APT OPS to fix that.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <p className="body-lg text-gray-300 mb-4">
                We don't do branding. We don't run ads. We don't waste months on strategy decks.
              </p>
              <p className="text-2xl font-semibold text-white">
                We build automation systems that help contractors book more jobs without hiring office staff.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-6">The Problem We Saw</h2>
              <div className="space-y-4 text-gray-300 body-md">
                <p>
                  You're on a roof. Under a sink. Running wire through a wall. Your phone rings.
                </p>
                <p>
                  You can't answer. The caller hangs up. They dial the next contractor. They book with whoever picks up first.
                </p>
                <p className="text-white font-semibold text-lg">
                  You just lost a $500–$5,000 job because you were too busy working.
                </p>
                <p>
                  That's the bottleneck. Not marketing. Not pricing. Not your skills.
                </p>
                <p>
                  You can't scale your business when your revenue depends on being available 24/7—and you're physically doing the work.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-md mb-6">What We Built</h2>
              <div className="space-y-4 text-gray-300 body-md">
                <p>
                  AI voice answering that picks up every call. Instant text follow-up that doesn't wait for you to finish the job. Automated scheduling that fills your calendar while you're working.
                </p>
                <p>
                  Pipeline visibility so you actually know where leads are coming from and where they're going.
                </p>
                <p className="text-white font-semibold text-lg">
                  Systems that turn missed calls into booked jobs—without adding headcount.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-md mb-6">Who We Serve</h2>
              <p className="text-white font-semibold mb-4">Owner-operators and operations managers in home services:</p>
              <ul className="space-y-3 text-gray-300 body-md">
                <li className="flex items-start gap-3">
                  <span className="text-brand-purple">•</span>
                  <span>Plumbers handling emergency calls at all hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-purple">•</span>
                  <span>HVAC techs drowning in peak season call volume</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-purple">•</span>
                  <span>Electricians losing commercial jobs to slow response times</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-purple">•</span>
                  <span>Landscapers overwhelmed by spring rush</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-purple">•</span>
                  <span>Roofers trying to capture storm surge demand</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-purple">•</span>
                  <span>General contractors juggling too many moving parts</span>
                </li>
              </ul>
              <p className="text-gray-300 body-md mt-6">
                If you're losing revenue because you can't answer the phone while you're working, we built this for you.
              </p>
            </div>

            <div>
              <h2 className="heading-md mb-6">How We're Different</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">We're not a marketing agency.</h3>
                  <p className="text-gray-300">
                    We don't do websites, SEO, or social media. We build operational systems that capture the leads you're already getting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">We're not a software company.</h3>
                  <p className="text-gray-300">
                    We don't hand you a tool and say "figure it out." We configure, integrate, test, and optimize everything for you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">We're not consultants.</h3>
                  <p className="text-gray-300">
                    We don't write reports. We build working systems that go live in 2–3 weeks and handle real calls on day one.
                  </p>
                </div>
                <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg p-6">
                  <p className="text-white font-semibold text-lg">
                    We focus on one thing: helping contractors book more jobs without hiring more people.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-md mb-6">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="text-lg font-semibold text-white mb-2">Fast implementation</h3>
                  <p className="text-gray-400 text-sm">Most systems live in 2–3 weeks, not months.</p>
                </div>
                <div className="card">
                  <h3 className="text-lg font-semibold text-white mb-2">Industry-specific training</h3>
                  <p className="text-gray-400 text-sm">Your AI understands plumbing emergencies, HVAC peak season, electrical commercial work—not generic scripts.</p>
                </div>
                <div className="card">
                  <h3 className="text-lg font-semibold text-white mb-2">Done-for-you setup</h3>
                  <p className="text-gray-400 text-sm">We handle the configuration, integration, and optimization. You handle the work.</p>
                </div>
                <div className="card">
                  <h3 className="text-lg font-semibold text-white mb-2">Ongoing support</h3>
                  <p className="text-gray-400 text-sm">We don't disappear after launch. We optimize as you grow and add features as you need them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-purple">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Ready to See How This Works for Your Business?</h2>
            <p className="body-lg text-gray-300 mb-8">
              Get your free automation audit. We'll show you exactly where you're losing revenue and how automation fixes it.
            </p>
            <p className="text-gray-400 mb-10">
              No pressure. No sales pitch. Just a real breakdown of your bottlenecks.
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
