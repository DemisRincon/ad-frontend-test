"use client";
import Image from "next/image";

interface CartItemProps {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  genre: string;
  onRemove: (id: string) => void;
}

export function CartItem({
  id,
  name,
  description,
  price,
  image,
  genre,
  onRemove,
}: CartItemProps) {
  return (
    <div className="relative border-b py-5 h-[332px] sm:h-auto sm:w-full sm:pb-0 w-full 2xl:max-w-[678px] sm:min-h-[196px]">
      <div className="flex flex-col sm:flex-row items-start justify-between h-full ">
        <div className="h-[136px] w-[259px] sm:h-[156px] sm:w-[256px] flex-shrink-0 overflow-hidden pb-4 px-4">
          <Image
            src={image}
            alt={name}
            width={259}
            height={136}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col px-4 w-full font-archivo">
          <div className="flex flex-1 flex-col">
            <div className="text-sm font-bold pb-3 racking-wide text-contentTertiary uppercase">
              {genre}
            </div>
            <h3 className="text-lg font-bold text-contentSecondary pb-2">
              {name}
            </h3>
            {description && (
              <p className="text-base text-contentTertiary max-w-[80%]">
                {description}
              </p>
            )}
          </div>
          <div className="text-right w-full">
            <span className="text-base font-medium">${price}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="absolute right-0 top-5"
        aria-label="Remove item"
      >
        <Image src="/x.svg" alt="Close Icon" width={24} height={24} />
      </button>
    </div>
  );
}
