import { useState , useEffect } from "react";
import Navbar from "../components/Nav/Navbar";
import { StoreContextProvider } from "../components/Store/store-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) {
    return null
  }

  return (
    <StoreContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </StoreContextProvider>
  );
}

export default MyApp;
