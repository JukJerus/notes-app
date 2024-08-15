import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Box, Heading } from "@chakra-ui/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Heading color={"black"} fontSize={"30px"} fontWeight={"bold"}>
          <Box bgColor={"lightblue"} padding={"10px"}>Notes App</Box>
        </Heading>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
