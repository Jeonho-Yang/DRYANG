
import { OfficeHours, ContactInfo } from './types';

export const CLINIC_NAME = '양전호내과의원';
export const ADDRESS = '서울 은평구 통일로 863 양전호내과의원';

export const OFFICE_HOURS: OfficeHours = {
  weekday: '08:30 ~ 18:00',
  saturday: '09:00 ~ 13:30',
  lunch: '13:00 ~ 14:00',
  closed: '일요일 / 공휴일 휴진'
};

export const CONTACT: ContactInfo = {
  telemedicine: '0507-1435-2602',
  general: '0507-1435-2602'
};

export const MAP_LINK = 'https://map.naver.com/v5/search/' + encodeURIComponent(ADDRESS);