
import Navbar from "@/components/Navbar";
import { ShopContextProvider } from "@/context/ShopContext";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopContextProvider>
          <Navbar />
          {children}
        </ShopContextProvider>
      </body>
    </html>
  );
}
