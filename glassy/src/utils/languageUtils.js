export const getPreferredLanguage = () => {
    return localStorage.getItem('language') || 'lv';
};

export const setPreferredLanguage = (language) => {
    localStorage.setItem('language', language);
};