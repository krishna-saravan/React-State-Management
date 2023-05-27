import { useContext } from 'react';
import { LanguageContext } from './Store';

export const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
    </select>
  );
};