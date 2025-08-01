import '@/app/globals.css';
import Header from './components/layout/header';

export const metadata = {
  icons: {
    icon: '/favicon.icon',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
