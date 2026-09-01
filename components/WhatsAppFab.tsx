'use client';

import React from 'react';
import { Whatsapp } from 'iconic-react';

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919053014084?text=Hello%20Novaine%20Bikes%20(V%26U%20Industries)!%20I%20would%20like%20to%20know%20more%20about%20your%20bicycles."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300"
    >
      <Whatsapp variant="Bold" className="w-10 h-10 fill-current" />
    </a>
  );
}
