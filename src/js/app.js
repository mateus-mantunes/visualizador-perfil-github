// app.js - Lógica principal da aplicação
import { DOM } from './dom.js';
import { API } from './api.js';
import { UI } from './ui.js';

export const App = {
    init() {
        DOM.init();
        this.bindEvents();
    },

    bindEvents() {
        DOM.addEventListener('click', this.handleSearch.bind(this));
    },

    async handleSearch() {
        const userName = DOM.getUserName();

        if (!userName) {
            UI.showValidationError('Por favor, digite um nome de usuário do GitHub.');
            return;
        }

        try {
            // Exibir loading
            DOM.setResults(UI.renderLoading());

            // Buscar dados do usuário
            const userData = await API.fetchUser(userName);
            console.log(userData); // Apenas para verificar se os dados foram obtidos corretamente

            // Renderizar perfil
            DOM.setResults(UI.renderProfile(userData));

        } catch (error) {
            if (error.message === 'Usuário não encontrado') {
                UI.showError('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
            } else {
                UI.showError('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
            }
            DOM.clearResults();
        }
    }
};