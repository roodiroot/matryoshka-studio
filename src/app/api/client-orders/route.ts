import { NextResponse } from "next/server";
import { sendNotification } from "../order/telegram";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");
  const chatid = searchParams.get("chatid");
  console.log(chatid);

  if (text && text.length > 10 && Number(chatid)) {
    const response = await sendNotification(text, "HTML", Number(chatid));
    await sendNotification(text);
    if (!response.ok) {
      return NextResponse.json({ message: "Ошибка отправки сообщение" });
    }
    return new Response("ok", {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
  return NextResponse.json({ message: "Не верный формат сообщения" });
}
