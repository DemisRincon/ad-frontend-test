import { Game } from "@/utils/types";
import React, { FC } from "react";
import Image from "next/image";

interface GameCardProps {
  game: Game;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  const { id, name, image, isNew, genre, price } = game;

  return (
    <article className="w-full h-full flex justify-center 2xl:block">
      <div
        className="bg-white container border border-fillTertiary rounded-2xl w-[327px] 2xl:w-[380px] h-[436px] p-6  "
        aria-labelledby={`game-title-${id}`}
        title={name}
      >
        <div
          className="h-[240px] 2xl:w-full overflow-hidden rounded-t-2xl relative"
          title={`Cover image of ${name}`}
        >
          {image && (
            <Image
              src={image}
              alt={`Cover image of ${name}`}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          )}
          {isNew && (
            <div
              className="absolute top-2 left-2 bg-fillQuinary text-contentSecondary text-base px-2 py-1 rounded font-archivo"
              aria-label="New"
              title="New"
            >
              New
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between mt-5 h-[128px] font-archivo font-bold">
          <div>
            <p className="text-contentTertiary text-base" title={genre}>
              {genre}
            </p>
            <div className="flex justify-between items-center mt-3 font-archivo font-bold text-contentSecondary">
              <h3 id={`game-title-${id}`} title={name} className="truncate">
                {name}
              </h3>
              <span className="font-bold" title={`Price: $${price}`}>
                ${price}
              </span>
            </div>
          </div>
          <button
            className="w-full h-14 text-center border rounded-lg border-contentSecondary hover:bg-gray-50 transition-colors text-base font-archivo tracking-[0.5px]"
            aria-label={`Add ${name} to cart`}
            title={`Add ${name} to cart`}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
};

export default GameCard;
