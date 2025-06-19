import './globals.css';
import { Inter } from 'next/font/google';
import { Cookie } from 'next/font/google';
import Nav from '@/components/navigation/Nav_1';
import Footer from '@/components/footer/Footer_1';
import Banner from '@/components/banner/Banner_1';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cookie = Cookie({ weight: '400', subsets: ['latin'], variable: '--font-cookie' });

export const metadata = {
  title: 'Wheldrakes – Artisan Coffee & Brunch in York',
  description:
    'Wheldrakes is a beloved independent café in York, serving artisan coffee, fresh brunch, and homemade treats in a cosy, relaxed setting just minutes from York Minster.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cookie.variable} antialiased`}>
        <Banner />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
