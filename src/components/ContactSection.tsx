import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import { ContactButton } from './ui/ContactButton';
import {
  Mail,
  Linkedin,
  Instagram,
  Phone,
  FileText,
  Copy,
  Check,
  Send,
  Compass,
  MapPin,
  ExternalLink,
  Github,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const emailAddress = 'orsuleelabharani18@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    try {
      // Functional message dispatch to Web3Forms free API
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c90a1f0a-bf41-4774-8b65-684a0d9931eb',
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
          to_email: emailAddress,
        }),
      });
    } catch (err) {
      console.warn('Form submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);

      // Minimal Apple celebratory silver particle burst (calm, non-neon)
      confetti({
        particleCount: 28,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#FFFFFF', '#E5E5EA', '#A1A1A6', '#8E8E93'],
        ticks: 180,
        gravity: 0.8,
        scalar: 0.75,
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 px-5 sm:px-8 md:px-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} className="text-center mb-16">
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,10vw,140px)] leading-none tracking-tight">
            CONTACT ME
          </h2>
          <p className="text-[#9CA3AF] uppercase font-mono tracking-widest text-xs sm:text-sm mt-3">
            Let&apos;s Build Something Incredible Together
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Career Goal */}
          <FadeIn delay={0.1} y={30} className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div className="p-6 sm:p-7 rounded-[24px] border border-white/10 bg-[#161618]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] text-xs font-mono uppercase tracking-widest text-[#F5F5F7] mb-3">
                  <Compass className="w-3.5 h-3.5 text-[#A1A1A6]" strokeWidth={1.75} />
                  <span>Career Aspiration</span>
                </div>
                <p className="text-[#F5F5F7] text-base sm:text-lg font-medium leading-relaxed">
                  &ldquo;I aspire to become an AI Engineer or Software Developer by building impactful applications using Artificial Intelligence, Python, and modern software technologies.&rdquo;
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-3.5">
                {/* Email Item with Copy Feature */}
                <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] flex items-center justify-between gap-3 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-[14px] bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#F5F5F7] flex-shrink-0">
                      <Mail className="w-4 h-4" strokeWidth={1.75} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono text-[#A1A1A6] uppercase tracking-wider block">
                        Direct Email
                      </span>
                      <span className="text-sm font-medium text-[#F5F5F7] truncate block">
                        {emailAddress}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-[12px] bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] text-[#F5F5F7] transition-colors flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] flex items-center gap-3.5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="w-10 h-10 rounded-[14px] bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#F5F5F7] flex-shrink-0">
                    <Phone className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A1A1A6] uppercase tracking-wider block">
                      Phone
                    </span>
                    <a href="tel:8297240018" className="text-sm font-medium text-[#F5F5F7] hover:text-white transition-colors duration-200">
                      +91 82972 40018
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[14px] bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#F5F5F7] flex-shrink-0">
                    <MapPin className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A1A1A6] uppercase tracking-wider block">
                      Institution &amp; Location
                    </span>
                    <span className="text-sm font-medium text-[#F5F5F7]">
                      Aditya University, Andhra Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2">
                <span className="text-xs uppercase font-mono tracking-widest text-[#A1A1A6] block mb-3">
                  Connect Across Platforms
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/_bharani.29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-[#F5F5F7] text-xs uppercase font-medium tracking-wider hover:bg-white/[0.1] hover:border-white/20 transition-all"
                  >
                    <Instagram className="w-4 h-4 text-[#A1A1A6]" strokeWidth={1.75} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://github.com/bharani1829"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-[#F5F5F7] text-xs uppercase font-medium tracking-wider hover:bg-white/[0.1] hover:border-white/20 transition-all"
                  >
                    <Github className="w-4 h-4 text-[#A1A1A6]" strokeWidth={1.75} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/orsu-leela-bharani-973649397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-[#F5F5F7] text-xs uppercase font-medium tracking-wider hover:bg-white/[0.1] hover:border-white/20 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#A1A1A6]" strokeWidth={1.75} />
                    <span>LinkedIn</span>
                  </a>
                  <button
                    onClick={onOpenResumeModal}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/[0.08] text-[#F5F5F7] text-xs uppercase font-medium tracking-wider hover:bg-white/[0.15] hover:border-white/30 transition-all"
                  >
                    <FileText className="w-4 h-4 text-[#F5F5F7]" strokeWidth={1.75} />
                    <span>Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Interactive Modern Form */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-7">
            <div className="rounded-[28px] border border-white/10 bg-[#161618]/80 p-6 sm:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="py-10 text-center space-y-5"
                >
                  <div className="w-14 h-14 rounded-full bg-white/[0.08] text-white border border-white/20 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F5F5F7] font-dragonfly">
                      Message Dispatched Successfully
                    </h3>
                    <p className="text-[#A1A1A6] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#F5F5F7] font-medium">{formData.name || 'Friend'}</span>. Your message has been routed to O Leela Bharani (<span className="text-[#F5F5F7] font-mono text-xs">{emailAddress}</span>). You will receive a response promptly.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                      className="apple-pill-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F5F5F7] text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail App</span>
                    </a>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="apple-pill-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 text-[#F5F5F7] text-xs font-medium uppercase tracking-wider"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono text-[#A1A1A6] tracking-wider block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-[16px] bg-white/[0.03] border border-white/10 text-[#F5F5F7] placeholder-white/25 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/25 focus:bg-white/[0.05] transition-all duration-200 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono text-[#A1A1A6] tracking-wider block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-[16px] bg-white/[0.03] border border-white/10 text-[#F5F5F7] placeholder-white/25 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/25 focus:bg-white/[0.05] transition-all duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono text-[#A1A1A6] tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Opportunity / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-[16px] bg-white/[0.03] border border-white/10 text-[#F5F5F7] placeholder-white/25 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/25 focus:bg-white/[0.05] transition-all duration-200 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono text-[#A1A1A6] tracking-wider block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hello Bharani, I would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-[16px] bg-white/[0.03] border border-white/10 text-[#F5F5F7] placeholder-white/25 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/25 focus:bg-white/[0.05] transition-all duration-200 text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="apple-pill-hover w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#F5F5F7] text-[#0A0A0A] font-semibold uppercase tracking-widest text-sm hover:bg-white active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
