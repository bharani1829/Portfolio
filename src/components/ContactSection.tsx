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
  Sparkles,
  MapPin,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Trigger celebratory confetti animation
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
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
              <div className="p-6 rounded-[30px] border border-white/10 bg-neutral-950/80 backdrop-blur-md">
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C084FC] mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Career Aspiration
                </span>
                <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                  &ldquo;I aspire to become an AI Engineer or Software Developer by building impactful applications using Artificial Intelligence, Python, and modern software technologies.&rdquo;
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4">
                {/* Email Item with Copy Feature */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 hover:border-[#7621B0] transition-colors duration-500">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7621B0] to-[#B600A8] flex items-center justify-center text-white flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono text-[#9CA3AF] uppercase block">
                        Direct Email
                      </span>
                      <span className="text-sm font-semibold text-white truncate block">
                        {emailAddress}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 hover:border-[#7621B0] transition-colors duration-500">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-[#06B6D4] flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#9CA3AF] uppercase block">
                      Phone
                    </span>
                    <a href="tel:8297240018" className="text-sm font-semibold text-white hover:text-[#C084FC] transition-colors duration-500">
                      +91 82972 40018
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#06B6D4] flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#9CA3AF] uppercase block">
                      Institution & Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Aditya University, Andhra Pradesh, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2">
                <span className="text-xs uppercase font-mono tracking-widest text-[#9CA3AF] block mb-3">
                  Connect Across Platforms
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://instagram.com/_bharani.29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 text-white text-xs uppercase font-semibold tracking-wider hover:bg-white/15 hover:border-white transition-all"
                  >
                    <Instagram className="w-4 h-4 text-[#C084FC]" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/orsu-leela-bharani-973649397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 text-white text-xs uppercase font-semibold tracking-wider hover:bg-white/15 hover:border-white transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#3B82F6]" />
                    <span>LinkedIn</span>
                  </a>
                  <button
                    onClick={onOpenResumeModal}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#B600A8]/50 bg-[#B600A8]/10 text-white text-xs uppercase font-semibold tracking-wider hover:bg-[#B600A8]/30 transition-all"
                  >
                    <FileText className="w-4 h-4 text-[#B600A8]" />
                    <span>Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Interactive Modern Form */}
          <FadeIn delay={0.2} y={30} className="lg:col-span-7">
            <div className="rounded-[30px] border border-white/10 bg-neutral-950/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-white font-kanit">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[#9CA3AF] text-sm max-w-md mx-auto">
                    Thank you for reaching out to O Leela Bharani. I will review your message and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono text-[#9CA3AF] tracking-wider block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#7621B0] transition-colors text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-mono text-[#9CA3AF] tracking-wider block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#7621B0] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono text-[#9CA3AF] tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Opportunity / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#7621B0] transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono text-[#9CA3AF] tracking-wider block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hello Bharani, I would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#7621B0] transition-colors text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full contact-btn-bg text-white font-medium uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform shadow-lg"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
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
