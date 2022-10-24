import Navbar from "../components/Nav/Navbar";
import { StoreContextProvider } from "../components/Store/store-context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </StoreContextProvider>
  );
}

export default MyApp;
