
import React from 'react';
import { OFFICE_HOURS, CONTACT } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="hours" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Operating Hours Card */}
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">진료 시간 안내</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-50">
                <span className="text-slate-600 font-medium">평일</span>
                <span className="text-slate-900 font-bold">{OFFICE_HOURS.weekday}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-50">
                <span className="text-slate-600 font-medium">토요일</span>
                <span className="text-slate-900 font-bold">{OFFICE_HOURS.saturday}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-50">
                <span className="text-slate-600 font-medium text-orange-600">점심시간</span>
                <span className="text-orange-600 font-bold">{OFFICE_HOURS.lunch}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-600 font-medium text-red-500">일요일 / 공휴일</span>
                <span className="text-red-500 font-bold">휴진</span>
              </div>
            </div>
          </div>

          {/* Contact Numbers Card */}
          <div className="space-y-6">
            <div className="bg-blue-600 p-8 lg:p-12 rounded-3xl shadow-xl shadow-blue-100 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                </div>
                <h2 className="text-2xl font-bold">비대면 진료 전용</h2>
              </div>
              <p className="text-blue-100 mb-2 font-medium">원격 진료 및 처방 상담</p>
              <a href={`tel:${CONTACT.telemedicine.replace(/-/g, '')}`} className="text-3xl lg:text-4xl font-black block hover:underline decoration-white/30 decoration-4 underline-offset-8">
                {CONTACT.telemedicine}
              </a>
              <p className="mt-8 text-sm text-blue-100/80 leading-relaxed">
                * 비대면 진료는 관련 법규에 따라 진행됩니다.<br />
                전화 연결 후 상담원의 안내에 따라 진료를 시작하세요.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-slate-500 font-medium mb-1">일반 상담 및 예약</p>
                <a href={`tel:${CONTACT.general.replace(/-/g, '')}`} className="text-2xl font-bold text-slate-800">
                  {CONTACT.general}
                </a>
              </div>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
