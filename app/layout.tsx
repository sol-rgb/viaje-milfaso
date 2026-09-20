import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viaje Milfaso",
  description: "Cuatro viajes. Tres semanas. Una decisión.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f1efe9",
};

const FUENTES =
  "https://fonts.googleapis.com/css2" +
  "?family=Archivo:wght@300;400;500;600;700" +
  "&family=IBM+Plex+Mono:wght@400" +
  "&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={FUENTES} rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
