import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "GitHub CLI Explorer",
  description: "Search GitHub profiles in a terminal-like UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "black",
              border: "1px solid white",
              color: "#00ff88",
              fontFamily: "monospace",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
