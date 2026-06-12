import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const client = await prisma.client.update({
      where: { id: parseInt(id) },
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        company: body.company,
        status: body.status,
      },
    });

    return NextResponse.json(client);
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при обновлении клиента" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.client.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Клиент удалён" });
  } catch (error) {
    return NextResponse.json(
      { error: "Ошибка при удалении клиента" },
      { status: 500 }
    );
  }
}