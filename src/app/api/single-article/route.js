export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const articleUrl = searchParams.get("title");


    const url = new URL(`${process.env.BASE_URL}/everything`);
    url.searchParams.set("q", articleUrl);
    url.searchParams.set("apiKey", process.env.API_KEY);

    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();
    console.log(data);
    
    return Response.json(data);
  } catch (error) {
    console.error("Backend error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
