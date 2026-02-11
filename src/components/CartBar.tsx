import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartBar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  if (cart.length === 0) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-6">
      <span>{totalItems} item(s) in cart</span>
      <button
        onClick={() => navigate("/checkout")}
        className="bg-white text-primary px-4 py-1 rounded-full font-semibold"
      >
        Checkout
      </button>
    </div>
  );
}
