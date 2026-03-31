import { motion } from "motion/react";
import { ArrowRight, CheckCircle, Star, Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 gradient-soft opacity-30 -z-10" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pastel-pink/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-powder-blue/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/50 border border-pastel-pink/30 text-pastel-pink font-semibold text-sm mb-6">
            Your Extra Set of Hands in Business
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Effortless Business Growth with a <span className="text-pastel-pink italic">Reliable</span> Virtual Assistant
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            CHEVIE VA helps busy entrepreneurs save time, increase productivity, and scale faster — without the stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-dark-gray text-white px-8 py-4 rounded-full font-bold hover:bg-pastel-pink transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-pastel-pink/20"
            >
              Book a Free Consultation
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="bg-white text-dark-gray border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-light-beige transition-all text-center"
            >
              View Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://picsum.photos/seed/va-workspace/800/1000"
              alt="Laptop workspace"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Productivity</p>
              <p className="font-bold">+45% Increase</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="bg-pastel-pink/20 p-2 rounded-full text-pastel-pink">
              <Star size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Client Satisfaction</p>
              <p className="font-bold">5.0 Rating</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function ValueProp() {
  const benefits = [
    { title: "Save 10+ hours weekly", desc: "Reclaim your time to focus on high-level strategy.", icon: "⏱" },
    { title: "Scale your business faster", desc: "Get the support you need to grow without burnout.", icon: "📈" },
    { title: "Professional & reliable", desc: "Consistent quality you can trust every single day.", icon: "💼" },
    { title: "Clear communication", desc: "Fast turnaround and transparent updates always.", icon: "💬" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose CHEVIE VA?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We don't just handle tasks; we partner with you to achieve your business goals.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-light-beige/50 border border-transparent hover:border-pastel-pink/30 transition-all"
            >
              <div className="text-4xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: "Social Media Management",
      icon: <Instagram className="text-pastel-pink" />,
      desc: "Elevate your brand presence across all platforms.",
      features: ["Content planning", "Posting & scheduling", "Engagement"],
      price: "Starting at $299/mo"
    },
    {
      title: "Email Management",
      icon: <Mail className="text-powder-blue" />,
      desc: "Zero inbox is possible. Let me handle the noise.",
      features: ["Inbox organization", "Client replies", "Filtering"],
      price: "Starting at $199/mo"
    },
    {
      title: "Admin Tasks",
      icon: <CheckCircle className="text-green-400" />,
      desc: "The backbone of your business, handled with care.",
      features: ["Data entry", "Research", "Calendar management"],
      price: "Starting at $25/hr"
    },
    {
      title: "Lead Generation",
      icon: <Linkedin className="text-blue-600" />,
      desc: "Find your ideal clients while you sleep.",
      features: ["Prospect research", "Outreach strategy", "CRM management"],
      price: "Custom Quote"
    }
  ];

  return (
    <section id="services" className="py-24 bg-soft-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Tailored Support for Your Unique Needs</h2>
            <p className="text-gray-600">From daily admin to strategic growth, I've got you covered.</p>
          </div>
          <a href="#contact" className="text-pastel-pink font-bold flex items-center gap-2 hover:underline">
            See All Services <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{service.desc}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle size={14} className="text-pastel-pink" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-50">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Investment</p>
                <p className="font-bold text-dark-gray">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/chevie-portrait/800/1000"
                alt="Chevie - Virtual Assistant"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-pastel-pink text-white p-10 rounded-[2rem] hidden md:block">
              <p className="font-accent text-4xl mb-2">Chevie</p>
              <p className="text-sm font-medium opacity-90">Founder & Lead VA</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">Hi, I’m Chevie — Your Dedicated Virtual Assistant</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                With over 5 years of experience supporting high-level executives and creative entrepreneurs, I understand the weight of a growing business. My mission is to lighten that load so you can focus on what you love.
              </p>
              <p>
                I specialize in creating systems that work for you, not against you. Whether it's managing your social presence or organizing your inbox, I bring a detail-oriented, results-driven approach to every task.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Detail Oriented</h4>
                <p className="text-sm text-gray-500">No task is too small to be done perfectly.</p>
              </div>
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Results Driven</h4>
                <p className="text-sm text-gray-500">Focusing on metrics that actually matter.</p>
              </div>
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Reliable Support</h4>
                <p className="text-sm text-gray-500">I'm here when you need me, every time.</p>
              </div>
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Friendly Comm</h4>
                <p className="text-sm text-gray-500">Professional yet approachable partnership.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const items = [
    { title: "Social Media Growth", category: "Marketing", img: "https://picsum.photos/seed/p1/600/600" },
    { title: "Brand Identity", category: "Design", img: "https://picsum.photos/seed/p2/600/600" },
    { title: "Email Campaign", category: "Management", img: "https://picsum.photos/seed/p3/600/600" },
    { title: "Admin Dashboard", category: "Operations", img: "https://picsum.photos/seed/p4/600/600" },
    { title: "Canva Graphics", category: "Design", img: "https://picsum.photos/seed/p5/600/600" },
    { title: "Lead Gen Results", category: "Growth", img: "https://picsum.photos/seed/p6/600/600" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-soft-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Results That Speak for Themselves</h2>
          <p className="text-gray-600">A glimpse into the impact I've made for my clients.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2rem] overflow-hidden shadow-lg"
            >
              <img src={item.img} alt={item.title} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <p className="text-pastel-pink text-sm font-bold mb-1">{item.category}</p>
                <h4 className="text-white text-xl font-bold">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      price: "$499",
      period: "per month",
      desc: "Perfect for entrepreneurs just starting to outsource.",
      features: ["10 hours of support", "Email management", "Basic admin tasks", "Weekly check-ins"],
      highlight: false
    },
    {
      name: "Growth Plan",
      price: "$899",
      period: "per month",
      desc: "Ideal for growing businesses needing consistent help.",
      features: ["25 hours of support", "Social media management", "Lead generation", "Priority support", "Monthly strategy call"],
      highlight: true
    },
    {
      name: "Premium Plan",
      price: "$1,499",
      period: "per month",
      desc: "Full-scale support for established businesses.",
      features: ["50 hours of support", "Full VA management", "Graphic design (Canva)", "CRM management", "Unlimited communication"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600">Choose the package that fits your current stage of growth.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-10 rounded-[3rem] border-2 transition-all ${plan.highlight ? "border-pastel-pink bg-light-beige/30 shadow-xl scale-105" : "border-gray-100 bg-white"}`}
            >
              {plan.highlight && (
                <span className="bg-pastel-pink text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-8">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <CheckCircle size={18} className="text-pastel-pink" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-4 rounded-full font-bold transition-all ${plan.highlight ? "bg-pastel-pink text-white hover:bg-dark-gray" : "bg-dark-gray text-white hover:bg-pastel-pink"}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    { name: "Sarah Jenkins", role: "E-commerce Founder", text: "Chevie has been a lifesaver. I've reclaimed 15 hours a week and my business has never run smoother.", stars: 5 },
    { name: "Mark Thompson", role: "Marketing Consultant", text: "The attention to detail is unmatched. I trust her with my most important client communications.", stars: 5 },
    { name: "Elena Rodriguez", role: "Creative Director", text: "Her social media management skills helped us double our engagement in just two months!", stars: 5 },
  ];

  return (
    <section id="testimonials" className="py-24 bg-powder-blue/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What My Clients Say</h2>
          <p className="text-gray-600">Real stories from entrepreneurs who scaled with CHEVIE VA.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-dark-gray">{review.name}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-dark-gray rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Free Up Your Time?</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Book a free 15-minute discovery call to see how I can help you scale your business faster.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={24} className="text-pastel-pink" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-medium">hello@chevieva.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle size={24} className="text-pastel-pink" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-lg font-medium">+1 (234) 567-890</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pastel-pink transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pastel-pink transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-12 lg:p-20">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-gray">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-pastel-pink focus:bg-white outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark-gray">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-pastel-pink focus:bg-white outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-gray">Business Type</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-pastel-pink focus:bg-white outline-none transition-all" placeholder="E-commerce, Coaching, etc." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-dark-gray">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-pastel-pink focus:bg-white outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-pastel-pink text-white py-5 rounded-2xl font-bold text-lg hover:bg-dark-gray transition-all shadow-lg hover:shadow-pastel-pink/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 bg-soft-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-2xl font-display font-bold text-dark-gray">
          CHEVIE <span className="text-pastel-pink">VA</span>
        </p>
        <p className="text-sm text-gray-400">
          © 2026 CHEVIE VA. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-pastel-pink">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-pastel-pink">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
