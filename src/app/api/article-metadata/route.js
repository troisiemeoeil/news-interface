export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category") || "general";
    const url = new URL(`${process.env.BASE_URL}/top-headlines`);
    url.searchParams.set("category", category);
    url.searchParams.set("country", "us");
    url.searchParams.set("pageSize", "15");
    url.searchParams.set("page", "1");
    url.searchParams.set("apiKey", process.env.API_KEY);

    const res = await fetch(url);

    const data = await res.json()

    return Response.json(data);
}

