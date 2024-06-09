import { ReactNode } from 'react';
import { CategoriesProvider } from './categoriesContext';
import { PostsProvider } from './postsContext';

function AppContextsProvider({ children }: { children: ReactNode }) {
  return (
    <CategoriesProvider>
      <PostsProvider>{children}</PostsProvider>
    </CategoriesProvider>
  );
}

export default AppContextsProvider;
