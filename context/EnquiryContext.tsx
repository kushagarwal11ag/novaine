'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EnquiryContextType {
  isOpen: boolean;
  selectedModel: string;
  openEnquiry: (modelName?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Novaine Kombat');

  const openEnquiry = (modelName?: string) => {
    if (modelName) setSelectedModel(modelName);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryContext.Provider value={{ isOpen, selectedModel, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
