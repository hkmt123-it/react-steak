import React from "react";

function Card({ name, img, price, dsc, rate, country }) {
  return (
    <div className="group w-85 overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e)=>e.target.src = "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"}
        />

        {/* Rating */}
        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow">
          ⭐ {rate}
        </div>

        {/* Country */}
        <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-md">
          {country}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {dsc}
          </p>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-3">
          <div>
            <p className="text-sm text-gray-400">Price</p>
            <h3 className="text-3xl font-extrabold text-red-500">
              ${price}
            </h3>
          </div>

          <button className="rounded-2xl bg-black px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-500">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;