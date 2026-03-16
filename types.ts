
export interface OfficeHours {
  weekday: string;
  saturday: string;
  lunch: string;
  closed: string;
}

export interface ContactInfo {
  telemedicine: string;
  general: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
