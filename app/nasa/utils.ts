export async function getData(count: number) {
  const apiKey = process.env.NASA_API_KEY; // Use environment variable for API key

  if (!apiKey) {
    console.error("NASA API key is missing!");
    return null;
  }

  const dataEndPoint = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

  try {
    const res = await fetch(dataEndPoint);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.map((item: any) => ({
      title: item.title,
      explanation: item.explanation,
      date: item.date,
      url: item.url,
    }));
  } catch (error) {
    console.error("Error fetching data from NASA API:", error);
    return null; // Return null on failure
  }
}
