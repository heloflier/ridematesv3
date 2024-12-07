// src/services/authService.ts
interface LoginResponse {
    token?: string;
    id?: string;
    error?: string;
}

export const authService = {
    async login(email: string, password: string): Promise<LoginResponse> {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            return { error: 'Login failed' };
        }
    }
};
