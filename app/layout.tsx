import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>

        <LanguageProvider>

          <Header />   {/* ✅ MUST BE HERE */}
          
          {children}

          <Footer />   {/* ✅ MUST BE HERE */}

        </LanguageProvider>

      </body>
    </html>
  );
}