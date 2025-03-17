const fetchGames = async (genre: string | null = null, page: number = 1) => {
  try {
    const url = new URL(
      "/api/games",
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_VERCEL_URL
    );
    if (genre) url.searchParams.append("genre", genre);
    url.searchParams.append("page", page.toString());

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch games:", error);
    throw error;
  }
};

export default fetchGames;
