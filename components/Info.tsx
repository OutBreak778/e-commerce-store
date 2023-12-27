"use client"

import { Product } from "@/types";
import React from "react";
import Currency from "./ui/Currency";
import { Button } from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {


  const cart = useCart()

  const AddToCart = () => {
    cart.addItem(data)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          <h3 className="font-bold text-bold text-black">Size :</h3>
          <div className="flex justify-between items-center">
            <div>{data?.size?.name}</div>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-bold text-bold text-black">Color :</h3>
          <div className="flex justify-between items-center">
            <div
              className="w-6 h-6 rounded-full border border-gray-600"
              style={{ backgroundColor: data?.color?.value }}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-4">
        <Button onClick={AddToCart} className="flex items-center gap-x-2">
            Add to Cart <ShoppingCart className="h-4 w-4 ml-3" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
