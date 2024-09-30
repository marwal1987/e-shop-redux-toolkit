import TagManager from "react-gtm-module";

const GTM_ID = import.meta.env.VITE_GTM_ID;

export const initGTM = () => {
  const tagManagerArgs = {
    gtmId: GTM_ID,
  };
  TagManager.initialize(tagManagerArgs);
  console.log("Google Tag Manager initialized");
};

// react-gtm-module tar hand om att lägga till Google Tag Manager-skriptet i bakgrunden, så att man slipper kopiera in skriptkoden manuellt i index.html.
// Genom att använda detta bibliotek kan man hantera all Google Tag Manager-konfiguration i JavaScript, vilket gör det mer dynamiskt och enklare att underhålla.
