'use client';

import React, { useState } from 'react';
import { Handshake, Send, CheckCircle2, TrendingUp, ShieldCheck, Truck } from 'lucide-react';

export default function BecomeADealerPage() {
  const [formData, setFormData] = useState({
    dealerName: '',
    firmName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    experience: 'Existing Bicycle Retailer / Wholesaler',
    volume: '25 - 50 Bicycles',
    comments: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      '*DEALERSHIP APPLICATION - NOVAINE BIKES*\n\nFirm: ' + formData.firmName + '\nContact: ' + formData.dealerName + '\nPhone: ' + formData.phone + '\nLocation: ' + formData.city + ', ' + formData.state + '\nExperience: ' + formData.experience + '\nVolume: ' + formData.volume + '\nComments: ' + formData.comments
    );

    window.open('https://wa.me/919053014084?text=' + msg, '_blank');
    alert('Thank you! Your dealership application has been submitted to V&U Industries.');
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950 text-white py-16 text-center border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-novaine-yellow bg-white/10 px-3.5 py-1 rounded-full border border-novaine-yellow/40">
            Authorized Dealership Program
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Become A <span className="text-novaine-yellow">Novaine Bikes</span> Dealer
          </h1>
          <p className="text-sm text-gray-300 mt-3">
            Join hands with V&U Industries - Ludhiana, Punjab. Enjoy high trade margins, marketing materials, fast dispatch, and comprehensive warranty support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Benefits */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-novaine-purple bg-novaine-purple-light px-3 py-1 rounded-full">
              Partnership Value
            </span>
            <h2 className="text-3xl font-extrabold text-gray-950 mt-3 mb-6">
              Why Distribute Novaine Bicycles?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-novaine-purple flex items-center justify-center font-bold shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">High Profit Margins & Rebates</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Enjoy lucrative retailer margins, seasonal sales incentives, and rapid inventory turnover.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-novaine-yellow flex items-center justify-center font-bold shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">High-Demand Model Range</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Popular kids models (Kombat, Magnet, Boomer in 14T, 16T, 20T) and ranger models (Hunt, Hunt Pro, Cyclone in 24T, 26T).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Direct Factory Dispatch from Ludhiana</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Direct dispatches from V&U Industries Ludhiana facility ensures fast supply chain and genuine spares availability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Dealership Application Form</h3>
            <p className="text-xs text-gray-500 mb-6">Fill your details and our regional sales manager will connect within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={formData.dealerName}
                    onChange={(e) => setFormData({ ...formData, dealerName: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Firm / Shop Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sharma Cycle Store"
                    value={formData.firmName}
                    onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@store.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">City / District *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">State *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajasthan"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Expected Initial Order Volume</label>
                <select
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
                >
                  <option>25 - 50 Bicycles</option>
                  <option>50 - 100 Bicycles</option>
                  <option>100+ Bicycles (Regional Stockist)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Additional Comments</label>
                <textarea
                  rows={3}
                  placeholder="Showroom size, preferred models (Kombat, Magnet, Hunt, etc.)..."
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-xs outline-none focus:border-novaine-purple"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-novaine-purple hover:bg-novaine-purple-dark text-white font-bold py-3 rounded-lg shadow-sm transition-colors text-xs inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Submit Application
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
