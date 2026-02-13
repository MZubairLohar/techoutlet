import { useContext, createContext, useState, ReactNode } from "react";

type LoaderContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export function LoaderProvider({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader(): LoaderContextType {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}
