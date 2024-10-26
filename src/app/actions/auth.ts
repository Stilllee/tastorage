"use server";

export async function adminLogin(password: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/admin-login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    },
  );

  if (res.status === 401) return { error: "비밀번호가 일치하지 않습니다" };
  if (!res.ok) throw new Error();

  const data = await res.json();
  return { token: data.access_token };
}
