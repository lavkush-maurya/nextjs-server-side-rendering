import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import Preloader from "../components/Pre";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, children }) {
  const [load, updateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ChakraProvider>
      <Preloader load={load}>{children}</Preloader>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
