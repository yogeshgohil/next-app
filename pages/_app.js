import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
