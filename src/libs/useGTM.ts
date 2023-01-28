import { useEffect } from "react";
import TagManager from "react-gtm-module";

export const useGTM = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID || "" });
  }, []);
};
