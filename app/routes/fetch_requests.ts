const globalUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getPubsInfo(page: number,token: string) {
  try {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
    const url = `${globalUrl}/pubs?page=${page}`;
    const res = await fetch(url, config);
    if (res.ok) {
      const data = res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
