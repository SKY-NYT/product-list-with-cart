
import { DessertList } from "./components/DessertList";
import { Cart } from "./components/Cart";
import { useState } from "react";
import { OrderModal } from "./components/OrderModal";
import type { Dessert, CartItem } from "../types/types";
import data from "./data.json"


export function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

const handleConfirmOrder = () => {
  console.log("CONFIRM CLICKED");
  setIsOrderConfirmed(true);
};

  const handleStartNewOrder = () => {
    setCart([]); 
    setIsOrderConfirmed(false); 
  };
 
 const handleUpdateQuantity = (product: Dessert, delta: number) => {
  if (!product || !product.name) return;
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);

      if (existingItem) {
        return prevCart
          .map((item) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + delta }
              : item
          )
          .filter((item) => item.quantity > 0); 
      }

     return delta > 0 ? [...prevCart, { ...product, quantity: 1 }] : prevCart;
    });
  };
  const handleRemoveItem = (productName: string) => {
    setCart((prev) => prev.filter((item) => item.name !== productName));
  };

  const orderTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="bg-preset-rose-50 ">
      <div className="p-6 md:p-10 lg:py-22 lg:px-10 max-w-1440 mx-auto h-auto min-h-screen ">
        <main className=" flex  flex-col   lg:flex-row gap-8 ">
          <DessertList data={data} 
            cart={cart} 
            onUpdate={handleUpdateQuantity} />
          <Cart cart={cart} onRemove={handleRemoveItem} onConfirm={handleConfirmOrder} />
        
        </main>
      </div>
      {isOrderConfirmed && (
  <OrderModal 
    cart={cart} 
    total={orderTotal}
    onNewOrder={handleStartNewOrder} 
  />
)}
    </div>
  );
} 