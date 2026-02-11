import React from 'react';
import { Phone, MessageCircle, Calendar, BarChart, PhoneOff, Clock, AlertCircle, Eye, CheckCircle, Send, RotateCw, Activity, Workflow, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-purple">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-darker/20 to-brand-darker"></div>
        
        <div className="container-custom relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">
              Stop Losing Jobs to <span className="text-brand-purple">Missed Calls</span>
            </h1>
            
            <p className="body-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              AI automation that answers every call, books every job, and fills your calendar—while you're on the ladder, under the sink, or driving to the next site.
            </p>
            
            <p className="body-md text-gray-400 mb-10">
              For plumbers, HVAC techs, electricians, landscapers, roofers, and general contractors who are tired of watching revenue slip through the cracks.
            </p>
            
            <Button href="/free-audit" className="text-lg px-10 py-5">
              Get Your Free Automation Audit
            </Button>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-purple" />
                </div>
                <span className="text-sm text-gray-300">Never miss a call</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-brand-green" />
                </div>
                <span className="text-sm text-gray-300">Instant follow-up</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-brand-purple" />
                </div>
                <span className="text-sm text-gray-300">Auto-booking</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-brand-green" />
                </div>
                <span className="text-sm text-gray-300">Pipeline visibility</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Old Way vs New Way Section */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">The Old Way Is Costing You Jobs</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Old Way */}
            <div className="space-y-6">
              <div className="card border-red-900/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <PhoneOff className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Calls Go to Voicemail</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      You're on-site. Your phone rings. By the time you call back, they've hired someone else.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-red-900/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Slow Follow-Up Kills Deals</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      You text back 4 hours later. The lead's already moved on. You never had a chance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-red-900/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Manual Scheduling = Chaos</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Double bookings. Missed appointments. Constant back-and-forth just to get someone on the calendar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-red-900/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">No Visibility Into Your Pipeline</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      You're guessing where leads went. You have no idea what's working. Revenue feels random.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Way */}
            <div className="space-y-6">
              <div className="card card-hover border-brand-purple/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">AI Answers Every Call 24/7</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Your AI assistant picks up instantly, qualifies the lead, and books the job—even at 9 PM on a Sunday.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-brand-green/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Send className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Instant Text Follow-Up</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Every lead gets a confirmation text within seconds. No waiting. No forgetting. No lost opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-brand-purple/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-purple/20 flex items-center justify-center flex-shrink-0">
                    <RotateCw className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Jobs Sync to Your Calendar Automatically</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Appointments flow straight into your system. You show up. You work. You get paid.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card card-hover border-brand-green/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">See Every Lead in One Dashboard</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Track calls, conversions, and revenue in real time. Make decisions based on data, not guesswork.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What We Automate</h2>
            <p className="body-md text-gray-400 max-w-2xl mx-auto">
              Stop losing revenue to missed calls, slow follow-up, and manual chaos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-brand-purple/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI Voice Answering</h3>
              <p className="text-gray-400 text-sm mb-4">
                Handles calls 24/7. Qualifies leads. Books appointments. Never misses a job.
              </p>
            </div>

            <div className="card card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Instant Text Follow-Up</h3>
              <p className="text-gray-400 text-sm mb-4">
                Sends confirmation texts, appointment reminders, and follow-ups automatically.
              </p>
            </div>

            <div className="card card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-brand-purple/20 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Automated Scheduling</h3>
              <p className="text-gray-400 text-sm mb-4">
                Syncs jobs to your calendar without double bookings or manual data entry.
              </p>
            </div>

            <div className="card card-hover text-center">
              <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center mx-auto mb-4">
                <Workflow className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">CRM Integration</h3>
              <p className="text-gray-400 text-sm mb-4">
                Connects your calls, texts, and bookings into one system. Total visibility.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/solutions" className="inline-flex items-center gap-2 text-brand-purple hover:text-purple-400 transition-colors font-semibold">
              See All Solutions <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Built for Contractors Section */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Built for Contractors Who Value Their Time</h2>
            <div className="space-y-4 text-gray-300 body-md">
              <p>
                We don't do branding. We don't run ads. We don't take months to launch.
              </p>
              <p className="text-white font-semibold text-xl">
                We build systems that help you book more jobs without hiring office staff.
              </p>
              <p>
                Most systems go live in 2-3 weeks. You handle the work. We handle the automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Ready to See Where You're Losing Revenue?</h2>
            <p className="body-lg text-gray-300 mb-4">
              <span className="font-semibold text-white">Get Your Free Automation Audit</span>
            </p>
            <p className="body-md text-gray-400 mb-8">
              We'll analyze your call volume, calculate missed opportunities, and show you exactly where jobs are slipping through.
            </p>
            <p className="text-gray-400 mb-10">
              No pressure. No sales pitch. Just a real breakdown of where your bottlenecks are—and how to fix them.
            </p>
            <Button href="/free-audit" className="text-lg px-10 py-5">
              Get Your Free Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
