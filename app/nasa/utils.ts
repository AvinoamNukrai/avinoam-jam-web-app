export async function getData(count: number) {
  const API_KEY = process.env.NASA_API_KEY; // Use environment variable for the API key

  if (!API_KEY) {
    console.error(
      "NASA API key is missing! Please check your environment variables."
    );
    return [];
  }

  const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Ensure the response data is an array
    if (!Array.isArray(data)) {
      throw new Error("Unexpected response format: Expected an array.");
    }

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

export interface ApodItem {
  title: string;
  explanation: string;
  date: string;
  url: string;
}
