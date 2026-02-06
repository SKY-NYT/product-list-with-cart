import { Text } from "./Text";
import { Buttons } from "./Buttons";
import type { DessertCardProps } from "../types";
import { useCart } from "../hooks/useCart";
  


export function DessertCard({ product, quantity}: DessertCardProps) {
  const { addItem, decrementItem } = useCart();

  if (!product) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-10 w-full h-auto">
      <div className="relative group">
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <img
            src={product.image.mobile}
            alt={product.name}
            className={`w-full h-auto object-cover rounded-xl border-2 transition-all duration-300 ${quantity > 0 ? "border-preset-red" : "border-transparent"}`}
          />
        </picture>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full flex justify-center">
          {quantity > 0 ? (
            <Buttons
              variant="stepper"
              count={quantity}
                onIncrement={() => { addItem(product) }}
              onDecrement={() => { decrementItem(product.name) }}
            />
          ) : (
            <Buttons variant="cartadd" onClick={() => { addItem(product) }}>
              <Text variant="p4b">Add to Cart</Text>
            </Buttons>
          )}
        </div>
      </div>

      <div className="mt-4">
        <Text as="p" variant="p4" className="text-preset-rose-500">
          {product.category}
        </Text>
        <Text as="p" variant="p3" className="text-preset-rose-900">
          {product.name}
        </Text>
        <Text as="p" variant="p3" className="text-preset-red">
          ${product.price.toFixed(2)}
        </Text>
      </div>
    </div>
  );
}
