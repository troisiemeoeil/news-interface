
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  const url = new URL(`${process.env.BASE_URL}/everything`);
  url.searchParams.set("q", query);
  url.searchParams.set("apiKey", process.env.API_KEY);
  url.searchParams.set("pageSize", 5); 
  const response = await fetch(url);
  const data = await response.json();

  return new Response(JSON.stringify({ articles: data.articles || [] }), {
    status: 200,
  });
}
