import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VV | Ville Valo',
  description: 'Ville Valo | Neon Noir',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <meta property="og:description" content="Neon Noir by VV." />
      <meta property="og:url" content="https://www.heartagram.com.br/" />

      <meta
        property="og:image"
        content="https://www.heartagram.com.br/bg_ville2_resize.jpeg"
      />
      <meta
        property="og:image:secure_url"
        content="https://www.heartagram.com.br/bg_ville2_resize.jpeg"
      />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="732" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
