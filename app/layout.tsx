import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title:
    "Image to Base64 Converter - Encode Images Online | image-to-base64",
  description:
    "Free online image to Base64 converter. Drag and drop images to encode them as Base64 strings, Data URIs, CSS backgrounds, or HTML img tags. Supports PNG, JPG, GIF, SVG, WebP, and ICO.",
  keywords: [
    "image to base64",
    "base64 image encoder",
    "convert image to base64",
    "base64 encode image",
    "image base64 string",
    "data uri generator",
  ],
  authors: [{ name: "image-to-base64" }],
  openGraph: {
    title: "Image to Base64 Converter - Encode Images Online",
    description:
      "Free online tool to convert images to Base64 strings. Supports PNG, JPG, GIF, SVG, WebP, and ICO with multiple output formats.",
    url: "https://image-to-base64.vercel.app",
    siteName: "image-to-base64",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image to Base64 Converter - Encode Images Online",
    description:
      "Free online tool to convert images to Base64 strings. Supports PNG, JPG, GIF, SVG, WebP, and ICO with multiple output formats.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://image-to-base64.vercel.app",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Image to Base64 Converter",
              description:
                "Free online image to Base64 converter. Encode images as Base64 strings, Data URIs, CSS backgrounds, or HTML img tags.",
              url: "https://image-to-base64.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Drag and drop image upload",
                "Base64 encoding for PNG, JPG, GIF, SVG, WebP, ICO",
                "Multiple output formats (Raw, Data URI, CSS, HTML)",
                "Base64 to Image reverse conversion",
                "File size comparison",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
