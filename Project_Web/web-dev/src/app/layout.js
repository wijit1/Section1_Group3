
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { Toaster , toast } from "sonner";
import "./globals.css";
import { ShopContextProvider } from "@/context/ShopContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      <ShopContextProvider>
          <Navbar />
          {children}
          <Toaster richColors  position="bottom-right"/>
          <Footer/>
      </ShopContextProvider>

      </body>
    </html>
  );
}