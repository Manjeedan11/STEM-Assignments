import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

function ProductCard(props) {
  const handleClick = () => {
    console.log("Add to Cart {test:ok}");
  };

  return (
    <Card className="border-none ">
      <div className="bg-gray-50 rounded-lg p-4 flex justify-center items-center relative">
        <img src={props.image} className="w-full h-full object-cover" />
        <Heart className="absolute top-4 right-4 cursor-pointer z-10 text-red-500" />
      </div>
      <div className="flex items-center justify-between">
        <span className="block text-2xl font-semibold">{props.name}</span>
        <span className="block font-semibold">${props.price}</span>
      </div>
      <div className="text-sm">
        <p className="text-sm">{props.description}</p>
      </div>
      <div className="mt-2">
        <Button
          className=" bg-white border-2 border-black text-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition duration-200 ease-in-out"
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
