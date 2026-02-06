import { DessertCard } from "./DessertCard";
import { Text } from "./Text";
import type {  DessertListProps } from "../types";
import { useCart } from "../hooks/useCart";


export function DessertList({ data }: DessertListProps) {
  const { cart } = useCart();
  return (
    <div className="w-full lg:w-full">
      <Text variant="p1" className="mb-8">
        Desserts
      </Text>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-y-8 gap-x-6">
        {data.map((item) => {
          const cartItem = cart.find((cartItem) => cartItem.name === item.name);
          const quantity = cartItem ? cartItem.quantity : 0;
          return (
            <DessertCard
              key={item.name}
              product={item}
              quantity={quantity}
            />
          );
        })}
      </div>
    </div>
  );
}
<q></q>