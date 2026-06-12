"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Список пунктов меню
const menuItems = [
  { name: "Главная",    href: "/",          icon: "📊" },
  { name: "Клиенты",    href: "/clients",   icon: "👥" },
  { name: "Сделки",     href: "/deals",     icon: "💼" },
  { name: "Аналитика",  href: "/analytics", icon: "📈" },
  { name: "Настройки",  href: "/settings",  icon: "⚙️" },
];

export default function Sidebar() {
  // Узнаём на какой странице мы сейчас
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 min-h-screen p-4">
      {/* Логотип */}
      <div className="mb-8 px-2">
        <h1 className="text-xl font-bold text-white">🏢 CRM Клиенты</h1>
        <p className="text-xs text-gray-500 mt-1">Управление клиентами</p>
      </div>

      {/* Пункты меню */}
      <nav className="space-y-1">
        {menuItems.map((item) => {
          // Проверяем, активен ли пункт меню
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Нижняя часть меню */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gray-800 rounded-lg p-3">
          <p className="text-sm text-white font-medium">Бесплатный план</p>
          <p className="text-xs text-gray-400 mt-1">5 из 50 клиентов</p>
          <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "10%" }}></div>
          </div>
        </div>
      </div>
    </aside>
  );
}