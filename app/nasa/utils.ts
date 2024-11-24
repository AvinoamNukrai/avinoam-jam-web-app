export async function getData(count: number) {
  const apiKey = process.env.NASA_API_KEY; // Use environment variable for API key
  const dataEndPoint = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
  const res = await fetch(dataEndPoint);

  if (!res.ok) {
    throw new Error("Failed to fetch data from NASA API.");
  }

  const data = await res.json();
  return data.map((item: any) => ({
    title: item.title,
    explanation: item.explanation,
    date: item.date,
    url: item.url,
  }));
}
