// app/layout.tsx
import MainTemplates from "@/components/templates/MainTemplates";
import "@/uploads/styles/header/header.css";
import { Dela_Gothic_One } from 'next/font/google';
import localFont from 'next/font/local';

const graphik = localFont({
  src: [
    {
      path: "../../public/assets/Graphik/Graphik-Regular-Trial.otf",
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/Graphik/Graphik-Semibold-Trial.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/Graphik/Graphik-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-graphik',
});

const delaGothic = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dela-gothic',
});

export const metadata = {
  title: "Quadeye",
  description: "India's Leading Proprietary Trading Firm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${graphik.variable} ${delaGothic.variable}`}>
      <body className="antialiased">
        <MainTemplates>
          {children}
        </MainTemplates>
      </body>
    </html>
  );
}