import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// 🟢 Define Types for TypeScript
interface SubChild {
  id: string;
  name: string;
}

interface Child {
  id: string;
  name: string;
  image: string;
  link: string;
  dec: string;
  subChildren: SubChild[];
}

interface Parent {
  id: string;
  name: string;
  image: string;
  link: string;
  children: Child[];
}

// 🟢 Create Context
const DataContext = createContext<{ data: Parent[] }>({ data: [] });

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Parent[]>([]);

  useEffect(() => {
    fetch("/data.json")  // This assumes the data.json is inside the public folder
    .then((res) => res.json())
      .then((jsonData: Parent[]) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  console.log(data.length);

  return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};

// 🟢 Custom Hook for Easy Access
export const useData = () => useContext(DataContext);
