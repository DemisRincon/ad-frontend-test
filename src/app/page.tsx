import GamesGrid from "@/components/games-grid";
import GenreSelector from "@/components/genre-selector";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="border-b border-fillPrimary">
        <GenreSelector genreList={["All"]} selectedGenre={"All"} />
      </section>
      <section>
        <GamesGrid
          initialGameList={[
            {
              id: "1",
              genre: "Action",
              image: "/game-images/cyberpunk2077.jpeg",
              name: "Cyberpunk 2077",
              description:
                "An open-world, action-adventure story set in Night City.",
              price: 59.99,
              isNew: true,
            },
            {
              id: "2",
              genre: "RPG",
              image: "/game-images/thewitcher3.jpeg",
              name: "The Witcher 3: Wild Hunt",
              description:
                "A story-driven, next-generation open world role-playing game.",
              price: 39.99,
              isNew: false,
            },
            {
              id: "3",
              genre: "Adventure",
              image: "/game-images/zeldabotw.jpeg",
              name: "The Legend of Zelda: Breath of the Wild",
              description:
                "An epic adventure that breaks boundaries in the Zelda series.",
              price: 59.99,
              isNew: true,
            },
          ]}
        />
      </section>
    </>
  );
};

export default Home;
