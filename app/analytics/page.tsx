// Данные сделок
const deals = [
    { id: 1, title: "Разработка сайта",     client: "ООО Рога и Копыта",  amount: "150 000 ₽", stage: "Переговоры",   date: "2025-03-01" },
    { id: 2, title: "Настройка CRM",        client: "ИП Петрова",         amount: "80 000 ₽",  stage: "В работе",     date: "2025-02-15" },
    { id: 3, title: "Мобильное приложение",  client: "АО Технологии",      amount: "350 000 ₽", stage: "Предложение",  date: "2025-03-05" },
    { id: 4, title: "Дизайн логотипа",      client: "ООО Цветы",          amount: "25 000 ₽",  stage: "Завершена",    date: "2025-01-20" },
    { id: 5, title: "SEO продвижение",      client: "ИП Морозов",         amount: "45 000 ₽",  stage: "В работе",     date: "2025-02-28" },
    { id: 6, title: "Интернет-магазин",     client: "ООО Дизайн Студия",  amount: "280 000 ₽", stage: "Переговоры",   date: "2025-03-08" },
  ];
  
  // Цвета для разных стадий
  function getStageStyle(stage: string) {
    switch (stage) {
      case "Предложение": return "bg-purple-500/10 text-purple-400";
      case "Переговоры":  return "bg-yellow-500/10 text-yellow-400";
      case "В работе":    return "bg-blue-500/10 text-blue-400";
      case "Завершена":   return "bg-green-500/10 text-green-400";
      default:            return "bg-gray-500/10 text-gray-400";
    }
  }
  
  export default function DealsPage() {
    return (
      <div>
        {/* Заголовок */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Сделки</h1>
            <p className="text-gray-400 mt-1">Управление сделками и продажами</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors flex items-center gap-2">
            <span className="text-lg">+</span>
            Новая сделка
          </button>
        </div>
  
        {/* Карточки-сводка */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
            <p className="text-sm text-purple-400">Предложение</p>
            <p className="text-xl font-bold text-white mt-1">350 000 ₽</p>
            <p className="text-xs text-gray-400 mt-1">1 сделка</p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
            <p className="text-sm text-yellow-400">Переговоры</p>
            <p className="text-xl font-bold text-white mt-1">430 000 ₽</p>
            <p className="text-xs text-gray-400 mt-1">2 сделки</p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <p className="text-sm text-blue-400">В работе</p>
            <p className="text-xl font-bold text-white mt-1">125 000 ₽</p>
            <p className="text-xs text-gray-400 mt-1">2 сделки</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
            <p className="text-sm text-green-400">Завершено</p>
            <p className="text-xl font-bold text-white mt-1">25 000 ₽</p>
            <p className="text-xs text-gray-400 mt-1">1 сделка</p>
          </div>
        </div>
  
        {/* Таблица сделок */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-800/50">
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Сделка</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Клиент</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Сумма</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Стадия</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Дата</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Действия</th>
                </tr>
              </thead>
              <tbody>
                {deals.map((deal) => (
                  <tr key={deal.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                    <td className="p-4">
                      <span className="text-sm text-white font-medium">{deal.title}</span>
                    </td>
                    <td className="p-4 text-sm text-gray-400">{deal.client}</td>
                    <td className="p-4 text-sm text-white font-medium">{deal.amount}</td>
                    <td className="p-4">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStageStyle(deal.stage)}`}>
                        {deal.stage}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-400">{deal.date}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-blue-400 transition-colors text-sm">✏️</button>
                        <button className="text-gray-400 hover:text-red-400 transition-colors text-sm">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } 