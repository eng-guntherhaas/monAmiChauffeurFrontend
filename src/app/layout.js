import { Inter } from "next/font/google";
// import "./globals.css";
import Navbar from "./components/navbar";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Box>{children}</Box>
      </body>
    </html>
  );
}
