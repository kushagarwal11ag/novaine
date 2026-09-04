import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { EnquiryProvider } from '@/context/EnquiryContext';
import EnquiryModal from '@/components/EnquiryModal';
import WhatsAppFab from '@/components/WhatsAppFab';

export const metadata: Metadata = {
  title: 'Novaine Bikes',
  description:
    'Premier manufacturer of bicycles.',
  icons: {
    icon: '/assets/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <EnquiryProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <EnquiryModal />
          <WhatsAppFab />
        </EnquiryProvider>
      </body>
    </html>
  );
}
