
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import { ShopContextProvider } from "@/context/ShopContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      <ShopContextProvider>
          <Navbar />
          {children}
          <Footer/>
      </ShopContextProvider>

      </body>
    </html>
  );
}