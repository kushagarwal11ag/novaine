'use client';

import React from 'react';
import { ShieldCheck, Send } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';

export default function WarrantyPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white py-14 text-center border-b border-gray-800">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-novaine-yellow">Quality Assurance</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Novaine Bikes <span className="text-novaine-yellow">Warranty Policy</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-2">
            Guaranteed craftsmanship from V&U Industries - Ludhiana, Punjab - 141003.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6 text-sm">
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">1. Frame & Rigid Fork Structural Warranty</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              All Novaine bicycle frames manufactured by V&U Industries come with a <strong>Lifetime Structural Warranty</strong> against manufacturing defects and weld failures under normal riding conditions.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">2. Suspension & Mechanical Components</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Suspension forks, mechanical disc calipers, gear shifters, and derailleurs are covered under a <strong>1-Year Replacement / Repair Guarantee</strong> against defects in material or workmanship.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">3. How To Claim Warranty</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              To register or claim warranty, simply contact your nearest authorized Novaine Bikes dealer or message our Ludhiana customer service desk on WhatsApp at <strong>+91 9087582 16246</strong> along with your invoice copy and frame serial number.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 text-center">
            <button
              onClick={() => openEnquiry('Warranty Registration')}
              className="bg-novaine-purple hover:bg-novaine-purple-dark text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-colors inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" /> Register / Claim Warranty
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
