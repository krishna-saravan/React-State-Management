import React, { useContext } from 'react';
import { LanguageContext } from './Store';

export const Greeting = () => {
  const { language } = useContext(LanguageContext);

  let greeting = 'Hello';

  if (language === 'fr') {
    greeting = 'Bonjour';
  } else if (language === 'es') {
    greeting = 'Hola';
  }

  return <h1>{greeting}!</h1>;
};
