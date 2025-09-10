import './globals.css'
export const metadata = {
  title: 'Softment',
  description: 'Softment app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pretendard@latest/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}


