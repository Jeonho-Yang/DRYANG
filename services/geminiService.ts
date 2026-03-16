
import { GoogleGenAI } from "@google/genai";
import { CLINIC_NAME, ADDRESS, OFFICE_HOURS, CONTACT } from "../constants";

export const getGeminiResponse = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const systemInstruction = `
    당신은 '${CLINIC_NAME}'의 친절한 상담 도우미입니다. 
    사용자가 증상에 대해 묻거나 병원 정보를 물어볼 때 답변하세요.
    
    병원 정보:
    - 위치: ${ADDRESS}
    - 평일 진료: ${OFFICE_HOURS.weekday}
    - 토요일 진료: ${OFFICE_HOURS.saturday}
    - 점심 시간: ${OFFICE_HOURS.lunch}
    - 휴진: ${OFFICE_HOURS.closed}
    - 비대면 전용 연락처: ${CONTACT.telemedicine}
    - 일반 문의 연락처: ${CONTACT.general}

    지침:
    1. 답변은 항상 친절하고 정중하게 하세요.
    2. 의학적 진단은 할 수 없음을 명시하고, 비대면 진료나 방문 진료를 권장하세요.
    3. 간단한 증상 완화 팁은 줄 수 있으나 전문적인 처방은 병원을 통해야 한다고 강조하세요.
    4. 한국어로만 답변하세요.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "죄송합니다. 현재 답변을 드릴 수 없습니다. 병원으로 직접 전화 문의 부탁드립니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "연결 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
  }
};
