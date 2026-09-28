import React, { useState } from 'react';
import {
  Mail,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  MapPin,
  Clock,
  Copy,
  Check
} from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { useContactForm } from '../../hooks/useContactForm';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { SocialLinks } from '../ui/SocialLinks';
import { Badge } from '../ui/Badge';

export const ContactSection: React.FC = () => {
  const { formData, errors, status, serverMessage, handleChange, handleSubmit, resetStatus } =
    useContactForm();

  const [copied, setCopied] = useState(false);
  const isSubmitting = status === 'submitting';

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact" bgVariant="secondary">
      <SectionHeading
        eyebrow="DIRECT COMMUNICATION"
        title="Let's Build Something Meaningful."
        description="Whether you have an engineering opportunity, a client project requirement, or simply want to connect, send a direct message below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* =========================================================================
            Left Column: Direct Communication Hub
        ========================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-[#13131D]/95 border border-white/[0.08] backdrop-blur-xl shadow-2xl space-y-7">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge label="Available for Hire" variant="violet" size="sm" dot />
            </div>

            <h3 className="text-2xl font-bold text-[#F5F5F7] tracking-tight">
              Get in Touch Directly
            </h3>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              I am open to full-time software engineering roles and freelance website development for clients in India and worldwide.
            </p>
          </div>

          {/* Primary Email Card with Quick Copy Action */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0D14] border border-white/[0.06] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider">
                Direct Email
              </span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1 text-[11px] font-mono text-[#A1A1AA] hover:text-white transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#F5F5F7] hover:text-[#8B5CF6] transition-colors break-all"
            >
              <Mail size={16} className="text-[#8B5CF6] shrink-0" aria-hidden="true" />
              <span>{PROFILE.email}</span>
            </a>
          </div>

          {/* Location & Response Expectation */}
          <div className="space-y-3 text-xs sm:text-sm text-[#A1A1AA] font-mono">
            <div className="flex items-center gap-2.5">
              <MapPin size={15} className="text-[#8B5CF6] shrink-0" />
              <span>Surat, Gujarat, India (IST)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock size={15} className="text-[#8B5CF6] shrink-0" />
              <span>Average Response: &lt; 24 Hours</span>
            </div>
          </div>

          {/* Professional Networks */}
          <div className="pt-5 border-t border-white/[0.08] space-y-3">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block">
              Professional Networks:
            </span>
            <SocialLinks iconSize={18} />
          </div>

        </div>

        {/* =========================================================================
            Right Column: Interactive Web3Forms Direct Message Engine
        ========================================================================= */}
        <div className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-[#14141E]/95 border border-white/[0.08] backdrop-blur-xl shadow-2xl">
          
          <div>
            {/* Form Card Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA]">
                  <MessageSquare size={19} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F7] tracking-tight">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs font-mono text-[#A1A1AA]">
                    Direct message delivery to Maaz Pathan
                  </p>
                </div>
              </div>
            </div>

            {/* Status Announcements (aria-live for accessibility) */}
            <div aria-live="polite" className="mb-6">
              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-start gap-3">
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5 text-emerald-400" aria-hidden="true" />
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-emerald-200">Message Delivered Successfully</p>
                    <p className="text-xs text-emerald-300/90">{serverMessage}</p>
                    <button
                      onClick={resetStatus}
                      className="text-xs font-mono underline hover:text-white pt-1 block"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-start gap-3">
                  <AlertCircle size={20} className="shrink-0 mt-0.5 text-rose-400" aria-hidden="true" />
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-rose-200">Submission Encountered an Issue</p>
                    <p className="text-xs text-rose-300/90">{serverMessage}</p>
                    <p className="text-xs text-rose-200 pt-1">
                      You can email directly at:{' '}
                      <a href={`mailto:${PROFILE.email}`} className="underline font-mono">
                        {PROFILE.email}
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Honeypot Spam Prevention Field (Hidden from humans) */}
              <input
                type="checkbox"
                name="botcheck"
                checked={formData.botcheck}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Full Name Input */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium font-mono text-[#F5F5F7] mb-1.5"
                >
                  Full Name <span className="text-[#8B5CF6]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="e.g. Alex Morgan"
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0D0D14] border text-sm text-[#F5F5F7] placeholder-[#71717A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] ${
                    errors.fullName ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1 text-xs text-rose-400 font-mono">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium font-mono text-[#F5F5F7] mb-1.5"
                >
                  Email Address <span className="text-[#8B5CF6]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="name@company.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0D0D14] border text-sm text-[#F5F5F7] placeholder-[#71717A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] ${
                    errors.email ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-rose-400 font-mono">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium font-mono text-[#F5F5F7] mb-1.5"
                >
                  Subject <span className="text-[#71717A]">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Project inquiry / Engineering role"
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D14] border border-white/10 hover:border-white/20 text-sm text-[#F5F5F7] placeholder-[#71717A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6]"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium font-mono text-[#F5F5F7] mb-1.5"
                >
                  Message <span className="text-[#8B5CF6]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-[#0D0D14] border text-sm text-[#F5F5F7] placeholder-[#71717A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-[#8B5CF6] resize-y min-h-[110px] ${
                    errors.message ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-rose-400 font-mono">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={isSubmitting ? Loader2 : Send}
                  iconPosition="right"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto shadow-[0_0_24px_rgba(139,92,246,0.35)]"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
};
