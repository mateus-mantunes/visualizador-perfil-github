// ui.js - Responsável pela renderização da interface
export const UI = {
    renderLoading() {
        return `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <span class="loading-text">Buscando perfil...</span>
            </div>
        `;
    },

    renderProfile(userData) {
        return `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}"
                class="profile-avatar">
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
                </div>
            </div>

            <div class="profile-counters">
                <div class="followers">
                    <h4>👥 Seguidores</h4>
                    <span>${userData.followers}</span>
                </div>
                <div class="following">
                    <h4>👥 Seguindo</h4>
                    <span>${userData.following}</span>
                </div>
            </div>
        `;
    },

    showError(message) {
        alert(message);
    },

    showValidationError(message) {
        alert(message);
    }
};