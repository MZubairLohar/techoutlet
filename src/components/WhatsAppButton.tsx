import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "020 8062 0553"; // without +
  const message = "Hello, I want more information.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
    >
      💬
    </button>
  );
};

export default WhatsAppButton;