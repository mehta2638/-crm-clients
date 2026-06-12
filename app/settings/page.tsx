// Данные клиентов (пока фейковые, позже подключим базу данных)
const clients = [
    { id: 1, name: "Иванов Иван Петрович",     company: "ООО Рога и Копыта",   email: "ivanov@mail.ru",    phone: "+7 (999) 111-22-33", status: "Активный",   date: "2025-01-15" },
    { id: 2, name: "Петрова Мария Сергеевна",   company: "ИП Петрова",          email: "petrova@gmail.com", phone: "+7 (999) 444-55-66", status: "Новый",      date: "2025-02-20" },
    { id: 3, name: "Сидоров Алексей Николаевич", company: "АО Технологии",      email: "sidorov@yandex.ru", phone: "+7 (999) 777-88-99", status: "Активный",   date: "2025-01-08" },
    { id: 4, name: "Козлова Анна Дмитриевна",   company: "ООО Цветы",           email: "kozlova@mail.ru",   phone: "+7 (999) 000-11-22", status: "Неактивный", date: "2024-11-30" },
    { id: 5, name: "Морозов Дмитрий Олегович",  company: "ИП Морозов",          email: "morozov@gmail.com", phone: "+7 (999) 333-44-55", status: "Новый",      date: "2025-03-01" },
    { id: 6, name: "Волкова Елена Андреевна",    company: "ООО Дизайн Студия",   email: "volkova@mail.ru",   phone: "+7 (999) 666-77-88", status: "Активный",   date: "2025-02-14" },
    { id: 7, name: "Новиков Артём Игоревич",     company: "АО СтройГрупп",       email: "novikov@yandex.ru", phone: "+7 (999) 222-33-44", status: "Активный",   date: "2024-12-25" },
    { id: 8, name: "Фёдорова Ольга Викторовна",  company: "ИП Фёдорова",        email: "fedorova@gmail.com",phone: "+7 (999) 555-66-77", status: "Новый",      date: "2025-03-10" },
  ];
  
  export default function ClientsPage() {
    return (
      <div>
        {/* Заголовок + кнопка */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Клиенты</h1>
            <p className="text-gray-400 mt-1">Управление базой клиентов</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors flex items-center gap-2">
            <span className="text-lg">+</span>
            Добавить клиента
          </button>
        </div>
  
        {/* Поиск и фильтры */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="🔍 Поиск по имени, email или телефону..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-blue-500">
            <option>Все статусы</option>
            <option>Активный</option>
            <option>Новый</option>
            <option>Неактивный</option>
          </select>
        </div>
  
        {/* Таблица клиентов */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-800/50">
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Клиент</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Компания</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Email</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Телефон</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Статус</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Дата</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Действия</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items
  
  
  gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-bold">
                          {client.name.charAt(0)}
                        </div>
                        <span className="text-sm text-white font-medium">{client.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-400">{client.company}</td>
                    <td className="p-4 text-sm text-gray-400">{client.email}</td>
                    <td className="p-4 text-sm text-gray-400">{client.phone}</td>
                    <td className="p-4">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        client.status === "Активный"
                          ? "bg-green-500/10 text-green-400"
                          : client.status === "Новый"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-400">{client.date}</td>
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
  
          {/* Пагинация (низ таблицы) */}
          <div className="p-4 border-t border-gray-700 flex items-center justify-between">
            <p className="text-sm text-gray-400">Показано 8 из 125 клиентов</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">← Назад</button>
              <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-3 py-1.5 text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">2</button>
              <button className="px-3 py-1.5 text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">3</button>
              <button className="px-3 py-1.5 text-sm bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">Вперёд →</button>
            </div>
          </div>
        </div>
      </div>
    );
  }