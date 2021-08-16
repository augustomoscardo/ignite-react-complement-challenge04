import { useState } from "react";
import { useContext } from "react";
import { createContext, ReactNode } from "react";

type Continent = {
  slug?: string;
  id?: string;
  uid?: string;
  title?: string;
  summary?: string;
  description?: string;
  slider_image?: string;
  banner_image?: string;
  countries?: string;
  languages?: string;
  cities?: string;
  main_cities?: {
    city?: string;
    country?: string;
    thumbnail?: string;
    flag?: string;
  }
}

type ContinentContextData = {
  continents: Continent[];
  addContinents: (continents: Continent[]) => void;
}

type ContinentProviderProps = {
  children: ReactNode;
}

const ContinentContext = createContext({} as ContinentContextData)

export function ContinentProvider({ children }: ContinentProviderProps) {
  const [continents, setContinents] = useState<Continent[]>([])

  function addContinents(data) {
    setContinents([...continents, ...data])
  }

  return (
    <ContinentContext.Provider value={{ continents, addContinents }}>
      {children}
    </ContinentContext.Provider>
  )
}

export function useContinents() {
  const context = useContext(ContinentContext)

  return context
}



