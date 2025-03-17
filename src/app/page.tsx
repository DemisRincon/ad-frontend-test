import GenreSelector from "@/components/genre-selector";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="border-b border-fillPrimary">
        <GenreSelector genreList={["All"]} selectedGenre={"All"} />
      </section>
    </>
  );
};

export default Home;
