import React, { useState } from "react";

const LangContext = React.createContext({
  lang: "hr",
  setLang: (user: string) => {},
});

const LangContextProvider = ({ children }: Props) => {
  const [lang, setLang] = useState("hr");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

type Props = {
  children: any;
};

export { LangContext, LangContextProvider };
