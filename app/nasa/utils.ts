export async function getData(count: number) {
  const API_KEY = process.env.NASA_API_KEY; // Ensure the API key is retrieved from environment

  if (!API_KEY) {
    console.error(
      "NASA API key is missing! Please check your environment variables."
    );
    return [];
  }

  const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`;
  console.log("Fetching data from:", endpoint); // Log the endpoint for debugging

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log("Fetched data:", data); // Log the response for debugging
    return data.map((item: any) => ({
      title: item.title || "Untitled",
      explanation: item.explanation || "No explanation available.",
      date: item.date || "Unknown date",
      url: item.url || "",
    }));
  } catch (error) {
    console.error("Error fetching data from NASA API:", error);
    return []; // Return an empty array on failure
  }
}
