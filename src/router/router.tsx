import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HomePage from '../components/homepage/HomePage';
import About from '../components/about/About';
import Categories from '../components/categoriesPage/categoriesPage';

import ArticlesPage from '../components/articlesPage/articlesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <About /> },
      { path: '/categories', element: <Categories /> },
      { path: '/articles', element: <ArticlesPage /> },
    ],
  },
]);

export default router;