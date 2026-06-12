import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// Подключаем красивый шрифт
const inter = Inter({ subsets: ["latin", "cyrillic"] });

// Мета-данные сайта (название вкладки в браузере)
export const metadata: Metadata = {
  title: "CRM Клиенты",
  description: "Система управления клиентами",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          {/* Боковое меню — всегда слева */}
          <Sidebar />

          {/* Основная часть */}
          <div className="flex-1 flex flex-col">
            {/* Шапка — всегда сверху */}
            <Header />

            {/* Контент страницы — меняется */}
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}


