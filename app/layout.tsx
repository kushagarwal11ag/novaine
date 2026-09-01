import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { EnquiryProvider } from '@/context/EnquiryContext';
import EnquiryModal from '@/components/EnquiryModal';
import WhatsAppFab from '@/components/WhatsAppFab';

export const metadata: Metadata = {
  title: 'Novaine Bikes | V&U Industries - Ludhiana, Punjab - 141003',
  description:
    'Novaine Bikes by V&U Industries Ludhiana Punjab. Premier manufacturer of kids bicycles (Kombat, Magnet, Boomer in 14T, 16T, 20T) and ranger bicycles (Hunt, Hunt Pro, Cyclone in 24T, 26T).',
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
