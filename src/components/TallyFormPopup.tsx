import { useState } from 'react';

interface TallyFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TallyFormPopup({ isOpen, onClose }: TallyFormPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-lg">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <span className="sr-only">Close</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <iframe
          src="YOUR_TALLY_FORM_URL_HERE"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Get Quotes Form"
        ></iframe>
      </div>
    </div>
  );
} 