export interface CopyTrader {
    ct_id: string;
    ct_uid: string;
    ct_name: string;
    ct_profit: string | number;
    ct_amount: string | number;
    ct_win_rate: string | number;
    ct_withdrawal: string | number;
    ct_description: string;
    ct_profile_url: string;
    ct_verified: string | number;

    ct_social_facebook?: string | null;
    ct_social_telegram?: string | null;
    ct_social_whatsapp?: string | null;
    ct_social_signal?: string | null;
    ct_social_linkedin?: string | null;

    ct_show_on_homepage: string | number;
    ct_active: string | number;
    ct_created_time: string;
    ct_modified_time: string;
}

function getApiBase(): string {
    let base = (process.env.NEXT_PUBLIC_API_URL ?? "https://api.tradesignalhive.com").trim();
    if (base.endsWith('/')) base = base.slice(0, -1);
    return base;
}

function getHeaders(): HeadersInit {
    const token = process.env.NEXT_PUBLIC_TSH_ACCESS_TOKEN;
    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (token) headers['tsh-access-token'] = token;
    return headers;
}

export const copyTraderApi = {
    getCopyTraders: async (): Promise<{ status: boolean; data: CopyTrader[] }> => {
        try {
            const response = await fetch(`${getApiBase()}/copy-traders`, {
                headers: getHeaders(),
                next: { revalidate: 300 } // Cache for 5 minutes
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch copy traders: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error (getCopyTraders):', error);
            return { status: false, data: [] };
        }
    },

    getTraderByUid: async (uid: string): Promise<{ status: boolean; data: CopyTrader | null }> => {
        try {
            const response = await fetch(`${getApiBase()}/copy-traders/${uid}`, {
                headers: getHeaders(),
                next: { revalidate: 300 }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch trader: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error(`API Error (getTraderByUid:${uid}):`, error);
            return { status: false, data: null };
        }
    }
};
