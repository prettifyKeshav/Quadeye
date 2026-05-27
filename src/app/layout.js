// import "./global.css";
import MainTemplates from "@/components/templates/MainTemplates";
import "@/uploads/styles/header/header.css"
import { Dela_Gothic_One } from 'next/font/google'

const delaGothic = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: "Quadeye",
  description: "India’s Leading Proprietary Trading Firm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased" >
        <MainTemplates>
          {children}
        </MainTemplates>
      </body>
    </html>
  );
}
