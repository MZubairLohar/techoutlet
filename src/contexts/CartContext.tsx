// import React, { createContext, useContext, useState, ReactNode } from "react";

// export interface CartItem {
//   _id: string;
//   name: string;
//   price: number;
//   discountPrice: number;
//   images: string[];
//   quantity: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
// }


// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const ctx = useContext(CartContext);
//   if (!ctx) throw new Error("useCart must be used inside CartProvider");
//   return ctx;
// };

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//   setCart((prev) => {
//     const exists = prev.find((i) => i._id === item._id);

//     if (exists) {
//       return prev.map((i) =>
//         i._id === item._id
//           ? { ...i, quantity: i.quantity + item.quantity }
//           : i
//       );
//     }

//     return [...prev, item];
//   });
// };


//   const removeFromCart = (id: string) => {
//     setCart((prev) => prev.filter((item) => item._id !== id));
//   };

//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };







import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  discountPrice: number;
  images: string[];
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, type: "inc" | "dec") => void; // ✅ NEW
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exist = prev.find((p) => p._id === item._id);

      if (exist) {
        return prev.map((p) =>
          p._id === item._id
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }

      return [...prev, item];
    });
  };

  const updateQuantity = (id: string, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((p) => {
        if (p._id === id) {
          if (type === "inc") return { ...p, quantity: p.quantity + 1 };
          if (type === "dec" && p.quantity > 1)
            return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      })
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p._id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
