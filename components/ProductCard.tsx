'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useEnquiry } from '@/context/EnquiryContext';
import { ArrowRight, Send } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  const { openEnquiry } = useEnquiry();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="product-card group bg-white rounded-2xl border border-gray-100 hover:border-novaine-purple/40 shadow-card hover:shadow-card-hover transition-all duration-300 p-5 flex flex-col justify-between">
      
      {/* Top Badges */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-novaine-purple bg-novaine-purple-light px-2.5 py-0.5 rounded-full">
            {product.category}
          </span>
          <span className="text-xs font-bold text-gray-800 bg-gray-100 px-2.5 py-0.5 rounded-full">
            {product.sizes.join(' | ')}
          </span>
        </div>

        {/* Title & Speeds */}
        <h3 className="text-lg font-extrabold text-gray-950 group-hover:text-novaine-purple transition-colors">
          <Link href={'/bicycles/' + product.id}>{product.name}</Link>
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          {product.speeds} • {product.ageGroup}
        </p>

        {/* Dual-Angle Image Container */}
        <div className="relative w-full h-48 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-3 mb-4">
          <img
            src={selectedColor.imgSide}
            alt={product.name + ' Side'}
            className="img-side absolute max-h-[85%] max-w-[85%] object-contain transition-all duration-500"
          />
          <img
            src={selectedColor.imgFront}
            alt={product.name + ' Front'}
            className="img-front absolute max-h-[85%] max-w-[85%] object-contain opacity-0 scale-95 transition-all duration-500"
          />
        </div>

        {/* Color Swatches */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-gray-500">Colours:</span>
          <div className="flex items-center gap-1.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                title={c.name}
                onClick={() => setSelectedColor(c)}
                style={{ backgroundColor: c.hex }}
                className={'w-5 h-5 rounded-full border-2 border-opacity-10 border-black shadow-sm transition-transform ' + (selectedColor.name === c.name ? 'ring-2 ring-novaine-purple scale-110' : 'hover:scale-105')}
              />
            ))}
          </div>
        </div>

        {/* Key Features Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          <span className="inline-flex items-center text-[11px] font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded">
            {product.frame.split(' ')[0]} Frame
          </span>
          <span className="inline-flex items-center text-[11px] font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded">
            {product.brakes.includes('Disc') ? 'Dual Disc' : 'Power V-Brake'}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
        <button
          onClick={() => openEnquiry(product.name)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-novaine-purple hover:bg-novaine-purple-dark text-white text-xs font-bold py-2.5 rounded-lg shadow-sm transition-all"
        >
          <Send className="w-3.5 h-3.5" /> Enquire Now
        </button>
        <Link
          href={'/bicycles/' + product.id}
          className="flex-1 inline-flex items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold py-2.5 rounded-lg transition-all"
        >
          View Details <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
