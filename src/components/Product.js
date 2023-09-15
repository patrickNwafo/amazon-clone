import Image from "next/image";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(1);

  const [hasPrime, setHasPrime] = useState(true);
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        alt="Product Image"
        className=" object-contain"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array.from({ length: rating }, (_, i) => (
          <AiFillStar key={i} className="h-5 text-yellow-500" />
        ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        {/* <Currency quantity={price} currency="GBP" /> */}
        <span>£ {price}</span>
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://links.papareact.com/fd"
            alt="image"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;

// const [rating, setRating] = useState(1);

//   const [hasPrime, setHasPrime] = useState(true);

//   useEffect(() => {
//     setRating(
//       Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
//     );
//     setHasPrime(Math.random() < 0.5);
//   }, []);
