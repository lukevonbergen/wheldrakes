import './globals.css';
import { Inter } from 'next/font/google';
import { Playpen_Sans } from 'next/font/google';
import Nav from '@/components/navigation/Nav_1';
import Footer from '@/components/footer/Footer_1';
import Banner from '@/components/banner/Banner_1';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playpen = Playpen_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-playpen',
});

export const metadata = {
  title: 'Wheldrakes – Artisan Coffee & Brunch in York',
  description:
    'Wheldrakes is a beloved independent café in York, serving artisan coffee, fresh brunch, and homemade treats in a cosy, relaxed setting just minutes from York Minster.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <body className={`${playpen.variable} font-sans antialiased`}>
        <Banner />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}