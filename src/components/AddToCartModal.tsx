import { useEffect } from "react";
import { X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

interface Props {
  item: any;
  onClose: () => void;
}

export default function AddToCartModal({ item, onClose }: Props) {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    if (item) {
      addToCart({
        _id: item._id,
        name: item.name,
        price: item.price,
        discountPrice: item.discountPrice,
        images: item.images,
        quantity: 0.5,
      });
    }
  }, [item]);

  const getPrice = (p: any) =>
    p.discountPrice > 0 ? p.discountPrice : p.price;

  const grandTotal = cart.reduce(
    (acc, p) => acc + getPrice(p) * p.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[95%] max-w-3xl rounded-2xl shadow-xl p-6 relative max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          <X />
        </button>

        <h2 className="text-3xl font-bold text-[#1A6EF4] mb-6">
          Your Cart
        </h2>

        <div className="space-y-4">
          {cart.map((p) => (
            <div
              key={p._id}
              className="flex items-center gap-4 border rounded-xl p-3 shadow-sm"
            >
              <img
                src={p.images?.[0]}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{p.name}</h3>

                {/* ✅ Quantity Controls */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(p._id, "dec")}
                    className="w-8 h-8 border rounded-md text-lg"
                  >
                    −
                  </button>

                  <span className="font-semibold">{p.quantity}</span>

                  <button
                    onClick={() => updateQuantity(p._id, "inc")}
                    className="w-8 h-8 border rounded-md text-lg"
                  >
                    +
                  </button>
                </div>

                <p className="text-sm mt-1">
                  Rs {getPrice(p)} × {p.quantity} ={" "}
                  <span className="font-bold">
                    Rs {getPrice(p) * p.quantity}
                  </span>
                </p>
              </div>

              <button
                onClick={() => removeFromCart(p._id)}
                className="text-red-500"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-8 border-t pt-6 flex flex-col gap-4">
            <div className="flex justify-between text-xl font-semibold">
              <span>Total:</span>
              <span>Rs {grandTotal}</span>
            </div>

            <button
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              className="w-full py-3 bg-[#1A6EF4] text-white rounded-xl font-semibold"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
