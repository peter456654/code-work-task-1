"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const WeListening = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/marketing_site/add_contact_details`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send contact details.');
      }

      const data = await response.json();
      setResponseMessage(data.message || 'Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-secondary px-7 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/contact-ai-solutions" className="inline-block px-4 py-2 border border-secondary rounded-none text-secondary hover:bg-secondary hover:text-primary transition">
            Back
          </Link>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Other Inquiries</h1>
        <p className="text-lg mb-12">If you’re looking for career opportunities, please visit <a href="https://codework.ai/careers-at-codework" target="_blank" rel="noopener noreferrer" className="underline">codework.ai/careers</a>.</p>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-base font-semibold mb-2">Name: <span className="text-red-500">*</span></label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-secondary py-2 outline-none"
              />
            </div>
            <div>
              <label className="block text-base font-semibold mb-2">Subject: <span className="text-red-500">*</span></label>
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-secondary py-2 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">Work Email: <span className="text-red-500">*</span></label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-secondary py-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">How can we help? <span className="text-red-500">*</span></label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-transparent border border-secondary px-3 py-3 outline-none min-h-[12rem]"
            />
          </div>

          <button type="submit" disabled={loading} className="px-10 py-4 border border-secondary rounded-none text-secondary font-semibold w-fit hover:bg-secondary hover:text-primary transition">
            {loading ? 'Submitting…' : 'Submit'}
          </button>

          {responseMessage && (
            <div className="mt-4 p-4 bg-secondary/5 border border-secondary/20">
              <p className="text-sm">{responseMessage}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default WeListening;
