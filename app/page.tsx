import StatCard from "./components/StatCard";

const stats = [
  { title: "Всего клиентов",  value: "125",       icon: "👥", change: "+12%", positive: true },
  { title: "Активные сделки",  value: "43",        icon: "💼", change: "+5%",  positive: true },
  { title: "Новые за месяц",   value: "12",        icon: "✨", change: "+18%", positive: true },
  { title: "Доход",            value: "580 000 ₽", icon: "💰", change: "-3%",  positive: false },
];

const recentClients = [
  { id: 1, name: "Иванов Иван",     email: "ivanov@mail.ru",    phone: "+7 (999) 111-22-33", status: "Активный" },
  { id: 2, name: "Петрова Мария",    email: "petrova@gmail.com", phone: "+7 (999) 444-55-66", status: "Новый" },
  { id: 3, name: "Сидоров Алексей",  email: "sidorov@yandex.ru", phone: "+7 (999) 777-88-99", status: "Активный" },
  { id: 4, name: "Козлова Анна",     email: "kozlova@mail.ru",   phone: "+7 (999) 000-11-22", status: "Неактивный" },
  { id: 5, name: "Морозов Дмитрий",  email: "morozov@gmail.com", phone: "+7 (999) 333-44-55", status: "Новый" },
];

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Добро пожаловать! 👋</h1>
        <p className="text-gray-400 mt-1">Вот что происходит в вашей CRM сегодня</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700">
        <div className="p-5 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Последние клиенты</h3>
          <p className="text-sm text-gray-400 mt-1">Недавно добавленные клиенты</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4 text-sm font-medium text-gray-400">Имя</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Email</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Телефон</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Статус</th>
              </tr>
            </thead>
            <tbody>
              {recentClients.map((client) => (
                <tr key={client.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 text-sm font-bold">
                        {client.name.charAt(0)}
                      </div>
                      <span className="text-sm text-white font-medium">{client.name}</span>
                    </div>
                  </td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}