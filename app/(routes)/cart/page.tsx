"use client";

import Container from "@/components/ui/Container";
import React, { useEffect, useState } from "react";
import CartItem from "./components/CartITem";
import Summary from "./components/Summary";
import { useCart } from "@/hooks/useCart";

const CartPage = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-600">No Item found in your Cart!</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
          </div>
          <Summary />
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
