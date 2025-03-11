import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Initialize Fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

// Metadata
export const metadata = {
  title: "My-Portfolio",
  description: "",
};

// Root Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${ovo.variable} antialiased leading-6 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
