import Header from '@/components/Header';
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Medium Blog",
  description: "Create and Share posts with the world",
  icons: "/fav.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
