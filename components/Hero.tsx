
import React from 'react';
import { CONTACT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 bg-white">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-6 tracking-wider uppercase">
            Best Care, Anytime, Anywhere
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
            당신의 건강을 위해<br />
            <span className="text-blue-600">양전호내과</span>가 함께합니다
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            바쁜 일상 속에서도 전문의의 정확한 진료를 받아보세요.<br />
            전화 한 통으로 시작하는 비대면 진료부터 꼼꼼한 대면 진료까지,<br />
            환자 한 분 한 분 정성을 다해 모십니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${CONTACT.telemedicine.replace(/-/g, '')}`}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              비대면 진료 연결
            </a>
            <a 
              href="#location"
              className="flex items-center justify-center gap-2 bg-slate-100 text-slate-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              병원 오시는 길
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="avatar" className="w-10 h-10 rounded-full border-2 border-white" />
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              <span className="text-slate-900 font-bold">10,000+</span> 명의 환자가 신뢰하고 방문했습니다
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-2/5 h-3/4 rounded-l-[100px] overflow-hidden shadow-2xl">
        <img 
          src="https://picsum.photos/seed/hospital/800/1000" 
          alt="Clinic Interior" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
