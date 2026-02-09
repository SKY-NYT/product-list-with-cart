import { useMemo, memo } from "react";
import { DessertCard } from "./DessertCard";
import { Text } from "./Text";
import type { DessertListProps } from "../types";
import { useCart } from "../hooks/useCart";

export const DessertList = memo(function DessertList({
  data,
}: DessertListProps) {
  const { cart } = useCart();

  const cartMap = useMemo(() => {
    const map = new Map();
    cart.forEach((item) => map.set(item.name, item.quantity));
    return map;
  }, [cart]);

  return (
    <div className="w-full lg:w-full">
      <Text variant="p1" className="mb-8">
        Desserts
      </Text>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-y-8 gap-x-6">
        {data.map((item) => {
          const quantity = cartMap.get(item.name) ?? 0;

          return (
            <DessertCard key={item.name} product={item} quantity={quantity} />
          );
        })}
      </div>
    </div>
  );
});
