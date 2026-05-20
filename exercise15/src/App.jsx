import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const App = () => {
  const [language, setLanguage] = useState("Hello");

  const toggleLanguage = (prev) => {
    setLanguage(prev === "Hello" ? "!Hola!" : "Hello");
  };
  return (
    <LanguageContext.Provider value={language}>
      <button onClick={toggleLanguage}>
        swit to {language === "hello" ? "!Spanish!" : "English"}
      </button>
      <h2>{language}</h2>
      <LanguageContext />
    </LanguageContext.Provider>
  );
};

export default App;
