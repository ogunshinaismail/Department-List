import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios'
import { CatalogData } from "../types";

interface Catalogdata {
    catalog: CatalogData[],
    error: unknown,
    handleSelectAllCatalog: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void
    isAllSelected: boolean,
    selectedItems: Set<number>,
}

const CatalogContext = createContext({} as Catalogdata);

export default function CatalogProvider({children}: { children: React.ReactNode }) {
    const END_POINT = 'http://3.88.1.181:8000/products/public/catalog?supplier=FragranceNet&first=0&last=50'
    const [catalog, setCatalog] = useState<CatalogData[]>([])
    const [error, setError] = useState<unknown>(null)
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

    const fetchCatalog = async () => {
        try {
            const { data } = await axios.get<CatalogData[]>(END_POINT);
            setCatalog(data)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchCatalog()
    }, [])

    const handleSelectAllCatalog = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
          const allItemIds = new Set(catalog.map(product => product.SKU));
          setSelectedItems(allItemIds);
        } else {
          setSelectedItems(new Set());
        }
      };
    
      const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const newSelectedItems = new Set(selectedItems);
        if (event.target.checked) {
          newSelectedItems.add(id);
        } else {
          newSelectedItems.delete(id);
        }
        setSelectedItems(newSelectedItems);
      };

      const isAllSelected = selectedItems.size === catalog.length;
    

    return (
        <CatalogContext.Provider
            value={{
                catalog,
                error,
                handleSelectAllCatalog,
                handleCheckboxChange,
                isAllSelected,
                selectedItems
            }}
        > 
            {children}
        </CatalogContext.Provider>
    );
}

export function useCatalog() {
    return useContext(CatalogContext);
  }