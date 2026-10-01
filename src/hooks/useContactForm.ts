import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import type { ContactFormData, FormSubmissionStatus } from '../types';

const INITIAL_FORM_DATA: ContactFormData = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
  botcheck: false,
};

export interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormSubmissionStatus>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.botcheck) {
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setServerMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Handle development / unconfigured key mode gracefully with direct mailto fallback
    if (!accessKey || accessKey === 'your_access_key_here') {
      const subject = encodeURIComponent(
        formData.subject.trim() || `Portfolio Contact from ${formData.fullName}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      // Open user's default email client
      window.location.href = `mailto:pathanmaaz142@gmail.com?subject=${subject}&body=${body}`;

      setStatus('success');
      setServerMessage(
        'Opening your email client to send directly to pathanmaaz142@gmail.com. You can also configure Web3Forms API key for direct in-browser delivery.'
      );
      setFormData(INITIAL_FORM_DATA);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject.trim() || `Portfolio Contact from ${formData.fullName}`,
          message: formData.message,
          from_name: 'Maaz Pathan Portfolio',
        }),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus('success');
        setServerMessage('Thank you! Your message has been sent successfully. I will get back to you soon.');
        setFormData(INITIAL_FORM_DATA);
      } else {
        setStatus('error');
        setServerMessage(
          result.message || 'Something went wrong while submitting the form. Please try again or reach out via email.'
        );
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setServerMessage('Network error occurred. Please check your connection or send an email directly.');
    }
  };

  const resetStatus = () => {
    setStatus('idle');
    setServerMessage('');
  };

  return {
    formData,
    errors,
    status,
    serverMessage,
    handleChange,
    handleSubmit,
    resetStatus,
  };
}
