
import React from 'react';
import { CLINIC_NAME, CONTACT } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            Y
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">{CLINIC_NAME}</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">병원소개</a>
          <a href="#telemedicine" className="hover:text-blue-600 transition-colors">비대면진료</a>
          <a href="#hours" className="hover:text-blue-600 transition-colors">진료시간</a>
          <a href="#location" className="hover:text-blue-600 transition-colors">오시는길</a>
        </nav>
        <a 
          href={`tel:${CONTACT.telemedicine.replace(/-/g, '')}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
        >
          비대면 상담
        </a>
      </div>
    </header>
  );
};

export default Header;
