// import React from "react";

// const CheckoutPage = () => {
//   return (
//     <div className="min-h-screen bg-blue-100 flex items-center justify-center py-16 px-4">
//       <div className="w-full max-w-4xl bg-white shadow-md rounded-md p-10">
        
//         {/* Heading */}
//         <h1 className="text-5xl font-serif text-center mb-10">Checkout</h1>

//         {/* Shipping Address */}
//         <div className="mb-8">
//           <h2 className="font-semibold mb-2">Shipping Address</h2>
//           <input
//             type="text"
//             placeholder="Shipping Address *"
//             className="w-full border border-gray-300 px-4 py-3 rounded outline-none focus:border-blue-400"
//           />
//         </div>

//         {/* Order Data */}
//         <div className="mb-8">
//           <h2 className="font-semibold mb-4">Order Data</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <input
//               type="text"
//               placeholder="First Name *"
//               className="border border-gray-300 px-4 py-3 rounded outline-none focus:border-blue-400"
//             />
//             <input
//               type="text"
//               placeholder="Last Name *"
//               className="border border-gray-300 px-4 py-3 rounded outline-none focus:border-blue-400"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <input
//               type="email"
//               placeholder="Email Address *"
//               className="border border-gray-300 px-4 py-3 rounded outline-none focus:border-blue-400"
//             />
//             <input
//               type="text"
//               placeholder="Phone Number *"
//               className="border border-gray-300 px-4 py-3 rounded outline-none focus:border-blue-400"
//             />
//           </div>

//           <textarea
//             rows={4}
//             placeholder="Message *"
//             className="w-full border border-gray-300 px-4 py-3 rounded outline-none focus:border-blue-400"
//           />
//         </div>

//         {/* Payment Method */}
//         {/* <div className="mb-10">
//           <h2 className="font-semibold mb-4">Payment Method</h2>
//           <div className="flex items-center gap-10">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input type="radio" name="payment" />
//               <span>Cash On Delivery</span>
//             </label>
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input type="radio" name="payment" />
//               <span>Payment Online</span>
//             </label>
//           </div>
//         </div> */}

//         {/* Button */}
//         <button className="w-full border-2 border-blue-500 text-blue-500 py-3 rounded-md font-semibold text-lg hover:bg-blue-500 hover:text-white transition">
//           Confirm Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;













import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const CheckoutPage = () => {
  const { cart } = useCart(); // all accessories user added

  const [formData, setFormData] = useState({
    shippingAddress: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderDetails = {
      checkoutForm: formData,
      accessories: cart, // item user clicked and added
      orderInfo: {
        totalItems: cart.length,
        totalQuantity: cart.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ),
        date: new Date().toLocaleString(),
      },
    };

    // console.log("===== ORDER DATA =====");
    // console.log(orderDetails);
  };

  return (
    <div className="min-h-screen bg-[#f7efe6] flex items-center justify-center py-16 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white shadow-md rounded-md p-10"
      >
        <h1 className="text-5xl font-serif text-center mb-10">Checkout</h1>

        {/* Shipping Address */}
        <div className="mb-8">
          <h2 className="font-semibold mb-2">Shipping Address</h2>
          <input
            type="text"
            name="shippingAddress"
            placeholder="Shipping Address *"
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded outline-none focus:border-orange-400"
          />
        </div>

        {/* Order Data */}
        <div className="mb-8">
          <h2 className="font-semibold mb-4">Order Data</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded outline-none focus:border-orange-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded outline-none focus:border-orange-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded outline-none focus:border-orange-400"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              onChange={handleChange}
              className="border border-gray-300 px-4 py-3 rounded outline-none focus:border-orange-400"
            />
          </div>

          <textarea
            rows={4}
            name="message"
            placeholder="Message *"
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded outline-none focus:border-orange-400"
          />
        </div>

        {/* Payment Method */}
        <div className="mb-10">
          <h2 className="font-semibold mb-4">Payment Method</h2>
          <div className="flex items-center gap-10">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash On Delivery"
                onChange={handleChange}
              />
              <span>Cash On Delivery</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="Payment Online"
                onChange={handleChange}
              />
              <span>Payment Online</span>
            </label>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full border-2 border-orange-500 text-orange-500 py-3 rounded-md font-semibold text-lg hover:bg-orange-500 hover:text-white transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
