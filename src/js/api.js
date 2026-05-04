// api.js - Responsável pelas chamadas da API do GitHub
const BASE_URL = 'https://api.github.com';

export const API = {
    async fetchUser(username) {
        try {
            const response = await fetch(`${BASE_URL}/users/${username}`);

            if (!response.ok) {
                throw new Error('Usuário não encontrado');
            }

            const userData = await response.json();
            return userData;
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
            throw error;
        }
    }
};