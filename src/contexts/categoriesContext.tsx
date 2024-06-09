import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import axios from 'axios';

import { CategoryInterface } from '../@types/dataTypes';

interface CategoriesContextInterface {
  categories: CategoryInterface[];
}

// Useful resource on how to create a context: https://www.freecodecamp.org/news/context-api-in-react/

const CategoriesContext = createContext<CategoriesContextInterface | undefined>(
  undefined
);

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
};

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/categories'
        );
        if (response.status === 200) {
          setCategories(response.data);
        } else {
          throw new Error('Failed to fetch categories');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  // Useful resource on how to avoid useless rendering: https://dev.to/femi_akinyemi/how-to-prevent-unnecessary-react-component-re-rendering-3c08
  const value = useMemo(() => ({ categories }), [categories]);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
