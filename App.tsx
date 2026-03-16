
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import LocationSection from './components/LocationSection';
import GeminiChat from './components/GeminiChat';
import { CLINIC_NAME, ADDRESS, CONTACT } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Telemedicine Banner */}
        <div id="telemedicine" className="bg-slate-900 py-12 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-12 h-full">
              {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="border-[0.5px] border-white/20"></div>
              ))}
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">비대면 진료가 가능합니다</h2>
              <p className="text-slate-400">전화 한 통으로 원격 처방과 상담을 한 번에 해결하세요.</p>
            </div>
            <div className="flex gap-4">
               <a 
                href={`tel:${CONTACT.telemedicine.replace(/-/g, '')}`}
                className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
              >
                상담 전화 연결
              </a>
            </div>
          </div>
        </div>

        <InfoSection />
        <LocationSection />
      </main>

      <footer className="bg-slate-900 text-slate-500 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  Y
                </div>
                <span className="font-bold text-lg text-white">{CLINIC_NAME}</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-sm">
                환자 중심의 진료 철학으로 지역 사회의 건강을 책임집니다.<br />
                언제나 따뜻하고 정직한 진료로 보답하겠습니다.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">고객센터</h4>
              <ul className="space-y-4 text-sm">
                <li>비대면: <a href={`tel:${CONTACT.telemedicine.replace(/-/g, '')}`} className="hover:text-blue-500">{CONTACT.telemedicine}</a></li>
                <li>일반: <a href={`tel:${CONTACT.general.replace(/-/g, '')}`} className="hover:text-blue-500">{CONTACT.general}</a></li>
                <li className="pt-2">팩스: 02-385-2601</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">오시는 길</h4>
              <p className="text-sm leading-loose">
                {ADDRESS}<br />
                연신내역 인근 위치
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between gap-4">
            <p>&copy; 2024 {CLINIC_NAME}. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-slate-300 cursor-pointer transition-colors">이용약관</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors font-bold text-slate-400">개인정보처리방침</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors">환자권리장전</span>
            </div>
          </div>
        </div>
      </footer>

      <GeminiChat />
    </div>
  );
};

export default App;
