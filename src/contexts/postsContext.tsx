import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import axios from 'axios';

import { PostInterface } from '../@types/dataTypes';

interface PostsContextInterface {
  posts: PostInterface[];
}

// Useful resource on how to create a context: https://www.freecodecamp.org/news/context-api-in-react/

const PostsContext = createContext<PostsContextInterface | undefined>(
  undefined
);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        if (response.status === 200) {
          setPosts(response.data);
        } else {
          throw new Error('Failed to fetch posts');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  // Useful resource on how to avoid useless rendering: https://dev.to/femi_akinyemi/how-to-prevent-unnecessary-react-component-re-rendering-3c08
  const value = useMemo(() => ({ posts }), [posts]);

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
