import "../styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../lib/components/Navbar";
import Footer from "../lib/components/Footer";

export const metadata: Metadata = {
  title: "Digital Product Jam Ex2",
  description: "Ex2 - Build a website with cool features.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: "0",
          backgroundColor: "#1e1e2f",
          color: "white",
        }}
      >
        <Navbar />
        <div
          style={{
            flex: "1",
            fontFamily: "Arial, sans-serif",
            color: "white",
            fontSize: "20px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
