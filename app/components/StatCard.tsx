// Карточка статистики на главной странице

type StatCardProps = {
    title: string;   // Название (например "Всего клиентов")
    value: string;   // Значение (например "125")
    icon: string;    // Иконка (эмодзи)
    change: string;  // Изменение (например "+12%")
    positive: boolean; // Рост (true) или падение (false)
  };
  
  export default function StatCard({ title, value, icon, change, positive }: StatCardProps) {
    return (
      <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-colors">
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl">{icon}</span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            positive 
              ? "bg-green-500/10 text-green-400" 
              : "bg-red-500/10 text-red-400"
          }`}>
            {change}
          </span>
        </div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400 mt-1">{title}</p>
      </div>
    );
  }