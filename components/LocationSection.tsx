
import React from 'react';
import { ADDRESS, MAP_LINK } from '../constants';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">찾아오시는 길</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-slate-100 rounded-[40px] overflow-hidden shadow-inner flex flex-col lg:flex-row h-[600px] border border-slate-200">
          <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-white border-r border-slate-200">
            <div className="mb-8">
              <p className="text-blue-600 font-bold mb-2 uppercase tracking-widest text-xs">Address</p>
              <p className="text-xl font-bold text-slate-900 leading-snug">
                {ADDRESS}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 text-blue-600">
                  <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"/></svg>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  3호선 연신내역에서 통일로를 따라 도보 이동 또는 버스를 이용해 주시기 바랍니다.
                </p>
              </div>
            </div>

            <a 
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 group"
            >
              지도로 위치 확인하기
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
          
          <div className="lg:w-2/3 relative">
            {/* Using a placeholder for the map visual - in production, this would be a real map API */}
            <div className="w-full h-full bg-slate-200 flex items-center justify-center relative">
               <img 
                src="https://picsum.photos/seed/mapview/1200/800" 
                alt="Static Map" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-red-500 rounded-full border-4 border-white shadow-xl animate-bounce flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
