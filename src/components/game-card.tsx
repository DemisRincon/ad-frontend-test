import { Game } from "@/utils/types";
import React, { FC, useState } from "react";
import Image from "next/image";
import { addToCart, isItemInCart, removeFromCart } from "@/services/cart";
import NewBadge from "./ui/new-badge";

interface GameCardProps {
  game: Game;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  const { id, name, image, isNew, genre, price } = game;
  const [isInCart, setIsInCart] = useState(isItemInCart(id));

  const toggleCart = () => {
    if (!isInCart) {
      addToCart(game);
      setIsInCart(true);
    } else {
      removeFromCart(id);
      setIsInCart(false);
    }
  };

  return (
    <article
      className="w-full h-full flex justify-center 2xl:block"
      aria-labelledby={`game-title-${id}`}
    >
      <div
        className="bg-white container border border-fillTertiary rounded-2xl w-[327px] 2xl:w-[380px] h-[436px] p-6"
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
          {isNew && <NewBadge />}
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
            onClick={toggleCart}
            className={`w-full h-14 text-center border rounded-lg transition-colors text-base font-archivo tracking-[0.5px] ${
              isInCart
                ? "bg-contentSecondary text-white border-contentSecondary hover:bg-opacity-90"
                : "border-contentSecondary hover:bg-gray-50"
            }`}
            aria-label={
              isInCart ? `Remove ${name} from cart` : `Add ${name} to cart`
            }
            title={
              isInCart ? `Remove ${name} from cart` : `Add ${name} to cart`
            }
          >
            {isInCart ? "REMOVE" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default GameCard;
