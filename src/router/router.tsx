import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import HomePage from '../components/homepage/HomePage';
import About from '../components/about/About';
import Categories from '../components/categoriesPage/categoriesPage';
import SelectedCategory from '../components/category/SelectedCategory';
import ArticlesPage from '../components/articlesPage/articlesPage';
import SelectedArticle from '../components/article/SelectedArticle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <About /> },
      { path: '/categories', element: <Categories /> },
      { path: '/categories/:slug', element: <SelectedCategory /> },
      { path: '/articles', element: <ArticlesPage /> },
      { path: '/articles/:slug', element: <SelectedArticle /> },
    ],
  },
]);

export default router;
