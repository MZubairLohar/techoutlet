import PhoneIcon from "@mui/icons-material/Phone";

const WhatsAppButton = () => {
  const handleCallClick = () => {
    window.location.href = "tel:02080620553";
  };

  return (
    <button
      onClick={handleCallClick}
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-5 py-3.5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 z-50 flex items-center gap-2 border border-white/20"
      aria-label="Call Now"
    >
      <PhoneIcon />
      <span className="font-semibold text-sm md:text-base">Call Now - Free Estimate</span>
    </button>
  );
};

export default WhatsAppButton;