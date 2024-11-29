export async function getData(count: number) {
  const API_KEY = process.env.NASA_API_KEY;
  const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export interface ApodItem {
  title: string;
  explanation: string;
  date: string;
  url: string;
}
