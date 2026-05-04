// dom.js - Responsável pela manipulação do DOM
export const DOM = {
    elements: {
        inputSearch: null,
        btnSearch: null,
        profileResults: null
    },

    init() {
        this.elements.inputSearch = document.getElementById('input-search');
        this.elements.btnSearch = document.getElementById('btn-search');
        this.elements.profileResults = document.querySelector('.profile-results');
    },

    getUserName() {
        return this.elements.inputSearch.value.trim();
    },

    clearResults() {
        this.elements.profileResults.innerHTML = '';
    },

    setResults(html) {
        this.elements.profileResults.innerHTML = html;
    },

    addEventListener(event, handler) {
        this.elements.btnSearch.addEventListener(event, handler);
    }
};