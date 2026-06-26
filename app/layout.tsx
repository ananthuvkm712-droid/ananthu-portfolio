import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ananthu Surendran | Graphic Designer & Video Editor",
  description:
    "Portfolio of Ananthu Surendran showcasing graphic design, logo design, wedding invitations, print design and video editing.",

  keywords: [
    "Graphic Designer",
    "Video Editor",
    "Wedding Invitation Designer",
    "Logo Designer",
    "Poster Designer",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "After Effects",
    "Kerala Graphic Designer",
    "Kayamkulam",
  ],

  authors: [{ name: "Ananthu Surendran" }],

  creator: "Ananthu Surendran",

  openGraph: {
    title: "Ananthu Surendran | Portfolio",
    description:
      "Graphic Designer & Video Editor Portfolio.",
    url: "https://YOUR-DOMAIN.vercel.app",
    siteName: "Ananthu Portfolio",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ananthu Surendran | Portfolio",
    description: "Graphic Designer & Video Editor",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}

        <Toaster
          position="top-right"
          richColors
          theme="dark"
          closeButton
          duration={3000}
        />
      </body>
      
    </html>
  );
}
