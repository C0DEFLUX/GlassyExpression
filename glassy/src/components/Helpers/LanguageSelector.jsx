import React from 'react';

const LanguageSelector = ({ currentLanguage, onChangeLanguage }) => {
    return (
        <select value={currentLanguage} onChange={(e) => onChangeLanguage(e.target.value)}>
            <option value="lv">LV</option>
            <option value="eng">EN</option>
            <option value="ru">RU</option>
        </select>
    );
};

export default LanguageSelector;