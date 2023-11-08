import { NextResponse } from "next/server";
import { sendNotification } from "./telegram";

export async function POST(req: Request, res: Response) {
  return NextResponse.json({ ok: "ok" });
}
export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");
  if (text && text.length > 10) {
    const response = await sendNotification(text);
    if (!response.ok) {
      return NextResponse.json({ message: "Ошибка отправки сообщение" });
    }
    return NextResponse.json({ message: "OK" });
  }
  return NextResponse.json({ message: "Не верный формат сообщения" });
}
