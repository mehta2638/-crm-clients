import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.client.deleteMany();

  const clients = [
    { name: "Иванов Иван", email: "ivanov@mail.ru", phone: "+7 (999) 111-22-33", company: "ООО Рога и Копыта", status: "Active" },
    { name: "Петрова Мария", email: "petrova@gmail.com", phone: "+7 (999) 444-55-66", company: "ИП Петрова", status: "New" },
    { name: "Сидоров Алексей", email: "sidorov@yandex.ru", phone: "+7 (999) 777-88-99", company: "АО Технологии", status: "Active" },
    { name: "Козлова Анна", email: "kozlova@mail.ru", phone: "+7 (999) 000-11-22", company: "ООО Цветы", status: "Inactive" },
    { name: "Морозов Дмитрий", email: "morozov@gmail.com", phone: "+7 (999) 333-44-55", company: "ИП Морозов", status: "New" },
    { name: "Волкова Елена", email: "volkova@mail.ru", phone: "+7 (999) 666-77-88", company: "ООО Дизайн Студия", status: "Active" },
    { name: "Новиков Артем", email: "novikov@yandex.ru", phone: "+7 (999) 222-33-44", company: "АО СтройГрупп", status: "Active" },
    { name: "Федорова Ольга", email: "fedorova@gmail.com", phone: "+7 (999) 555-66-77", company: "ИП Федорова", status: "New" },
  ];

  for (const c of clients) {
    await prisma.client.create({ data: c });
  }

  console.log("Added clients:", clients.length);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });


