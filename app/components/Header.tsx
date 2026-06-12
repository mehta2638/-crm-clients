"use client";

import { usePathname } from "next/navigation";

// Названия страниц
const pageTitles: Record<string, string> = {
  "/":          "Главная",
  "/clients":   "Клиенты",
  "/deals":     "Сделки",
  "/analytics": "Аналитика",
  "/settings":  "Настройки",
};

export default function Header() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Страница";

  return (
    <header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      {/* Название текущей страницы */}
      <h2 className="text-lg font-semibold text-white">{title}</h2>

      {/* Правая часть — профиль */}
      <div className="flex items-center gap-4">
        {/* Уведомления */}
        <button className="text-gray-400 hover:text-white transition-colors relative">
          🔔
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Аватар пользователя */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
            ИК
          </div>
          <span className="text-sm text-gray-300">Иван Кайнов</span>
        </div>
      </div>
    </header>
  );
}