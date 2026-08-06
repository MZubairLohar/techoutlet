import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

const WhatsAppButton = () => {
  const phoneNumber = "442080620553"; // without +


  const handleCallClick = () => {
    const telUrl = `tel:+${phoneNumber}`;
    window.location.href = telUrl;
  };

  return (
    <>

      {/* Call Now Button */}
      <button
        onClick={handleCallClick}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
        aria-label="Call Now"
      >
        <PhoneIcon />
        <span className="ml-2 font-semibold">Call Now - free Estimate</span>
      </button>
    </>
  );
};

export default WhatsAppButton;