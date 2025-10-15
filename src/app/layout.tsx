import Header from '@/components/Generic/Header/Header';
import Footer from '@/components/Generic/Footer/Footer';
import './main.scss'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <>
        <Header />
        {children}
        <Footer />
        </>
      </body>
    </html>
  );
}
