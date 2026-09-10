import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { profileData } from '../../data/profile';
import { soundEngine } from '../../utils/sound';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validate = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return false;
    }

    if (!formData.subject.trim()) {
      setErrorMessage('Please include a subject.');
      return false;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage('Message should be at least 10 characters.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('error');
      soundEngine.playClick();
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    soundEngine.playWhoosh();

    try {
      await emailjs.send(
        'service_loir7vk',
        'template_3b79pet',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: 'MaF-hInbkcKo8nxcn', 
        }
      );

      setStatus('success');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      soundEngine.playCloudBurst();
    } catch (error) {
      console.error('EmailJS error:', error);

      setStatus('error');
      setErrorMessage(
        'Transmission failed. Please try again or contact me directly by email.'
      );

      soundEngine.playClick();
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    soundEngine.playClick();

    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 relative bg-neutral-50/70 dark:bg-neutral-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          chapter="CHAPTER 12"
          badge="COMMUNICATION"
          title="SEND A MESSAGE"
          subtitle="Direct coordinates for DFIR collaborations, research inquiries, hackathon teams, and security dialogues."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">

          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-md">

              <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest block mb-2">
                ✦ COORDINATES ✦
              </span>

              <h3 className="text-2xl font-heading font-black text-neutral-900 dark:text-white mb-6">
                GET IN TOUCH
              </h3>

              <div className="space-y-4">

                {/* Email */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />

                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold block">
                        EMAIL
                      </span>

                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-xs sm:text-sm font-mono font-bold text-neutral-900 dark:text-white hover:text-red-600"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(profileData.email, 'email')}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                    title="Copy email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                </div>

                {/* Phone */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />

                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold block">
                        PHONE
                      </span>

                      <a
                        href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-mono font-bold text-neutral-900 dark:text-white hover:text-red-600"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(profileData.phone, 'phone')}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                    title="Copy phone"
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">

                  <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />

                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold block">
                      LOCATION
                    </span>

                    <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                      {profileData.location}
                    </span>
                  </div>

                </div>

              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-2">

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 text-xs font-mono font-bold text-neutral-900 dark:text-white"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 text-xs font-mono font-bold text-neutral-900 dark:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>

              </div>

              {/* Copy confirmation */}
              {copiedField && (
                <div className="mt-3 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    Copied {copiedField} to clipboard!
                  </span>
                </div>
              )}

            </div>

          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">

            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-neutral-700 shadow-md flex flex-col justify-between h-full"
            >

              <div>

                <h3 className="text-xl font-heading font-black text-neutral-900 dark:text-white mb-6">
                  DISPATCH TRANSMISSION
                </h3>

                {/* Error Message */}
                {errorMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Message */}
                {status === 'success' && (
                  <div className="mb-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs font-mono flex items-start gap-2">

                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />

                    <div>
                      <strong>Transmission successful!</strong>{' '}
                      Your message has been delivered successfully. I'll get back to you soon.
                    </div>

                  </div>
                )}

                <div className="space-y-4">

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 uppercase mb-1">
                        YOUR NAME *
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="e.g. Captain Nemo / Recruiter"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-sm font-mono text-neutral-900 dark:text-white focus:outline-hidden focus:border-red-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 uppercase mb-1">
                        YOUR EMAIL *
                      </label>

                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="e.g. investigator@agency.org"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-sm font-mono text-neutral-900 dark:text-white focus:outline-hidden focus:border-red-600 transition-colors"
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div>

                    <label className="block text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 uppercase mb-1">
                      SUBJECT *
                    </label>

                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      placeholder="e.g. DFIR Collaboration / Research Inquiry / Internship"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-sm font-mono text-neutral-900 dark:text-white focus:outline-hidden focus:border-red-600 transition-colors"
                    />

                  </div>

                  {/* Message */}
                  <div>

                    <label className="block text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 uppercase mb-1">
                      MESSAGE *
                    </label>

                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Detail your inquiry, project scope, or forensic investigation topic..."
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-sm font-mono text-neutral-900 dark:text-white focus:outline-hidden focus:border-red-600 transition-colors resize-none"
                    />

                  </div>

                </div>

              </div>

              {/* Submit Button */}
              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-end">

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-mono font-bold tracking-wider transition-all duration-200 shadow-md hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />

                  <span>
                    {status === 'loading'
                      ? 'TRANSMITTING...'
                      : 'SEND MESSAGE'}
                  </span>
                </button>

              </div>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};