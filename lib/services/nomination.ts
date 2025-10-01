interface NominationData {
  nomineeName: string;
  nomineeEmail: string;
  department: string;
  position: string;
  achievements: string;
  reason: string;
  nominatorName: string;
  nominatorEmail: string;
  source: string;
}

interface NominationResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const WEBHOOK_URL = "https://n8n.ican.vn/webhook/2a2a510b-af60-4000-b250-323b7a1b3e0d";

export const submitNomination = async (data: NominationData): Promise<NominationResponse> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
        
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    
    return {
      success: true,
      message: 'Đề cử đã được gửi thành công!'
    };
  } catch (error) {
    console.error('Error submitting nomination:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Có lỗi xảy ra khi gửi đề cử'
    };
  }
};

export type { NominationData, NominationResponse };
