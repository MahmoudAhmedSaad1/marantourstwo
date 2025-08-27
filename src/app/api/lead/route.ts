import { NextResponse } from "next/server";

const DDT = "https://api.dubaidaytrips.com/v1/inquires?tenant_id=58&language_id=51";

export async function POST(req: Request) {
  try {
    const payload = await req.json(); 
    const res = await fetch(DDT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: data }, { status: 400 });
    }
    return NextResponse.json({ ok: true, data }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Proxy error" }, { status: 500 });
  }
}
