'use client';

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';

export default function EnquiryModal() {
  const { isOpen, selectedModel, closeEnquiry } = useEnquiry();
  const [model, setModel] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalModel = model || selectedModel;
    const msg = encodeURIComponent(
      '*PRODUCT ENQUIRY - NOVAINE BIKES*\n\nModel: *' + finalModel + '*\nName: ' + fullName + '\nPhone: ' + phone + '\nCity: ' + city + '\nMessage: ' + note
    );

    window.open('https://wa.me/919053014084?text=' + msg, '_blank');
    alert('Thank you! Your enquiry has been routed to V&U Industries sales desk.');
    closeEnquiry();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-gray-950 to-gray-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-novaine-yellow/20 text-novaine-yellow flex items-center justify-center font-bold">
              🚲
            </span>
            <div>
              <h3 className="text-base font-bold">Direct Product Enquiry</h3>
              <p className="text-[11px] text-gray-400">V&U Industries — Ludhiana, Punjab - 141003</p>
            </div>
          </div>
          <button
            onClick={closeEnquiry}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Interested Model
            </label>
            <input
              type="text"
              defaultValue={selectedModel}
              onChange={(e) => setModel(e.target.value)}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-sm focus:bg-white focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20 outline-none font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Gurpreet Singh"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-sm focus:bg-white focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-sm focus:bg-white focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                City / State *
              </label>
              <input
                type="text"
                placeholder="e.g. Ludhiana, Punjab"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-sm focus:bg-white focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Message / Quantity Preference
            </label>
            <textarea
              rows={2}
              placeholder="Mention size (e.g. 14T/16T/20T or 24T/26T), color preference or dealership inquiry..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-sm focus:bg-white focus:border-novaine-purple focus:ring-2 focus:ring-novaine-purple/20 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors text-sm"
          >
            <Send className="w-4 h-4" /> Send Enquiry via WhatsApp
          </button>
        </form>

      </div>
    </div>
  );
}
