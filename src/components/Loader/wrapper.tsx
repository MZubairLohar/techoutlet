import { useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Loader from ".";

type Props = {
  children: ReactNode;
};

const LoaderWrapper: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <div
        className={`${
          loading
            ? "opacity-85"
            : "opacity-100 transition-opacity duration-300"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default LoaderWrapper;
