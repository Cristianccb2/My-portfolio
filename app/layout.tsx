import type { Metadata } from "next";
import { Onest} from "next/font/google";
import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Contact from "@/components/layout/Contact";


const currentYear = new Date().getFullYear();

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio CristianC",
  description: "Designed by Cristian Cabrera",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>",
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
      className={`${onest.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navbar/>
        <div className="mt-16">
          {children}
        </div>
        <section id="Contact">
          <Contact/>
        </section>

        <footer>
          <div className="mt-20 pt-8 border-t border-gray-100 dark:border-gray-400 flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="flex items-center gap-4 text-gray-400 italic text-sm">
            <span>Built with Next.js & TypeScript</span>
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Cristian Cabrera. Bogotá, Colombia.
          </p>
        </div>
        </footer>
      </body>
    </html>
  );
}
