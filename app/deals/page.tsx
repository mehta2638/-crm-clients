export default function AnalyticsPage() {
    return (
      <div>
        {/* Заголовок */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Аналитика</h1>
          <p className="text-gray-400 mt-1">Статистика и отчёты</p>
        </div>
  
        {/* Графики (визуальные блоки) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* График доходов */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Доходы по месяцам</h3>
            <div className="flex items-end gap-3 h-48">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-blue-500/80 rounded-t-sm hover:bg-blue-400 transition-colors"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-500">
                    {["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Клиенты по статусу */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Клиенты по статусу</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Активные</span>
                  <span className="text-white font-medium">78 (62%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "62%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Новые</span>
                  <span className="text-white font-medium">32 (26%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "26%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Неактивные</span>
                  <span className="text-white font-medium">15 (12%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "12%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Нижний ряд */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Топ клиенты */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-5 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Топ клиенты по доходу</h3>
            <div className="space-y-3">
              {[
                { name: "АО Технологии",      amount: "350 000 ₽", percent: 100 },
                { name: "ООО Дизайн Студия",   amount: "280 000 ₽", percent: 80 },
                { name: "ООО Рога и Копыта",   amount: "150 000 ₽", percent: 43 },
                { name: "ИП Петрова",          amount: "80 000 ₽",  percent: 23 },
                { name: "ИП Морозов",          amount: "45 000 ₽",  percent: 13 },
              ].map((client, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 w-6">{i + 1}.</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">{client.name}</span>
                      <span className="text-gray-400">{client.amount}</span>
                    </div>
                    <div className="w-full
  
  
  g-gray-700 rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${client.percent}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Быстрые цифры */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Сводка</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Средний чек</span>
                <span className="text-white font-medium">72 500 ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Конверсия</span>
                <span className="text-green-400 font-medium">34%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Повторные обращения</span>
                <span className="text-white font-medium">28%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Ср. время сделки</span>
                <span className="text-white font-medium">14 дней</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">NPS</span>
                <span className="text-green-400 font-medium">8.5 / 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } 